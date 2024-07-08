import { RoleGate } from "@/components/auth/role-gate"
import Transactions from "../../_ui/dashboard/transactions/transactions"
import { UserRole } from "@prisma/client"
const page = async () => {
  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <div>
        <Transactions />
      </div>
    </RoleGate>
  )
}

export default page
