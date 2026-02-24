'use client';

import { motion } from 'framer-motion';
import { ArrowRightLeft, Bot, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ArrowRightLeft,
    title: 'Instant Transfers',
    description: 'Send and receive money globally in seconds, with no hidden fees.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Savings Automation',
    description: 'Effortlessly grow your savings with automated rules and goals.',
  },
  {
    icon: Bot,
    title: 'AI Financial Insights',
    description: 'Get personalized advice and insights to make smarter financial decisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Biometric Access',
    description: 'Your account is protected with industry-leading security and biometrics.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold leading-8 text-primary">
            A Better Way to Bank
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, nothing you don&apos;t.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Horizon Bank combines cutting-edge technology with user-centric design to give you a seamless banking experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col gap-y-6 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
