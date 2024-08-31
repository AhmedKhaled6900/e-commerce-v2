"use client"

import { FaUser } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { LogoutButton } from "./logout-button"
import { ExitIcon } from "@radix-ui/react-icons"
import { LoginButton } from "./login-button"
import { useCurrentUser } from "@/hooks/user/use-current-user"

export const UserButton = () => {
    const user = useCurrentUser()
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={""} />
                        <AvatarFallback className="bg-violet-600">
                            <FaUser className="text-white" />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    {
                       !user ? <LoginButton asChild>
                            <DropdownMenuItem>
                                <ExitIcon className="mr-2 h-4 w-4" />
                                sign in
                            </DropdownMenuItem>
                        </LoginButton> :
                            <LogoutButton >
                                <DropdownMenuItem>
                                    <ExitIcon className="mr-2 h-4 w-4" />
                                    sign out
                                </DropdownMenuItem>
                            </LogoutButton>
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>


    )

}
