import Image from "next/image";
import styles from './transactions.module.css'
import pic from "../../../../../public/assets/pic.png"
import { db } from "@/lib/db";

const Transactions = async () => {
    const posts = await db.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
    })
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Weight</td>
                        <td>Length</td>
                        <td>Height</td>
                        <td>Width</td>
                        <td>Pickup</td>
                        <td>Dropoff</td>
                        <td>D.G</td>
                        <td>L.A</td>
                        <td>H.R</td>
                    </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={index}>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={pic}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                
                                    <li className="list-none" key={post.id}>
                                        {post.name}
                                    </li>
                            </div>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.weight}
                            </li>
                        </td>
                        <td>
                            <li className="list-none flex" key={post.id}>
                                {post.length}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.height}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.width}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.pickupLocation}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                            {post.dropoffLocation}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.dangerousGoods}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.liveAnimals}
                            </li>
                        </td>
                        <td>
                            <li className="list-none" key={post.id}>
                                {post.humanRemains}
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