'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { mockUserData } from '@/lib/mock-data';
import { CreditCard, Snowflake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function CardManagement() {
  const [cards, setCards] = useState(mockUserData.cards);
  const { toast } = useToast();

  const toggleFreeze = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === cardId) {
          const updatedCard = { ...card, isFrozen: !card.isFrozen };
          toast({
            title: `Card ${updatedCard.isFrozen ? 'Frozen' : 'Unfrozen'}`,
            description: `Your ${updatedCard.type.toLowerCase()} card ending in ${updatedCard.lastFour} has been updated.`,
          });
          return updatedCard;
        }
        return card;
      })
    );
  };

  return (
    <Card className="sm:col-span-2">
      <CardHeader>
        <CardTitle>Card Management</CardTitle>
        <CardDescription>Manage your physical and virtual cards.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {cards.map((card) => (
          <div key={card.id}>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <CreditCard className="h-6 w-6 text-muted-foreground" />
                    <div>
                        <p className="font-medium">
                            {card.provider} {card.type} (**** {card.lastFour})
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Expires {card.expiryDate}
                        </p>
                    </div>
                </div>
                 <div className="flex items-center space-x-2">
                    <Switch
                        id={`freeze-card-${card.id}`}
                        checked={card.isFrozen}
                        onCheckedChange={() => toggleFreeze(card.id)}
                        aria-label="Freeze card"
                    />
                    <Label htmlFor={`freeze-card-${card.id}`} className={cn(card.isFrozen && "text-accent")}>
                        <Snowflake className="h-4 w-4" />
                    </Label>
                </div>
            </div>
            {card.isFrozen && <p className='text-accent text-xs mt-1 ml-10'>Card is frozen</p>}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
