"use client";

import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import girlImg from '@/assets/images/girlImg.jpeg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const FaqCard = ({ index, question, answer }: { index: number; question: string; answer: string }) => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            // key={index}
            className="flex flex-col justify-center items-center w-full transition duration-500"
        >
            <button
                onClick={() => toggleFAQ(index)}
                className={twMerge("question w-full p-3 rounded-lg bg-primary text-tertiary flex justify-between items-center gap-4 text-left cursor-pointer transition-all duration-500", openIndex === index ? 'bg-secondary rounded-bl-none rounded-br-none text-primary' : '')}
            >
                <p className='text-sm font-medium'>
                    {question}
                </p>
                <FaChevronDown className={twMerge('size-3 transition-all duration-500', openIndex === index ? 'rotate-180' : '')} />

            </button>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-primary rounded-br-lg rounded-bl-lg overflow-hidden"
            >
                <p className="text-text p-3">{answer}</p>
            </motion.div>
        </div>
    )
}

export default FaqCard
