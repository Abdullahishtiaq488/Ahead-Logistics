import Image from 'next/image';
import headerImg from '../../public/assets/images/headerImg.jpg';

const Header = () => {
  return (
    <>
      <div className="relative h-auto" id='home'>
        <Image
          src={headerImg}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-6 text-white bg-black/50">

          {/* First Div: Content about Logistics Company */}
          <div className="w-full md:w-1/2 p-4 max-w-lg mx-auto  md:mx-0 text-center md:text-left">
            <p className="text-pink-500 font-semibold text-sm md:text-base">Where Every Mile Matters.</p>
            <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-normal">
            Freight Dispatch Made Easy
            </h1>
            <p className="mt-4 text-sm md:text-lg">
            At Ahead of the Rest Freight, we understand that in the world of logistics, every mile counts. 
            That's why we are dedicated to providing state-of-the-art solutions for all your transportation 
            and supply chain needs. 
            </p>
            <p className="mt-2 text-sm md:text-lg">
            Whether you're shipping a single package or managing
            complex logistics for your business, our expertise ensures timely delivery and the utmost care for your goods.
            </p>
            <button className="bg-pink-500 mt-4 text-white font-bold py-2 px-4 rounded-full border-r-1 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300">
              Call Now
            </button>
            
          </div>

          {/* Second Div: Contact Form */}
          <div className="w-full md:w-1/2 p-4 bg-white text-black rounded-lg max-w-full md:max-w-md mx-auto md:mx-0 mt-8 md:mt-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Contact Us for Free Setup</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="phone-number">Phone Number</label>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Phone"
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
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm">
                  I have read and agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm">
                  I want to receive the most useful tips and news
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 rounded-lg"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
