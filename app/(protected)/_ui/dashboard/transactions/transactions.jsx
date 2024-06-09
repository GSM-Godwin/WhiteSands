import Image from "next/image";
import styles from './transactions.module.css'
import pic from "../../../../../public/assets/pic.png"
import { db } from "@/lib/db";

const Transactions = async () => {
    // const transactions = await db.transactions.findMany()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            {/* <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={pic}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                {transactions.map((transactions) => (
                                    <li key={transactions}>

                                    </li>
                                ))}
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Completed
                            </span>
                        </td>
                        <td>25-05-2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={pic}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>25-05-2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={pic}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>25-05-2024</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={pic}
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Completed
                            </span>
                        </td>
                        <td>25-05-2024</td>
                        <td>$300</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default Transactions