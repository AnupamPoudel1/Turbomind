import PricingBox from "@/components/PricingBox";
import SectionHeader from "@/components/SectionHeader"

const pricingBoxes = [
    {
        pack: 'Starter',
        price: 'Free',
        features: [
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
        ],
    },
    {
        pack: 'Professional',
        price: '$20 /month',
        features: [
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
        ],
        professional: true
    },
    {
        pack: 'Premium',
        price: '$90 /month',
        features: [
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
            { feat: 'Sagittis congue augue egestas integer ' },
        ],
    },
]

const Pricing = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-quinary py-12 lg:py-24 px-4 lg:px-32 gap-8">
            <SectionHeader
                title="Get to know our"
                titleYellow="pricing"
                description='To improve your readiness using the greatest technologies available'
            />
            <div className="rounded-lg p-2 bg-secondary flex justify-center items-center gap-1">
                <button className="px-8 py-3 bg-primary rounded-lg text-xs lg:text-base text-secondary hover:text-tertiary transition-all duration-500">
                    Monthly
                </button>
                <button className="px-8 py-3 bg-secondary rounded-lg text-xs lg:text-base text-primary hover:text-tertiary transition-all duration-500">
                    Annually
                </button>
            </div>
            <div className="pricingboxes flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full">
                {
                    pricingBoxes.map((box, index) => (
                        <PricingBox
                            key={index}
                            pack={box.pack}
                            price={box.price}
                            features={box.features}
                            professional={box.professional}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Pricing
