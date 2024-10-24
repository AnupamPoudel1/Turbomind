import SectionHeader from "@/components/SectionHeader"
import { FaQuoteLeft } from "react-icons/fa";
import testImg from '@/assets/images/testimonial.png';
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
    {
        profile: testImg,
        name: "Martha Stewart",
        post: "IT Enthusiast",
        statement: "Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo."
    },
    {
        profile: testImg,
        name: "Michel Clark",
        post: "Finance Student",
        statement: "Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo."
    },
    {
        profile: testImg,
        name: "Emilia Watson",
        post: "Sales & Negotiation",
        statement: "Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo."
    },
]

const Testimonials = () => {
    return (
        <section className="flex flex-col justify-center items-center py-12 lg:py-24 px-4 lg:px-32 gap-8">
            <SectionHeader
                title='Genuine student'
                titleYellow='evaluation'
                description='To improve your readiness using the greatest resources available'
            />
            <div className="testimonials flex justify-center items-center gap-4 lg:gap-6">
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            profile={testimonial.profile}
                            name={testimonial.name}
                            post={testimonial.post}
                            statement={testimonial.statement}
                        />
                    ))
                }
            </div>
            <div className="flex gap-2 items-center justify-center">
                <button className="inactslider w-6 lg:w-9 h-1 bg-secondary/30 rounded-full"></button>
                <button className="actslider w-12 lg:w-20 h-1 bg-secondary rounded-full"></button>
                <button className="inactslider w-6 lg:w-9 h-1 bg-secondary/30 rounded-full"></button>
            </div>
        </section>
    )
}

export default Testimonials
