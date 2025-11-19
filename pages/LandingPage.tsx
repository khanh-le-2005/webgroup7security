import React from 'react';
import HeroSection from '../components/HeroSection';
import TechIntroSection from '../components/TechIntroSection';
import FeaturesSection from '../components/FeaturesSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-navy text-white font-sans overflow-x-hidden">
      {/* Hero Slider Section */}
      <HeroSection />

      {/* Tech Intro Section */}
      <TechIntroSection />

      {/* Main Offer Section */}
      <FeaturesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section Component */}
      <ContactSection />

      {/* Bottom Call to Action / Warning */}
      <CTASection />
    </div>
  );
};

export default LandingPage;