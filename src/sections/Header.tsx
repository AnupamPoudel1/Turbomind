"use client";

import logo from '@/assets/icons/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { twMerge } from 'tailwind-merge';

const Header = () => {

    const [showNav, setShowNav] = useState<boolean>(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <nav className="flex justify-between items-center border border-text p-4 relative">
            <div className="h-10">
                <Image src={logo} alt='Logo' className='h-full w-auto object-contain' />
            </div>
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

            <div className={twMerge("absolute top-[150%] translate-x-1/2 flex flex-col justify-center items-center border border-secondary p-4 text-tertiary font-medium text-base w-max rounded-md transition-all duration-500", showNav ? "right-1/2" : "-right-1/2")}>
                <a href="#" className='py-3 my-2 border-b-4 border-secondary text-secondary transition-all duration-300'>
                    Home
                </a>
                <a href="#" className='py-3 my-2 hover:text-secondary transition-all duration-300'>Question Bank</a>
                <a href="#" className='py-3 my-2 hover:text-secondary transition-all duration-300'>Pricing</a>
                <a href="#" className='py-3 my-2 hover:text-secondary transition-all duration-300'>Contact</a>
                <div className="flex justify-center items-center py-3 my-2 gap-1">
                    <button className='bg-primary hover:bg-tertiary hover:text-primary transition diration-500 text-tertiary rounded-md px-8 py-4'>Sign In</button>
                    <button className='bg-secondary text-primary hover:bg-tertiary transition duration-500 rounded-md px-8 py-4'>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
