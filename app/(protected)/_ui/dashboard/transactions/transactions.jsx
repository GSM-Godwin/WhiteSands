import styles from './transactions.module.css'
import { db } from "@/lib/db";
import Link from "next/link";
import StatusDropdown from "@/app/(protected)/_components/StatusDropdown"
import Search from '../search/search';

const Transactions = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const posts = await db.post.findMany({
        where: {
            OR: [
                { name: { contains: q, mode: 'insensitive' } },
                { pickupLocation: { contains: q, mode: 'insensitive' } },
                { dropoffLocation: { contains: q, mode: 'insensitive' } },
                { id: { contains: q, mode: 'insensitive' } }
            ]
        },
        orderBy: {
            createdAt: "desc"
        },
    })
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {/* <h2 className={styles.title}>Latest Transactions</h2> */}
                <Search placeholder="Search for a shipment" />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Shipment ID</td>
                        <td>Pickup Loction</td>
                        <td>Dropoff Location</td>
                        <td>Status</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>
                                <div className={styles.user}>
                                    {/* <Image 
                                        src={pic}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    /> */}
                                    
                                        <li className="list-none" key={post.id}>
                                            {post.name}
                                        </li>
                                </div>
                            </td>
                            <td>
                                <li className="list-none" key={post.id}>
                                    <Link href={`/dashboard/transactions/${post.id}`} target='_blank'>
                                        {post.id}
                                    </Link>
                                </li>
                            </td>
                            <td>
                                <li className="list-none" key={post.id}>
                                    {post.pickupLocation}
                                </li>
                            </td>
                            <td>
                                <li className="list-none flex" key={post.id}>
                                    {post.dropoffLocation}
                                </li>
                            </td>
                            <td>
                                <li className="list-none" key={post.id}>
                                    <StatusDropdown id={post.id} status={post.status} />
                                </li>
                            </td>
                            <td>
                                <li className="list-none" key={post.id}>
                                    {post.price}
                                </li>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Transactions