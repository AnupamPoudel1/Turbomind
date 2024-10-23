"use client";

import logo from '@/assets/icons/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { twMerge } from 'tailwind-merge';

const navlists = [
    {
        link: "#",
        title: "Question Bank"
    },
    {
        link: "#",
        title: "Pricing"
    },
    {
        link: "#",
        title: "Contact"
    },
]

const Header = () => {

    const [showNav, setShowNav] = useState<boolean>(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <nav className="flex justify-between items-center p-4 relative lg:px-28">
            <div className="h-10">
                <Image src={logo} alt='Logo' className='h-full w-auto object-contain' />
            </div>

            <div className="lg:hidden">
                {
                    !showNav ?
                        <button
                            className="size-6"
                            onClick={toggleNav}
                        >
                            <GiHamburgerMenu className='size-6' />
                        </button>
                        :
                        <button
                            className="size-6"
                            onClick={toggleNav}
                        >
                            <RxCross1 className='size-6' />
                        </button>
                }
            </div>

            <div
                className={twMerge("absolute top-full lg:top-0 lg:left-1/2 translate-x-1/2 lg:-translate-x-[24%] bg-primary flex flex-col lg:flex-row justify-center p-4 lg:p-0 lg:h-full text-tertiary font-medium text-base w-full lg:w-max transition-all duration-500", showNav ? "right-1/2" : "-right-1/2")}
            >
                <div className='flex flex-col lg:flex-row h-full lg:gap-1'>
                    <a
                        href="#"
                        className='py-3 lg:py-6 border-b lg:border-b-0 lg:border-t-4 text-secondary lg:border-secondary lg:px-4 border-text hover:text-secondary transition-all duration-300 h-full'
                    >
                        Home
                    </a>
                    {
                        navlists.map((list, index) => (
                            <a
                                key={index}
                                href={list.link}
                                className='py-3 lg:py-6 border-b lg:border-b-0 lg:px-4 border-text hover:text-secondary transition-all duration-300 h-full'
                            >
                                {list.title}
                            </a>
                        ))
                    }
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center my-10 lg:my-0 pb-32 lg:pb-0 gap-1 lg:ml-48">
                    <button
                        className='bg-primary hover:bg-tertiary hover:text-primary transition diration-500 text-tertiary rounded-md px-8 py-3 w-full lg:w-max'
                    >
                        Sign In
                    </button>
                    <button
                        className='bg-secondary text-primary hover:bg-tertiary transition duration-500 rounded-md px-8 py-3 w-full lg:w-max'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
