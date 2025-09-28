import HeroSection from './_sections/hero-section';
import AboutUsSection from './_sections/about-us-section';
import WhyUsSection from './_sections/why-use-section';

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Content */}
      <AboutUsSection />

      {/* Why Us Section */}
      <WhyUsSection />
    </>
  );
}