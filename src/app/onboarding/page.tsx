import Link from 'next/link';
import { OnboardingForm } from '@/components/onboarding/onboarding-form';
import { Logo } from '@/components/logo';

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-4xl">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className="flex w-full flex-1 items-center justify-center">
        <OnboardingForm />
      </main>
    </div>
  );
}
