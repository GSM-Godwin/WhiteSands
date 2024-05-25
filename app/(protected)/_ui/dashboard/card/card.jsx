import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"
import Link from "next/link"

const Card = ({item}) => {
    return (
        <div className={styles.container}>
            <Link href={item.path}>
                <MdSupervisedUserCircle size={24} />
                <div className={styles.texts}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.number}>{item.number}</span>
                    <span className={styles.detail}>
                        <span className={item.change > 0 ? styles.positive : styles.negative}>
                            {item.change}%
                        </span>{" "}
                        {item.change > 0 ? "more" : "less"} than last week
                    </span>
                </div>
            </Link>
            </div>
    )
}

export default Card