
const SectionHeader = ({ title, titleYellow, description }: { title: string; titleYellow: string; description: string }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-3">
            <h1 className="font-serif text-3xl font-semibold py-1">
                {title} <span className="text-secondary">{titleYellow}</span>
            </h1>
            <p className="py-1 text-base text-text font-normal">
                {description}
            </p>
        </div>
    )
}

export default SectionHeader
