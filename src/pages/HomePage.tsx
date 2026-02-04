import HeroSection from "@/components/home/sections/HeroSection"
import ProcessSection from "@/components/home/sections/ProcessSection"
import WhySection from "@/components/home/sections/WhySection"
import ContactSection from "@/components/home/sections/ContactSection"
import SecuriteSection from "@/components/home/sections/SecuriteSection"

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ProcessSection />
      <WhySection/>      
      <ContactSection />
      <SecuriteSection />
     
     
    </div>
  )
}

export default HomePage