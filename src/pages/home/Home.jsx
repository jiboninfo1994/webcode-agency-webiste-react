import BlogSection from './BlogSection';
import CTASection from './CTASection';
import FAQs from './FAQs';
import HeroSection from './HeroSection';
import LogoSection from './LogoSection';
import PricingSection from './PricingSection';
import ServiceSection from './ServiceSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import ToolsSection from './ToolsSection';

function Home() {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <LogoSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <TeamSection />
      <PricingSection />
      <FAQs />
      <CTASection />
    </>
  );
}

export default Home;
