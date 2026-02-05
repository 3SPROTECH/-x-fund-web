import FeedbackSection from "@/components/home/sections/FeedbackSection"
import HeroSection from "@/components/home/sections/HeroSection"
import OpportunitiesSection from "@/components/home/sections/OpportunitiesSection"
import ProcessSection from "@/components/home/sections/ProcessSection"
import WhySection from "@/components/home/sections/WhySection"
import ContactSection from "@/components/home/sections/ContactSection"
import SecuriteSection from "@/components/home/sections/SecuriteSection"
import CommunitySection from "@/components/home/sections/CommunitySection"
import FAQSection from "@/components/home/sections/FAQSection"

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ProcessSection />
      <OpportunitiesSection/>
      <FeedbackSection/>
      <WhySection/>      
      <SecuriteSection />
      <CommunitySection />
      <FAQSection />
     <ContactSection />
    </div>
  )
}

export default HomePage