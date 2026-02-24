import { Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 font-headline', className)}>
      <div className="rounded-lg bg-primary p-2 shadow-inner">
        <Landmark className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold text-foreground">Horizon Bank</span>
    </div>
  );
}
