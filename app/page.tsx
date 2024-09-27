import Faqs from "@/components/Faqs/Faqs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Trucks from "@/components/Trucks/Trucks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Services />
      <Trucks />
      <Faqs />
      <Testimonials />
      <Footer />
    </main>
  );
}
