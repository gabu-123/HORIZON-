import { ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export function SecuritySection() {
  return (
    <section id="security" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-last lg:order-first">
            <div className="mx-auto max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your security is our top priority.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We use bank-level security and encryption to keep your money and data safe. Rest easy knowing you&apos;re protected by the latest in fraud prevention and security technology.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-primary" />
                    Bank-Level Encryption.
                  </dt>{' '}
                  <dd className="inline">Your data is encrypted in transit and at rest with AES-256.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <Lock className="absolute left-1 top-1 h-5 w-5 text-primary" />
                    Proactive Fraud Protection.
                  </dt>{' '}
                  <dd className="inline">We monitor your account for suspicious activity 24/7.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <Fingerprint className="absolute left-1 top-1 h-5 w-5 text-primary" />
                    Regulatory Compliance.
                  </dt>{' '}
                  <dd className="inline">We are fully compliant with all major financial regulations.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
            >
              <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30"></div>
              <ShieldCheck className="relative h-40 w-40 text-white" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
