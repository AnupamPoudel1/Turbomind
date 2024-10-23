
const GetStarted = () => {
    return (
        <section className="flex flex-col justify-center items-center lg:items-start py-12 lg:py-24 px-4 lg:px-32 gap-8">
            <div className={"flex flex-col justify-center items-center text-center gap-3"}>
                <h1 className="font-serif text-3xl lg:text-[2.5rem] font-semibold py-1">
                    Utilize <span className="text-secondary">TurboMind</span> to begin sutdying today
                </h1>
                <p className="py-1 text-base text-text font-normal">
                    Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae.
                </p>
                <button
                    className='bg-secondary text-primary hover:bg-tertiary transition duration-500 rounded-md px-8 py-3 w-max'
                >
                    Let's Get Started
                </button>
            </div>
        </section>
    )
}

export default GetStarted
