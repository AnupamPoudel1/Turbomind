import yellowBgImg from '@/assets/images/yellow.png';
import blueBgImg from '@/assets/images/blue.png';
import pinkBgImg from '@/assets/images/pink.png';
import Box from '@/components/Box';
import SectionHeader from '@/components/SectionHeader';

const boxData = [
    {
        image: yellowBgImg,
        title: "Wide range of exam prepration materials",
        description: "Increase your understanding with the Our Team's incredibly interesting and educational content.",
        className: "bg-secondary/10 border-secondary"
    },
    {
        image: blueBgImg,
        title: "Personalized learning dashboard",
        description: "Increase your understanding with the Our Team's incredibly interesting and educational content.",
        className: "bg-tertiary/10 border-tertiary"
    },
    {
        image: pinkBgImg,
        title: "Real-time performance analytics",
        description: "Increase your understanding with the Our Team's incredibly interesting and educational content.",
        className: "bg-quaternary/10 border-quaternary"
    }
]

const ChooseUs = () => {
    return (
        <section className="flex flex-col justify-center items-center py-12 lg:py-24 px-4 lg:px-32 gap-8">
            <SectionHeader
                title='Why Choose'
                titleYellow='TurboMind'
                description='To improve your readiness using the greatest resources available'
            />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
                {
                    boxData.map((data, index) => (
                        <Box
                            key={index}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            className={data.className}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ChooseUs
