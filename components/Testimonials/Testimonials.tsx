"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import testimonial1Image from '../../public/assets/images/truckshot.jpg';
import testimonial2Image from '../../public/assets/images/testimon2.jpg';
import testimonial3Image from '../../public/assets/images/testimon3.jpg';
import testimonial4Image from '../../public/assets/images/testimon4.jpg';

// Array of testimonials with images imported separately
const testimonials = [
  {
    name: "Mike S.",
    company: "M&L Transport LLC",
    content: "This dispatch service is everything a truck driver should expect. They negotiate with brokers to get great rates, offer loads in advance, and handle all the paperwork including detention pay and layovers. We're really glad to have them working for us!",
    image: testimonial1Image
  },
  {
    name: "Jay S.",
    company: "Drive Logistics",
    content: "Since placing my trucking business in their hands, I haven't needed another dispatcher. Their communication is outstanding, they know the business inside out, and their fees are very reasonable compared to others. Couldn't ask for more!",
    image: testimonial2Image
  },
  {
    name: "Eric F.",
    company: "Freeman Trucking",
    content: "This dispatch service has been fantastic for my trucking company. They're strong negotiators and have really helped increase our profits with great rates.",
    image: testimonial3Image
  },
  {
    name: "Andrei C.",
    company: "Trucking Alliance LLC",
    content: "We've been working with this dispatch team for a year now and their service is top-notch. They take care of everything, from finding loads to handling billing, and their communication and market knowledge are excellent. They're definitely worth the percentage they charge.",
    image: testimonial4Image
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect

  // Slower Auto-rotate carousel (every 8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Fade in new content
      }, 300); // Time to fade out before changing content
    }, 8000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
      setFade(true);
    }, 300);
  };

  return (
    <>
      <div className="relative text-center my-8 bg-black text-white mt-20" id='testimonials'>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-pink-600"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
          Testimonials
        </h2>
      </div>

      <div className="w-[90%]  md:max-w-5xl lg:max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-lg">
        <div className={`flex flex-wrap md:flex-row items-center md:h-[500px] h-auto transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 h-full flex justify-center md:justify-start mb-4 md:mb-0">
            <Image
              src={testimonials[currentIndex].image}
              alt="Customer Image"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right Side Testimonial Content */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between h-full">
            <div className="flex-grow flex flex-col justify-center">
              <div className="relative">
                <div className="absolute top-0 left-0 transform -translate-y-6 text-pink-600 text-6xl">
                  &#8220;
                </div>
                <p className="text-lg mt-2 md:text-xl text-gray-700">
                  {testimonials[currentIndex].content}
                </p>
                <div className="mt-4">
                  <h3 className="text-md md:text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows at the end */}
            <div className="mt-6 flex justify-between space-x-4">
              <button
                onClick={prevSlide}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                &#10094; Previous
              </button>
              <button
                onClick={nextSlide}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                Next &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
