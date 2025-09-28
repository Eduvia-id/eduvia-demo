import FaqSection from "./_sections/faq-section";
import FeatureSection from "./_sections/feature-section";
import HeroSection from "./_sections/hero-section";
import PackageSection from "./_sections/package-section";
import PopularPackageSection from "./_sections/popular-package-section";
import TestimonialSection from "./_sections/testimonial-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Popular Packages Section */}
      <PopularPackageSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* FAQ */}
      <FaqSection />

      {/* Package Section */}
      <PackageSection />
    </>
  );
}

