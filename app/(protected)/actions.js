"use server"

import { db } from "@/lib/db"
import { Status, UserRole } from "@prisma/client"
import { string, number } from "zod"

export const changeOrderStatus = async ({
    id,
    newStatus,
}) => {
    await db.post.update({
        where: { id },
        data: { status: newStatus}

    })
}

export const changeUserRole = async ({
    id,
    newRole,
}) => {
    await db.user.update({
        where: { id },
        data: { role: newRole }
    })
}