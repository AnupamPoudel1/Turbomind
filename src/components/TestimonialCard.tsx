import Image, { StaticImageData } from "next/image"
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ statement, profile, name, post }: { statement: string; profile: StaticImageData; name: string; post: string }) => {
    return (
        <div className="flex flex-col justify-center gap-4 p-4 lg:p-6 rounded-lg bg-primary shadow-custom w-72 lg:w-96">
            <div className="quote size-6">
                <FaQuoteLeft className="size-6 text-tertiary" />
            </div>
            <div className="text-text">
                {statement}
            </div>
            <div className="flex items-center gap-2">
                <div className="profle rounded-full size-10">
                    <Image src={profile} alt="user picture" />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-sm font-bold text-tertiary">
                        {name}
                    </h1>
                    <p className="text-xs text-text">
                        {post}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
