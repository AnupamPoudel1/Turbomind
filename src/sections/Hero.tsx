
const Hero = () => {
    return (
        <section className="flex items-center justify-center py-24 px-2 bg-tertiary mx-auto">
            <div className="flex flex-col text-primary gap-6">
                <div className="text-center font-serif font-semibold">
                    <h1 className="p-1 text-4xl lg:text-6xl">
                        Learn Using
                    </h1>
                    <h1 className="p-1 text-secondary text-[40px] lg:text-[64px]">
                        Online Technology
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 px-2 lg:px-14 font-sans">
                    <input
                        type="text"
                        className="text-text rounded-lg lg:rounded-br-none lg:rounded-tr-none text-center lg:text-left py-3 px-4 w-full"
                        placeholder="Enter any keyword"
                    />
                    <button className="bg-secondary py-3 px-4 text-center rounded-lg lg:rounded-bl-none lg:rounded-tl-none">
                        Search
                    </button>
                </div>
                <div className="text-center text-base font-medium">
                    <p>
                        100,00+ Users, 100k Active Downloads, 40 Categories, 100+ Repository Question
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
