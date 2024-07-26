"use client"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdShoppingBag
} from "react-icons/md"
import styles from "./sidebar.module.css"
import Image from "next/image"
import MenuLink from "./menuLink/menuLink"

import { UserButton } from "@/components/auth/user-button"
import { useCurrentUser } from "@/hooks/use-current-user"
import { RoleGate } from "@/components/auth/role-gate"
import { UserRole } from "@prisma/client"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
      {
        title: "New Shipment",
        path: "/dashboard/transactions/new",
        icon: <MdShoppingBag />
      },
    ]
  },
]

const Sidebar = () => {
  const user = useCurrentUser();

  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <div className={styles.container}>
        <div className={styles.user}>
          <UserButton />
          <div className={styles.userDetail}>
            <span className={styles.username}>{user.name}</span>
            <span className={styles.userTitle}>{user.role}</span>
          </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </RoleGate>
  )
}

export default Sidebar
