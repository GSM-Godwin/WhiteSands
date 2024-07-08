import { RoleGate } from "@/components/auth/role-gate"
import Users from "../../_ui/dashboard/users/users"
import { UserRole } from "@prisma/client"

const UsersPage = async () => {
  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <div>
        <Users />
      </div>
    </RoleGate>
  )
}

export default UsersPage
