'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TransactionHistory } from '@/components/dashboard/transaction-history';
import type { Card as CardType, Transaction } from '@/lib/mock-data';
import { CardVisual } from './card-visual';
import { SpendingControls } from './spending-controls';
import { CardActions } from './card-actions';

interface CardDetailsProps {
  card: CardType;
  transactions: Transaction[];
  onUpdateCard: (updatedCard: CardType) => void;
}

export function CardDetails({ card, transactions, onUpdateCard }: CardDetailsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <CardVisual card={card} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Card Controls</CardTitle>
          <CardDescription>Manage your card settings and security features.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardActions card={card} onUpdateCard={onUpdateCard} />
          <Separator />
          <SpendingControls card={card} onUpdateCard={onUpdateCard} />
        </CardContent>
      </Card>

      <TransactionHistory 
        title="Card Transaction History"
        description="Recent transactions made with this card."
        transactions={transactions} 
      />
    </div>
  );
}
