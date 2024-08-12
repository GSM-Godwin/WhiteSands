import { RoleGate } from "@/components/auth/role-gate"
import { UserRole } from "@prisma/client"
import { cards } from "../../lib/data"
import Card from "../_ui/dashboard/card/card"
import ActiveTransactions from "../_ui/dashboard/activeTransaction/activeTransactions"
import styles from "../_ui/dashboard/dashboard.module.css"
import Link from "next/link"

const dashboard = () => {
  return (
    // <RoleGate allowedRole={UserRole.ADMIN}>
        <div className={styles.wrapper}>
            <div className={styles.main}>
              <div className={styles.cards}>
                {cards.map((item, index) => (
                  <Link key={index} className={styles.cards} href={item.href}>
                    <Card item={item} key={item.id} />
                  </Link>
                ))}
              </div>
              <ActiveTransactions />
            </div>
        </div>
    // </RoleGate>
  )
}

export default dashboard
