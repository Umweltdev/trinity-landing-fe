import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Problems from './_components/Problems';
import HowItWorks from './_components/HowItWorks';
import Demo from './_components/Demo';
import Benefit from './_components/Benefit';
import Testimonial from './_components/Testimonial';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import CTA from './_components/CTA';
import Footer from './_components/Footer';
import FloatingBlobs from './_components/FloatingBlob';

const TrinityLandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar logo='Trinity'/>
      
      {/* Hero Section */}
      <Hero/>

      {/* Problem Statement */}
      <Problems/>

      {/* How It Works - The 7 Rules */}
      <HowItWorks/>

      {/* Interactive Demo */}
      <Demo/>

      {/* Benefits */}
     <Benefit/>

      {/* Testimonials */}
      <Testimonial/>

      {/* Pricing */}
      <Pricing/>

      {/* FAQ */}
      <FAQ/>

      {/* CTA and Footer */}
      {/* <div className='bg-slate-900'> */}
        {/* CTA */}
        <CTA/>

        {/* Footer */}
        <Footer/>
      {/* </div> */}
      {/* Floationg Blogs */}
      <FloatingBlobs/>
    </div>
  );
};

export default TrinityLandingPage;