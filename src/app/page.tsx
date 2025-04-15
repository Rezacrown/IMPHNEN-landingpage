import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Features from "@/components/custom/Features";

import Community from "@/components/custom/Community";
import Faq from "@/components/custom/Faq";

import Merchant from "@/components/custom/Merchant";
import Footer from "@/components/custom/Footer";
import Testimonials from "@/components/custom/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Community />
      <Faq />
      <Testimonials />
      <Merchant />
      <Footer />
    </>
  );
}
