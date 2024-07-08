import styles from './transactions.module.css'
import { db } from "@/lib/db";
import Link from "next/link";
import StatusDropdown from "@/app/(protected)/_components/StatusDropdown"

const Transactions = async () => {
    const posts = await db.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
    })
    const user = await db.user.findMany()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
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
                                    <Link href={`/posts/${post.id}`}>
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