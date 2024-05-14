import Image from "next/image";

import logo from "@/public/assets/logo.png"
interface HeaderProps {
    label: string;
}

export const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Image src={logo} alt="logo" width={80} className="my-[-15px]" />
            <p className="text-muted-foreground text-sm'">
                {label}
            </p>
        </div>
    )
}