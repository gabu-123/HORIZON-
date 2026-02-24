import { LandingHeader } from '@/components/landing/landing-header';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { SecuritySection } from '@/components/landing/security-section';
import { ProductSection } from '@/components/landing/product-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { CtaSection } from '@/components/landing/cta-section';
import { LandingFooter } from '@/components/landing/landing-footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SecuritySection />
        <ProductSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
