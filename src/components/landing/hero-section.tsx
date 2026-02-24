'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const phoneMockup = PlaceHolderImages.find((img) => img.id === 'phone-mockup');

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 animate-gradient-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),_transparent_40%)] dark:bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.4),_transparent_40%)]"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Banking that finally feels like the future.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              Horizon Bank empowers you with intelligent tools and a seamless
              experience to manage your finances effortlessly. Welcome to
              smarter banking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
            >
              <Link href="/onboarding">
                <Button size="lg">Open an Account</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="ghost">
                  Learn More &rarr;
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="rounded-4xl relative z-10 mx-auto w-[250px] transform-gpu shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 sm:w-[300px]">
              <div className="aspect-[3/5] rounded-[2rem] border-8 border-gray-800 bg-gray-900 p-1.5">
                {phoneMockup && (
                  <Image
                    src={phoneMockup.imageUrl}
                    alt="Horizon Bank App Dashboard"
                    width={600}
                    height={800}
                    className="h-full w-full rounded-[1.5rem] object-cover"
                    priority
                    data-ai-hint={phoneMockup.imageHint}
                  />
                )}
              </div>
            </div>
            <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
