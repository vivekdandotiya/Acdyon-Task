import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductDemo } from './components/ProductDemo';
import { PathwayMap } from './components/PathwayMap';
import { HowItWorks } from './components/HowItWorks';
import { AICapabilities } from './components/AICapabilities';
import { BrandStory } from './components/BrandStory';
import { ProgramGrid } from './components/ProgramGrid';
import { ConsultationSection } from './components/ConsultationSection';
import { ConsultationModal } from './components/ConsultationModal';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EasterEggToast } from './components/EasterEggToast';
import { CustomCursor } from './components/CustomCursor';
import { AmbientNodeNetwork } from './components/AmbientNodeNetwork';

export function App() {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>('ai-automation');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [logoClickCount, setLogoClickCount] = useState<number>(0);
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);

  const handleLogoClick = () => {
    const nextCount = logoClickCount + 1;
    setLogoClickCount(nextCount);
    if (nextCount >= 5) {
      setShowEasterEgg(true);
      setLogoClickCount(0);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-navy-950 font-sans selection:bg-acdyon-blueLight selection:text-acdyon-blue relative overflow-x-hidden">
      {/* Desktop Custom Cursor Follower */}
      <CustomCursor />

      {/* Page-Wide Editorial Black Dot Background Layer */}
      <AmbientNodeNetwork />

      {/* Signature Floating Header Navigation */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onLogoClick={handleLogoClick}
      />

      {/* Main Experience Flow */}
      <main>
        {/* Hero Section with Staged Entrance Sequence */}
        <Hero
          selectedPathwayId={selectedPathwayId}
          onSelectPathway={setSelectedPathwayId}
          onDiscoverClick={() => scrollToSection('product-demo')}
          onExploreAcdyonClick={() => scrollToSection('programs')}
        />

        {/* Executive Trust & Core Principles */}
        <TrustStrip />

        {/* 3-Step Interactive Product Demo Builder */}
        <ProductDemo
          onBookConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Interactive Pathway Mapping Node Network */}
        <PathwayMap />

        {/* 3-Phase How It Works Process */}
        <HowItWorks />

        {/* Applied AI Capability Cards Grid */}
        <AICapabilities />

        {/* Executive Brand Positioning Section */}
        <BrandStory />

        {/* Verified AcdyOn Programs & Pathways Alignment */}
        <ProgramGrid
          onSelectCategory={() => setIsConsultationOpen(true)}
        />

        {/* Executive Consultation Section */}
        <ConsultationSection
          onBookConsultation={() => setIsConsultationOpen(true)}
          onExplorePrograms={() => scrollToSection('programs')}
        />

        {/* Closing Reflective CTA */}
        <FinalCTA
          onDiscoverClick={() => scrollToSection('product-demo')}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onLogoClick={handleLogoClick} />

      {/* Executive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Hidden Path Easter Egg Toast */}
      <EasterEggToast
        isVisible={showEasterEgg}
        onClose={() => setShowEasterEgg(false)}
      />
    </div>
  );
}

export default App;
