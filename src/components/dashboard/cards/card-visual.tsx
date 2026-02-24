'use client';

import * as React from 'react';
import type { Card as CardType } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Landmark, Wifi } from 'lucide-react';

export function CardVisual({ card }: { card: CardType }) {
  const isVisa = card.provider === 'Visa';

  return (
    <div className={cn(
      "w-full aspect-[1.586] rounded-xl p-6 flex flex-col justify-between text-white shadow-lg relative overflow-hidden",
      "bg-gradient-to-br from-gray-800 to-gray-900",
      { 'from-blue-800 to-blue-900': isVisa }
    )}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
            <Landmark className="h-6 w-6" />
            <span className="font-semibold text-lg">Horizon</span>
        </div>
        <Wifi className="h-6 w-6" />
      </div>

      <div className="space-y-2">
        <p className="font-mono text-xl tracking-widest text-center">
            •••• •••• •••• {card.lastFour}
        </p>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs uppercase">Card Holder</p>
          <p className="font-medium">{card.name}</p>
        </div>
        <div>
          <p className="text-xs uppercase">Expires</p>
          <p className="font-medium">{card.expiryDate}</p>
        </div>
        <p className="font-bold text-xl italic">{card.provider}</p>
      </div>
    </div>
  );
}
