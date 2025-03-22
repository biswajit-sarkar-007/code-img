"use client"
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "",
    text: "This service is amazing! The team is super supportive and the results were beyond my expectations. Highly recommend!"
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "",
    text: "A truly outstanding experience. The quality and attention to detail are top-notch. Would definitely use again."
  },
  {
    name: "Michael Brown",
    role: "UX Designer",
    image: "",
    text: "Great customer service and fantastic results. I'm really impressed with the entire process and outcome."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">Real experiences from our happy customers.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
          >
            <FaQuoteLeft className="text-gray-300 text-3xl absolute top-4 left-4" />
            <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                
              />
              <div>
                <h3 className="text-gray-800 font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
