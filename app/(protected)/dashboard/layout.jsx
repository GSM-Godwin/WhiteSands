import Sidebar from "../_ui/dashboard/sidebar/sidebar"
import Navbar from "../_ui/dashboard/navbar/navbar"

import styles from "../_ui/dashboard/dashboard.module.css"
import '../_ui/globals.css'

const layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout
