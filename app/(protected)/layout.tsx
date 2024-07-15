"use client"

import { Navbar } from "./_components/navbar";
import { usePathname } from "next/navigation";


interface ProtectedLayoutProps {
    children: React.ReactNode;
}
    
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    const pathName = usePathname()
    
    return (
        <div className="w-full px-5 py-10 flex flex-col gap-y-10 items-center justify-center">
            {!pathName.startsWith("/dashboard") && !pathName.startsWith("/receipt") && !pathName.startsWith("/posts") && <Navbar />}
            {children}
        </div>
)
}


export default ProtectedLayout;