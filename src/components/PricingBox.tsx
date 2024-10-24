import { PropsWithChildren } from 'react';
import { TiTick } from 'react-icons/ti'
import { twMerge } from 'tailwind-merge';

const PricingBox = ({
    pack,
    price,
    features,
    professional
}
    :
    {
        pack: string;
        price: string;
        features: {
            feat: string
        }[];
        professional?: boolean;
    }
) => {
    return (
        <div className={twMerge("flex flex-col bg-primary w-full rounded-lg p-5 gap-5 lg:gap-6", professional ? 'bg-secondary' : '')}>
            <div className="flex flex-col justify-center gap-3 lg:gap-4">
                <div className={twMerge("py-1 px-4 bg-secondary/10 w-max text-xs rounded-lg text-secondary", professional ? 'bg-primary' : '')}>
                    {pack}
                </div>
                <div className={twMerge("flex flex-col text-tertiary", professional ? 'text-primary' : '')}>
                    <h1 className="text-2xl lg:text-4xl font-serif font-semibold">
                        {price}
                    </h1>
                    <p className="text-sm font-serif font-normal">
                        per user
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-6">
                <p className={twMerge("text-sm lg:text-base font-normal text-tertiary", professional ? 'text-primary' : '')}>
                    Billed monthly or anually. Cancel anytime
                </p>
                <ul className="flex flex-col gap-3">
                    {
                        features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <div className={twMerge("size-5 rounded-full bg-secondary/10 flex justify-center items-center", professional ? 'bg-primary' : '')}>
                                    <TiTick
                                        className="text-secondary"
                                    />
                                </div>
                                <p className={twMerge("text-sm text-text", professional ? 'text-primary' : '')}>
                                    {feature.feat}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <button className={twMerge("rounded-lg bg-secondary text-primary px-6 py-3", professional ? 'bg-primary text-secondary' : '')}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PricingBox
