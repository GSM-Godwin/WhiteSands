import { RoleGate } from "@/components/auth/role-gate"
import Transactions from "../../_ui/dashboard/transactions/transactions"
import { UserRole } from "@prisma/client"
const page = async ({ searchParams }) => {
  return (
     <RoleGate allowedRole={UserRole.ADMIN}>
      <div>
        <Transactions searchParams={searchParams} />
      </div>
     </RoleGate>
  )
}

export default page
