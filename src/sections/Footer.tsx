import appStore from '@/assets/images/appstore.png';
import playStore from '@/assets/images/playstore.png';
import Image from 'next/image';
import mobileImg from '@/assets/images/mobile.png';
import curveArrow from '@/assets/icons/Curve-arrow.png';
import { TbArrowCurveRight } from "react-icons/tb";
import { GrSend } from "react-icons/gr";

const Footer = () => {
    return (
        <section className="flex flex-col justify-center items-center pb-24 gap-8 bg-tertiary">
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="w-[150%] lg:w-[120%] h-96 bg-primary rounded-b-full"></div>
                <div className="download w-[95%] lg:w-[80%] rounded-lg flex flex-col lg:flex-row bg-quinary px-4 py-16 lg:py-4 absolute top-36 lg:top-52">
                    <div className="h-60 w-full relative">
                        <div className="mobile w-52 lg:w-80 absolute -top-[70%] lg:-top-full left-1/2 -translate-x-1/2">
                            <Image src={mobileImg} alt='mobile image' className='w-full h-auto' />
                        </div>
                        <div className="size-9 lg:size-20 absolute bottom-8 lg:bottom-[20%] left-1/2 lg:left-[90%] -translate-x-1/2">
                            <TbArrowCurveRight className='size-9 lg:size-20 rotate-[130deg]' />
                        </div>
                        <div className="size-8 lg:size-14 absolute -left-1 lg:left-10 top-0 lg:top-10">
                            <GrSend className='size-9 lg:size-14' />
                        </div>
                    </div>
                    <div className="downloadnow w-full flex flex-col justify-center items-center gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-serif font-semibold text-center lg:text-left text-tertiary">
                                Download the app Now
                            </h1>
                            <p className="text-base text-center lg:text-left font-normal text-text">
                                Get notifications about test alerts, new sets, and much more with a faster, smoother user interface.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start items-center lg:items-start gap-4 w-full">
                            <div className="w-32 h-10 rounded-lg">
                                <Image src={appStore} alt='appstore' className='h-full w-full object-contain' />
                            </div>
                            <div className="w-32 h-10 rounded-lg">
                                <Image src={playStore} alt='appstore' className='h-full w-full object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actualfooter mt-72 lg:mt-20 py-12 px-4 w-full">
                Footer
            </div>
        </section>
    )
}

export default Footer
