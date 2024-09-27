"use client"

import Image from 'next/image'

const Loader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center w-full h-screen w-screen bg-black">
      <Image 
        src=".././assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
  )
}

export default Loader