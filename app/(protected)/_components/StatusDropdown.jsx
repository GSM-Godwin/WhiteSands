"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Status } from "@prisma/client"
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { changeOrderStatus } from "../actions"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

const StatusDropdown = ({ id, status}) => {
    const router = useRouter();
    const { mutate } = useMutation({
        mutationKey: ['change-order-status'],
        mutationFn: changeOrderStatus,
        onSuccess: () => router.refresh(),
    })
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="default" 
                    className="flex justify-between items-center text-[hsl(var(--secondary))] w-full"
                >
                    {status}
                    <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 bg-[hsl(var(--primary))]">
                {Object.keys(Status).map((status) => (
                    <DropdownMenuItem 
                        key={status} 
                        className={`flex text-sm gap-1 items-center p-2.5 text-[hsl(var(--secondary))] hover:bg-zinc-100 ${Status === status ? 'bg-[hsl(var(--secondary))]' : 'bg-[hsl(var(--primary))]'}`}
                        onClick={() => mutate({id, newStatus: status})}
                    >
                        <CheckIcon className={`mr-2 h-4 w-4 ${Status === status ? 'opacity-100': 'opacity-0'}`} />
                        {status}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default StatusDropdown