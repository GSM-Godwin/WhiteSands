import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";
import { sendWelcomeEmail } from "./utils/email";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            });
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            // Allow OAuth without email verification
            if (account?.provider !== "credentials") {
                const existingUser = await getUserById(user.id);

                if (!existingUser) {
                    // User is new, send a welcome email
                    console.log(`New User!: ${user.email}`);
                    await sendWelcomeEmail(user.email);
                    window.alert("Registration Complete! Please check your email for further instructions.")
                    
                }

                return true;
            }

            const existingUser = await getUserById(user.id);            

            // Prevent SignIn without email verification
            if (!existingUser?.emailVerified) return false;

            if (existingUser.isTwoFactorEnabled) {
                const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

                if (!twoFactorConfirmation) return false;

                // Delete two factor confirmation for next sign in
                await db.twoFactorConfirmation.delete({
                    where: { id: twoFactorConfirmation.id }
                });
            }

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role;
            }

            if (session.user) {
                session.user.isTwoFactorEnabled = token.isTwoFactorEnabled;
            }

            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.isOauth = token.isOauth;
                session.user.phone = token.phone;
                session.user.address = token.address;
                session.user.post = token.post;
                session.user.role = token.role;
            }

            console.log("Session User:", session.user);
            console.log("Token:", token);
            console.log("User:", token.sub);
            

            console.log();
            

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const UserId = parseInt(token.sub, 10)
            const existingUser = await getUserById(UserId);

            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id);

            token.isOauth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.role = existingUser.role;
            token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
            token.phone = existingUser.phone;
            token.address = existingUser.address;
            token.post = existingUser.post;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});
