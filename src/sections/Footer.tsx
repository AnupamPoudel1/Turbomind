import appStore from '@/assets/images/appstore.png';
import playStore from '@/assets/images/playstore.png';
import Image from 'next/image';
import mobileImg from '@/assets/images/mobile.png';
import logo from '@/assets/icons/logo.png';
import { TbArrowCurveRight } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const infoLink = [
    {
        title: "Contact us",
        link: "#"
    },
    {
        title: "Question Bank",
        link: "#"
    },
    {
        title: "Pricing List",
        link: "#"
    },
]

const studyLink = [
    {
        title: "Finance & Banking",
        link: "#"
    },
    {
        title: "Health & Pharmacy",
        link: "#"
    },
    {
        title: "Sales & Negotiation",
        link: "#"
    },
    {
        title: "IT & Cybersecurity",
        link: "#"
    },
    {
        title: "Old Questions",
        link: "#"
    },
]

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
            <div className="actualfooter mt-72 lg:mt-20 py-12 px-4 w-full flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="image w-full flex flex-col gap-3">
                        <Image
                            src={logo}
                            alt='logo'
                            className='w-28 h-auto object-contain'
                        />
                        <p className='text-primary text-sm'>
                            Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 text-white">
                        <h1 className='text-base font-bold'>
                            Contact Us
                        </h1>
                        <div className='text-sm flex justify-center items-center w-max gap-2'>
                            <FaPhoneAlt className='size-4' />
                            <p>
                                +977 9876543210
                            </p>
                        </div>
                        <div className='text-sm flex justify-center items-center w-max gap-2'>
                            <MdMail className='size-4' />
                            <p>
                                turbomind@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 justify-between text-primary w-full">
                    <div className="flex flex-col gap-3 w-full">
                        <h1 className='font-bold text-base'>
                            Information
                        </h1>
                        <ul className='flex flex-col gap-3 text-sm'>
                            {
                                infoLink.map((link, index) => (
                                    <li className='hover:text-secondary' key={index}>
                                        <a href={link.link}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <h1 className='font-bold text-base'>
                            Study Material
                        </h1>
                        <ul className='flex flex-col gap-3 text-sm'>
                            {
                                studyLink.map((link, index) => (
                                    <li className='hover:text-secondary' key={index}>
                                        <a href={link.link}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
