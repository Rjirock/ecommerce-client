'use client';

import { TestimonialCard, TestimonialCardEl } from "@/elements/TestimonialCardEl";



export const TestimonialsPageEl = () => {

    const testimonials = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "Marketing Manager",
            feedback: "This product exceeded my expectations. The customer support was exceptional!",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 2,
            name: "David Lee",
            role: "Software Engineer",
            feedback: "I loved the user experience. The website is smooth and responsive.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Sophia Williams",
            role: "Freelance Designer",
            feedback: "One of the best purchases I’ve made recently. Highly recommend it!",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    return (
        <div className=" ml-auto  mr-auto container mt-[50px] bg-gray-100 p-10 rounded-sm ">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                What Our Customers Say
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {testimonials.map((testimonial) => (
                    <TestimonialCardEl key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsPageEl;
