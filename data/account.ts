import { db } from "@/lib/db";

export const getAccountByUserId = async (userId: number) => {
    try {
        const account = await db.account.findFirst({
            where: { userId }
        })

        return account;
    } catch {
        return null
    }

}