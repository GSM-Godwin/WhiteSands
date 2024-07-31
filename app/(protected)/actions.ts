"use server"

import { db } from "@/lib/db"
import { Status, UserRole } from "@prisma/client"
import { string } from "zod"

export const changeOrderStatus = async ({
    id,
    newStatus,
}: {
    id: number
    newStatus: Status
}) => {
    await db.post.update({
        where: { id },
        data: { status: newStatus}

    })
}

export const changeUserRole = async ({
    id,
    newRole,
}: {
    id: string
    newRole: UserRole
}) => {
    await db.user.update({
        where: { id },
        data: { role: newRole }
    })
}