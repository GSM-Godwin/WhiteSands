import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (
    userId: number
) => {
    try {
        const twofactorConfirmation = await db.twoFactorConfirmation.findUnique({
            where: { userId }
        })

        return twofactorConfirmation
    } catch {
        return null
    }
}