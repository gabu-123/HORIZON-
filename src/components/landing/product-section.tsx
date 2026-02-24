import { Building, CreditCard, PiggyBank, Briefcase } from 'lucide-react';

const products = [
  {
    icon: PiggyBank,
    name: 'Personal Banking',
    description: 'Checking, savings, and everything in between for your daily needs.',
  },
  {
    icon: Building,
    name: 'Business Banking',
    description: 'Powerful accounts and tools to help your business grow.',
  },
  {
    icon: CreditCard,
    name: 'Credit & Loans',
    description: 'Flexible credit cards and loans with competitive rates.',
  },
  {
    icon: Briefcase,
    name: 'Investments',
    description: 'Grow your wealth with our easy-to-use investment platform.',
  },
];

export function ProductSection() {
  return (
    <section id="products" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A solution for every financial need.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re an individual or a business, we have the right products to help you achieve your financial goals.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-md">
                <product.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
