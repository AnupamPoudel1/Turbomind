"use client";

import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import girlImg from '@/assets/images/girlImg.jpeg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FaqCard from '@/components/FaqCard';

const faqs = [
    {
        question: '"Top Quality" questions: what are they?',
        answer: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.',
    },
    {
        question: 'Can I filter questions by category?',
        answer: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.',
    },
    {
        question: 'How frequently are new inquiries added?',
        answer: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.',
    },
    {
        question: 'What features are included in the question bank?',
        answer: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.',
    },
    {
        question: '"Top Quality" questions: what are they?',
        answer: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo.',
    },
];

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center py-12 lg:py-24 px-4 lg:px-32 gap-6">
            <div className="bg-quinary py-6 lg:py-12 px-4 lg:px-8 flex flex-col gap-8 rounded-lg">
                <div className={"flex flex-col justify-center lg:items-start items-center lg:text-start text-center gap-3 lg:gap-12"}>
                    <h1 className="font-serif text-3xl lg:text-[2.5rem] font-semibold py-1">
                        Any queries? <br /> We got you <span className="text-secondary">covered</span>
                    </h1>
                    <p className="py-1 text-base text-text font-normal">
                        Need Help! Ask us any questions. We got you covered.
                    </p>
                </div>
                <div className="faqs w-full flex flex-col gap-6">
                    {
                        faqs.map((faq, index) => (
                            <FaqCard
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full relative">
                <div className="w-full max-h-[660px] overflow-hidden rounded-lg">
                    <Image
                        src={girlImg}
                        alt='girl image'
                        className='h-full w-full object-contain rounded-lg'
                    />
                </div>
                <div className="absolute p-2 rounded-2xl bg-primary -top-6 -right-2">
                    <button className='px-6 py-3 rounded-lg bg-secondary hover:bg-tertiary transition-all duration-500 text-primary text-sm'>
                        Ask Any Question
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FAQ
