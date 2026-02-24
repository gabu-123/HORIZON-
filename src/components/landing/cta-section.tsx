import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-20 shadow-xl sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 opacity-80 animate-gradient-bg"></div>
          <div className="relative text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to take control of your finances?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-200">
              Join Horizon Bank today and experience the future of banking.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Open an Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
