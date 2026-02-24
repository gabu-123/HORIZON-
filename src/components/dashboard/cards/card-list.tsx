'use client';

import * as React from 'react';
import { Card as CardType } from '@/lib/mock-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CreditCard, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CardListProps {
  cards: CardType[];
  selectedCardId: string;
  onSelectCard: (id: string) => void;
}

export function CardList({ cards, selectedCardId, onSelectCard }: CardListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cards</CardTitle>
        <CardDescription>Select a card to manage its settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cards.map(card => (
            <button
              key={card.id}
              onClick={() => onSelectCard(card.id)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all",
                selectedCardId === card.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{card.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {card.provider} •••• {card.lastFour}
                    </p>
                  </div>
                </div>
                {selectedCardId === card.id && (
                  <CheckCircle className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Badge variant={card.isFrozen ? 'destructive' : 'secondary'}>
                  {card.isFrozen ? 'Frozen' : 'Active'}
                </Badge>
                <p className="text-sm font-mono text-muted-foreground">{card.type}</p>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
