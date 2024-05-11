import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOauth: boolean;
    phone: string;
    address: string;
    post: string;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}