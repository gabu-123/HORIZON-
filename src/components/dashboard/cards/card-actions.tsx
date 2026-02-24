'use client';

import * as React from 'react';
import type { Card as CardType } from '@/lib/mock-data';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Snowflake } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardActionsProps {
    card: CardType;
    onUpdateCard: (updatedCard: CardType) => void;
}

export function CardActions({ card, onUpdateCard }: CardActionsProps) {
  const { toast } = useToast();

  const handleFreezeToggle = (isFrozen: boolean) => {
    onUpdateCard({ ...card, isFrozen });
    toast({
        title: `Card ${isFrozen ? 'Frozen' : 'Unfrozen'}`,
        description: `Your ${card.name} card has been successfully ${isFrozen ? 'frozen' : 'unfrozen'}.`,
    });
  };

  return (
    <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <Label htmlFor="freeze-card" className="font-semibold">Freeze Card</Label>
                <p className="text-sm text-muted-foreground">
                    Instantly block all transactions on this card.
                </p>
                 {card.isFrozen && <p className='text-accent text-xs mt-1'>Card is currently frozen</p>}
            </div>
            <div className="flex items-center space-x-2">
                 <Switch
                    id="freeze-card"
                    checked={card.isFrozen}
                    onCheckedChange={handleFreezeToggle}
                    aria-label="Freeze card"
                />
                 <Label htmlFor="freeze-card" className={cn("cursor-pointer", card.isFrozen && "text-accent")}>
                    <Snowflake className="h-5 w-5" />
                </Label>
            </div>
        </div>
    </div>
  );
}
