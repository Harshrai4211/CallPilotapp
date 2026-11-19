import { ModalProvider } from './context/ModalContext.jsx';
import ModalManager from './components/ModalManager.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustSection from './components/TrustSection.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import DashboardPreview from './components/DashboardPreview.jsx';
import Pricing from './components/Pricing.jsx';
import CTASection from './components/CTASection.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <ModalProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-ink-800">
        <Navbar />
        <main>
          <Hero />
          <TrustSection />
          <Features />
          <HowItWorks />
          <DashboardPreview />
          <Pricing />
          <CTASection />
          <FAQ />
        </main>
        <Footer />
        <ModalManager />
      </div>
    </ModalProvider>
  );
}
