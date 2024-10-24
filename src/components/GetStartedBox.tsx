import React from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge';

const GetStartedBox = ({ Icon, title, description, className }: { Icon: IconType; title: string; description: string; className: string }) => {
    return (
        <div className="p-4 rounded-lg shadow-custom flex flex-col gap-4">
            <div className="size-6">
                <Icon className={twMerge('size-6', className)} />
            </div>
            <div className="text text-tertiary flex flex-col items-start justify-center">
                <h4 className="font-serif font-semibold text-2xl">
                    {title}
                </h4>
                <p className="text-sm w-max font-normal">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default GetStartedBox
