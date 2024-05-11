import { UserRole } from "@prisma/client"
import * as z from "zod"

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    address: z.optional(z.string()),
    post: z.optional(z.string().min(4)),
    phone: z.optional(z.string().min(4))
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false
        }

        return true
    }, {
        message: "New Password is required!",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false
        }

        return true
    }, {
        message: "Password is required!",
        path: ["password"]
    })

export const NewPasswordSchema = z.object ({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
})

export const ResetSchema = z.object ({
    email: z.string().email({
        message: "Invalid Email"
    }),
})

export const LoginSchema = z.object ({
    email: z.string().email({
        message: "Invalid Email"
    }),
    password: z.string().min(1, {
        message: "Invalid Password"
    }),
    code: z.optional(z.string())
})

export const RegisterSchema = z.object ({
    email: z.string().email({
        message: "Invalid Email"
    }),
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
    name: z.string().min(3, {
        message: "Minimum of 3 characters"
    }),
})