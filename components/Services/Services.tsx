import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import servicesData, { Service } from '@/lib/servicesData'

const Services: React.FC = () => {
  return (
    <>
      <div className="relative text-center my-8 bg-black text-white mt-20" id='services'>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-pink-600 "></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
          Our Services
        </h2>
      </div>

      <div className="flex flex-wrap justify-between gap-4 p-4">
        {servicesData.map((service: Service, index: number) => (
          <Link key={index} href={`/services/${service.slug}`} className="relative w-full sm:w-[calc(50%-0.5rem)] h-40 group overflow-hidden cursor-pointer">
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            {/* Text Overlay */}
            <div className="relative z-10 p-4 text-white">
              <h1 className="text-2xl md:text-4xl font-bold text-pink-600">{service.title}</h1>
              <h2 className='text-xl md:text-2xl font-bold'>{service.description}</h2>
            </div>

            {/* Black Overlay for Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-65 transition-opacity duration-300 group-hover:bg-opacity-35"></div>

            {/* Red Strip with Arrow */}
            <div className="absolute top-0 right-0 w-0 h-full bg-pink-600 transition-all duration-500 group-hover:w-[15%] flex justify-center items-center">
              <div className="text-white text-lg hidden group-hover:block">→</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Services
