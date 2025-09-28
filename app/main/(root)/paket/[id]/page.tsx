import React from 'react';
import HeroSection from './_sections/hero-sections';
import FeaturesGrid from './_sections/features-grid';
import CourseDescription from './_sections/course-description';
import OtherPackageRecommendations from './_sections/other-package-recommendations';

const CoursePackageDetail = () => {

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Course Description */}
      <CourseDescription />

      {/* Other Packages Recommendations */}
      <OtherPackageRecommendations />
    </>
  );
};

export default CoursePackageDetail;