import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const SectionHeader = ({
    children,
    description,
    className }: PropsWithChildren<{ description: string; className?: string }>) => {
    return (
        <div className={twMerge("flex flex-col justify-center items-center text-center gap-3", className)}>
            {children}
            <p className="py-1 text-base text-text font-normal">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
