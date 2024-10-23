
const CourseCards = ({ num, title, description }: { num: string; title: string; description: string }) => {
    return (
        <div className="p-6 rounded-lg bg-primary col-span-1 w-full h-max overflow-hidden">
            <div className="flex justify-start items-center gap-4 text-base font-medium">
                <div className="rounded-lg bg-secondary/10 text-secondary w-max py-2 px-3">
                    {num}
                </div>
                <h4 className="flex flex-col text-tertiary">
                    {title}
                </h4>
            </div>
            <div className="text-base pl-14 h-12 overflow-hidden text-balance truncate">
                {description}
            </div>
        </div>
    )
}

export default CourseCards
