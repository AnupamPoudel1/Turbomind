import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

const Box = ({ title, description, image, className }: { title: string; description: string; image: StaticImageData; className?: string }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-[360px]">
            <div className={twMerge("image w-80 h-56 border-2 rounded-lg py-8 px-10", className)}>
                <Image
                    src={image}
                    alt='exam-prep-image'
                    className='h-full w-full object-contain'
                />
            </div>
            <div className="text-center flex flex-col gap-3">
                <h1 className='text-xl font-semibold font-serif px-8'>
                    {title}
                </h1>
                <p className='text-base font-normal text-text'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Box
