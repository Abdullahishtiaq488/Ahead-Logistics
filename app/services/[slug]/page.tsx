import React from 'react'
import servicesData, { Service } from '@/lib/servicesData'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

interface ServicePageProps {
    params: {
        slug: string
    }
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
    const { slug } = params
    const service: Service | undefined = servicesData.find((service) => service.slug === slug)

    if (!service) {
        notFound() // Return 404 if service not found
        return null
    }

    return (
        <>
            <Navbar />
            <div className="p-6 relative">
                {/* Back Button */}
                <Link href="/#services" className="absolute top-4 left-4 flex items-center text-pink-500 hover:text-pink-800">
                    <span className="text-2xl mr-2">←</span> {/* Back Arrow */}
                    <span className="text-lg font-bold">Back to Services</span>
                </Link>

                {/* Service Image */}
                <div className="relative w-full h-[300px] md:h-[500px] mt-10">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                    />
                </div>

                {/* Service Title and Description */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-pink-600">
                    {service.title} - {service.description}
                </h1>

                {/* Detailed Content */}
                <p className="mt-4 text-lg">
                    {service.content}
                </p>
            </div>
            <Footer />
        </>
    )
}

export default ServicePage