import { db } from "@/lib/db"

const users = await db.user.findMany()
const transactions = await db.transaction.findMany()

export const cards = [
    {
        id: 1,
        title: "Total Users",
        number: users.length,
        path: "/dashboard/users"
    },
    {
        id: 2,
        title: "Total Transactions",
        number: transactions.length,
        path: "/dashboard/transactions"
    },
    {
        id: 3,
        title: "Revenue",
        number: 0,
        path: "/dashboard/revenue"
    },
]