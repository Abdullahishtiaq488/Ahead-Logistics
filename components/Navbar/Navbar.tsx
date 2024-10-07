"use client";
import Image from 'next/image';
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="w-full h-6 bg-pink-700 flex flex-col justify-center items-center">
        <p className='text-white font-bold'>Call: <a href='tel:+12514447918'>+1 251 4447918</a></p>
      </div>
      <nav className="bg-black text-white  border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex justify-between items-center mx-auto">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/assets/images/downloads.png"
              width={150}
              height={150}
              alt="Flowbite Logo"
              className="w-24 h-auto md:w-36" // Responsive sizing
              priority // Ensures the image loads quickly and prevents from shifting
            />
          </a>


          {/* Desktop Menu (centered links) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 font-bold ">
            <a href="/" className="text-white hover:text-pink-600 dark:text-white">Home</a>
            <a href="#footer" className="text-white hover:text-pink-600 dark:text-white">About</a>
            <a href="#services" className="text-white hover:text-pink-600 dark:text-white">Services</a>
            <a href="#faqs" className="text-white hover:text-pink-600 dark:text-white">FAQs</a>
          </div>

          <a type='button' area-label="phone number" href="tel:+18506384665"> <button className="hidden md:block bg-pink-500 text-white font-bold py-2 px-4 rounded-lg border-r-1 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300">
            Call Now
          </button></a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-full md:hidden focus:outline-none dark:text-gray-400"
            aria-controls="mobile-menu"
            aria-label='Open Toggle Menu'
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={handleMenuToggle}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" area-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

        </div>
      </nav>

      {/* Mobile Menu (Slide-in, Fullscreen) */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-75 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="relative h-full w-full bg-white dark:bg-gray-800 p-6 flex flex-col justify-center items-center">

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-600"
            onClick={handleMenuToggle} aria-label='Close'
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" area-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Centered Links */}
          <ul className="space-y-8 text-center">
            <li>
              <a
                href="/"
                className="block text-2xl text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="block text-2xl text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-2xl text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                onClick={handleLinkClick}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="block text-2xl text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                onClick={handleLinkClick}
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
