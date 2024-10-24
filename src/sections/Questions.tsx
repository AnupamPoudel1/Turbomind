import CourseCards from "@/components/CourseCards"
import SectionHeader from "@/components/SectionHeader"

const navLists = [
    {
        link: "#",
        title: "Finance & Banking"
    },
    {
        link: "#",
        title: "Health & Pharmacy"
    },
    {
        link: "#",
        title: "Sales & Negotiation"
    },
    {
        link: "#",
        title: "Old Question Sets"
    },
]

const courses = [
    {
        num: '01',
        title: 'Machine Learning',
        description: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit.'
    },
    {
        num: '02',
        title: 'Cloud Computing',
        description: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit.'
    },
    {
        num: '03',
        title: 'Data Management',
        description: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit.'
    },
    {
        num: '04',
        title: 'Data Science',
        description: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit.'
    },
    {
        num: '05',
        title: 'Project Management',
        description: 'Sagittis congue augue egestas integer Velna Purus Fusce a magna suscipit nec egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit.'
    }
]

const Questions = () => {
    return (
        <section className="flex flex-col justify-center items-center lg:items-start bg-quinary py-12 lg:py-24 px-4 lg:px-32 gap-8">
            <SectionHeader
                title="Everything you need to know in"
                titleYellow="one location"
                description='We assist you in developing your professional talents, from technical subjects to crucial abilities.'
                className="lg:items-start lg:text-left"
            />
            <div className="flex justify-start w-full">
                <nav className="flex flex-none gap-6 lg:gap-8 overflow-x-clip">
                    <a
                        href="#"
                        className="text-sm lg:text-base font-medium pb-2 border-b-2 border-secondary text-secondary w-max"
                    >
                        IT & Cybersecurity
                    </a>
                    {
                        navLists.map((list, index) => (
                            <a
                                key={index}
                                href={list.link}
                                className="text-sm font-medium pb-2 hover:text-secondary w-max"
                            >
                                {list.title}
                            </a>
                        ))
                    }
                </nav>
            </div>
            <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 md:gap-9 lg:grid-cols-3 lg:gap-12">
                {
                    courses.map((course, index) => (
                        <CourseCards
                            key={index}
                            num={course.num}
                            title={course.title}
                            description={course.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Questions
