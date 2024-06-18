import { db } from "@/lib/db"

const users = await db.user.findMany()
const posts = await db.post.findMany()

export const cards = [
    {
        id: 1,
        title: "Total Users",
        number: users.length,
        href: "/dashboard/users"
    },
    {
        id: 2,
        title: "Total Transactions",
        number: posts.length,
        href: "/dashboard/transactions"
    },
]