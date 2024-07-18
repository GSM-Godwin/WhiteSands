import { db } from "@/lib/db"

const users = await db.user.findMany();
const posts = await db.post.findMany();
const pendingPosts = await db.post.findMany({
    where: {
        status: "PENDING"
    }
});

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
    {
        id: 3,
        title: "Pending Transactions",
        number: pendingPosts.length,
        href: "/dashboard/transactions"
    },
];
