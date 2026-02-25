import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Security', href: '#security' },
  { name: 'Products', href: '#products' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold leading-6 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/onboarding">
            <Button>Enroll</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
