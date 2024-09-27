import React from 'react';
import Image from 'next/image';
import bgImage from '../../public/assets/images/technological-futuristic-holograms-logistics-means-transport.jpg';

const Footer = () => {
  return (
    <footer className="relative text-white h-auto mt-20" id='footer'>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Black Gradient Overlay */}
      </div>

      <div className="relative z-10 p-8">
        {/* First Row - Single Column */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-2xl font-bold">Stay Connected with Us</h1>
          <p className="text-lg">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
              style={{ width: '250px' }} // Adjust the width as needed
            />
            <button className="bg-pink-500 text-white font-bold py-2 px-4 hover:bg-pink-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>


        <hr className="border-t border-gray-500 mb-4" />

        {/* Second Row - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 p-4 md:p-10">
          {/* Column 1: About */}
          <div className="p-2">
            <a href="/" className="flex items-center">
              <Image
                src="/assets/images/downloads.png"
                width={150}
                height={150}

                alt="Flowbite Logo"
              />
            </a>


            <p className='mt-4 md:mt-6'>
              At Ahead of the Rest Freight, we are dedicated to providing top-notch logistics
              and transportation solutions tailored to meet the needs of our diverse clientele.
              With a team of experienced professionals and a commitment to excellence, we ensure that your
              goods are delivered safely and on time.  Join us in transforming the logistics industry
              with innovative solutions and unparalleled service.
            </p>
          </div>

          {/* Column 2: About Us Links */}
          <div className="p-2">
            <h2 className="text-xl font-bold mb-4 md:mb-8">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#services" className="hover:underline">Our Services</a></li>
              <li><a href="#trucks" className="hover:underline">Who can Work with us</a></li>

            </ul>
          </div>

          {/* Column 3: FAQs Links */}
          <div className="p-2">
            <h2 className="text-xl font-bold mb-4 md:mb-8">Our Location</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
              <li><a href="/returns" className="hover:underline">Returns Policy</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="p-2">
            <h2 className="text-xl font-bold mb-4 md:mb-8">Contact</h2>
            <ul className="space-y-2">
              <li>1234 Street Name, City</li>
              <li>Email: info@company.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-500 mb-4" />

        {/* Last Row - Copyright */}
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
