"use client"

import { FaUser } from "react-icons/fa"
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons"
import { RiUserSettingsLine } from "react-icons/ri"
import { LiaShippingFastSolid } from "react-icons/lia"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "./logout-button"
import Link from "next/link"

export const UserIcon = () => {
    const user = useCurrentUser()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback className="bg-black">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <Link href="/server">
                    <DropdownMenuItem>
                        <PersonIcon className="h-4 w-4 mr-2" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <Link href="/settings">
                    <DropdownMenuItem>
                        <RiUserSettingsLine className="h-4 w-4 mr-2" />
                        Settings
                    </DropdownMenuItem>
                </Link>
                <Link href="/booking">
                    <DropdownMenuItem>
                        <LiaShippingFastSolid className="h-4 w-4 mr-2" />
                        Booking
                    </DropdownMenuItem>
                </Link>
                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}