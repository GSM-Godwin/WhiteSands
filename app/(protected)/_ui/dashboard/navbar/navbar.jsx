"use client"
import { usePathname } from "next/navigation"
import styles from "./navbar.module.css"
import {
  MdSearch
} from "react-icons/md"

const navbar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
      </div>
    </div>
  )
}

export default navbar
