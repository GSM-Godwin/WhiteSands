import { RoleGate } from "@/components/auth/role-gate"
import Users from "../../_ui/dashboard/users/users"
import { UserRole } from "@prisma/client"

const UsersPage = async ({ searchParams }) => {
  return (
    // <RoleGate allowedRole={UserRole.ADMIN}>
      <div>
        <Users searchParams={searchParams} />
      </div>
    // </RoleGate>
  )
}

export default UsersPage
