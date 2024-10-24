import GetStartedBox from "@/components/GetStartedBox";
import { HiUsers, HiMiniFolderOpen } from "react-icons/hi2";
import { RiMobileDownloadFill } from "react-icons/ri";
import { PiFoldersFill } from "react-icons/pi";

const GetStarted = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start py-12 lg:py-24 px-4 lg:px-32 gap-8 lg:gap-12">
            <div className={"flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-3 lg:gap-12"}>
                <h1 className="font-serif text-3xl lg:text-[2.5rem] font-semibold py-1">
                    Utilize <span className="text-secondary">TurboMind</span> to begin sutdying today
                </h1>
                <p className="py-1 text-base text-text font-normal w-full">
                    Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae.
                </p>
                <button
                    className='bg-secondary text-primary hover:bg-tertiary transition duration-500 rounded-md px-8 py-3 w-max'
                >
                    Let's Get Started
                </button>
            </div>
            <div className="flex gap-4 lg:gap-6 w-full">
                <div className="flex flex-col gap-4 lg:gap-6 w-full pt-4 lg:pt-6">
                    <GetStartedBox
                        Icon={HiUsers}
                        title="100k"
                        description="Active Users"
                        className="text-[#1E88E5]"
                    />
                    <GetStartedBox
                        Icon={RiMobileDownloadFill}
                        title="100k"
                        description="Active Downloads"
                        className="text-secondary"
                    />
                </div>
                <div className="flex flex-col gap-4 lg:gap-6 w-full pb-4 lg:pb-6">
                    <GetStartedBox
                        Icon={PiFoldersFill}
                        title="40"
                        description="Categories to choose"
                        className="text-tertiary"
                    />
                    <GetStartedBox
                        Icon={HiMiniFolderOpen}
                        title="100+"
                        description="Repository Questions"
                        className="text-quaternary"
                    />
                </div>
            </div>
        </section>
    )
}

export default GetStarted
