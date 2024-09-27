import React from 'react';
import Image from 'next/image';
import dryVanImage from '../../public/assets/images/dry-van.jpg';
import stepDeckImage from '../../public/assets/images/step-deck.jpg';
import reeferImage from '../../public/assets/images/reeferTruck.jpg';
import flatbedImage from '../../public/assets/images/flatbed.jpg';
import powerOnlyImage from '../../public/assets/images/power-only.jpg';
import boxTruckImage from '../../public/assets/images/boxTruck.jpg';
import straightTruckImage from '../../public/assets/images/jangol-truck.jpg';
import hotshotImage from '../../public/assets/images/hotshot.jpg';

const trucksData = [
  { name: 'Dry Van', image: dryVanImage },
  { name: 'Step Deck', image: stepDeckImage },
  { name: 'Reefer', image: reeferImage },
  { name: 'Flatbed', image: flatbedImage },
  { name: 'Power Only', image: powerOnlyImage },
  { name: 'Box Truck', image: boxTruckImage },
  { name: 'Straight Truck', image: straightTruckImage },
  { name: 'Hotshot', image: hotshotImage },
];

const Trucks = () => {
  return (
    <>
      <div className="relative text-center my-8 bg-black text-white mt-20" id='trucks'>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-pink-600"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
          Who can Work with Us
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {trucksData.map((truck, index) => (
          <div key={index} className="relative m-4 w-64 h-40 group">
            <Image
              src={truck.image}
              alt={truck.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out group-hover:bg-opacity-70 flex flex-col justify-center items-center text-white p-4 opacity-100 group-hover:opacity-100">
              <h2 className="text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                {truck.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trucks;
