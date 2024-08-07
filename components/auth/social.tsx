"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { useSearchParams } from "next/navigation"

import { Button } from "../ui/button"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const Social = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl")

    const onClick = (provider: "google" | "apple") => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    }
    
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button 
                size="lg"
                className="w-full flex justify-center items-center gap-5 text-muted-foreground"
                variant="outline"
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-5 w-5" />
                Continue with Google
            </Button>
            {/* <Button 
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => onClick("apple")}
            >
                <FaApple className="h-5 w-5" />
            </Button> */}
        </div>
    )
}