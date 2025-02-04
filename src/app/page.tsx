import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import NewFeatures from '@/components/NewFeatures';
import NewSocialProof from '@/components/NewSocialProof';
import InteractiveDemo from '@/components/InteractiveDemo';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <ProblemStatement />
        <NewFeatures />
        <NewSocialProof />
        <InteractiveDemo />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
