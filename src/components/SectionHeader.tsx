import { twMerge } from "tailwind-merge";

const SectionHeader = ({ title, titleYellow, description, className }: { title: string; titleYellow: string; description: string; className?: string }) => {
    return (
        <div className={twMerge("flex flex-col justify-center items-center text-center gap-3", className)}>
            <h1 className="font-serif text-3xl lg:text-[2.5rem] font-semibold py-1">
                {title} <span className="text-secondary">{titleYellow}</span>
            </h1>
            <p className="py-1 text-base text-text font-normal">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
