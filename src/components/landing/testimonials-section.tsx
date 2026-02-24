import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah L.',
    role: 'Freelance Designer',
    quote: 'Horizon Bank has completely changed how I manage my finances. The AI insights are a game-changer!',
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    role: 'Small Business Owner',
    quote: 'Finally, a bank that understands the needs of a modern business. Seamless, fast, and reliable.',
  },
  {
    id: 'testimonial-3',
    name: 'Jessica T.',
    role: 'Student',
    quote: 'I love how easy it is to send money to my friends and track my spending. The app is so intuitive!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by users worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don&apos;t just take our word for it. Hear what our customers have to say about their experience with Horizon Bank.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <div
                key={testimonial.id}
                className="flex flex-col rounded-2xl bg-card shadow-sm ring-1 ring-border/50"
              >
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex-1">
                    <p className="text-base text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-x-4">
                    {image && (
                      <Image
                        className="h-12 w-12 rounded-full bg-gray-50"
                        src={image.imageUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
