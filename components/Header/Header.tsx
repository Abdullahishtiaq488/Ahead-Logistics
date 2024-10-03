"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import headerImg from '../../public/assets/images/headerImg.jpg';
import emailjs from '@emailjs/browser';

// Define the shape of form data
interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
}

const Header = () => {
  // Initialize form data state with types
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const [status, setStatus] = useState<string>('');

  // Handle input changes with typed event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with typed event
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Replace with your EmailJS details
      const serviceId = 'service_447u1p7'; // e.g., 'service_xxx'
      const templateId = 'template_hfi0tgs'; // e.g., 'template_xxx'
      const userId = 'Cp-YKI0-fqzc6SZPp'; // e.g., 'user_xxx'

      // Send the email
      const response = await emailjs.send(serviceId, templateId, { ...formData }, userId);
      
      if (response.status === 200) {
        setStatus("Request sent successfully!");
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email.");
    }
  };

  return (
    <div className="relative h-auto" id="home">
      <Image
        src={headerImg}
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-12 text-white bg-black/50">

        {/* First Div: Content about Logistics Company */}
        <div className="w-full md:w-1/2 p-4 max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <p className="text-pink-500 font-semibold text-sm md:text-base">Where Every Mile Matters.</p>
          <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-normal">
            Freight Dispatch Made Easy
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            At Ahead of the Rest Freight, we understand that in the world of logistics, every mile counts.
            That&#39;s why we are dedicated to providing state-of-the-art solutions for all your transportation
            and supply chain needs.
          </p>
          <p>Whether you need reliable dispatch services, real-time tracking, or customized logistics solutions, we’ve got you covered. Trust us to keep your business moving forward.</p>
          <button className="bg-pink-500 mt-4 text-white font-bold py-2 px-4 rounded-full border-r-1 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300">
            Call Now
          </button>
        </div>

        {/* Second Div: Contact Form */}
        <div className="w-full md:w-1/2 p-4 bg-white text-black rounded-lg max-w-lg md:max-w-md mx-auto md:mx-0 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Contact Us for Free Setup</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 rounded-lg"
            >
              Send Request
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;