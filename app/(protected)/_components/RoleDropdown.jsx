"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserRole } from "@prisma/client"
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { changeUserRole } from "../actions"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

const RoleDropdown = ({ id, role}) => {
    const router = useRouter();
    const { mutate } = useMutation({
        mutationKey: ['change-user-role'],
        mutationFn: changeUserRole,
        onSuccess: () => router.refresh(),
    })
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="default" 
                    className="flex justify-between items-center text-[hsl(var(--secondary))] w-full"
                >
                    {role}
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 bg-[hsl(var(--primary))]">
                {Object.keys(UserRole).map((role) => (
                    <DropdownMenuItem 
                        key={role} 
                        className={`flex text-sm gap-1 items-center p-2.5 text-[hsl(var(--secondary))] hover:bg-zinc-100 ${UserRole === role ? 'bg-[hsl(var(--secondary))]' : 'bg-[hsl(var(--primary))]'}`}
                        onClick={() => mutate({id, newRole: role})}
                    >
                        <CheckIcon className={`mr-2 h-4 w-4 ${UserRole === role ? 'opacity-100': 'opacity-0'}`} />
                        {role}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default RoleDropdown