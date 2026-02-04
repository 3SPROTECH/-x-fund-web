import FeedbackSection from "@/components/home/sections/FeedbackSection"
import HeroSection from "@/components/home/sections/HeroSection"
import OpportunitiesSection from "@/components/home/sections/OpportunitiesSection"
import ProcessSection from "@/components/home/sections/ProcessSection"


const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ProcessSection />
      <OpportunitiesSection/>
      <FeedbackSection/>


    </div>
  )
}

export default HomePage