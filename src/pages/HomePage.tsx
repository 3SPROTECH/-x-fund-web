import HeroSection from "@/components/home/sections/HeroSection"
import ProcessSection from "@/components/home/sections/ProcessSection"
import WhySection from "@/components/home/sections/WhySection"
import ContactSection from "@/components/home/sections/ContactSection"
import SecuriteSection from "@/components/home/sections/SecuriteSection"
import FAQSection from "@/components/home/sections/FAQSection"

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ProcessSection />
      <WhySection/>      
      <SecuriteSection />
      <FAQSection />
     <ContactSection />
    </div>
  )
}

export default HomePage