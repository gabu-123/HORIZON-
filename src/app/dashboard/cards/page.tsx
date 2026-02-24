'use client';

import * as React from 'react';
import { mockUserData, Card as CardType, Transaction } from '@/lib/mock-data';
import { CardList } from '@/components/dashboard/cards/card-list';
import { CardDetails } from '@/components/dashboard/cards/card-details';
import { useAccounts } from '@/contexts/accounts-context';

export default function CardsPage() {
  const { accounts, setAccounts } = useAccounts();
  const [selectedCardId, setSelectedCardId] = React.useState(accounts[0]?.cards[0]?.id || '');

  const allCards = React.useMemo(() => accounts.flatMap(acc => acc.cards) || [], [accounts]);
  const selectedCard = allCards.find(card => card.id === selectedCardId);

  const handleUpdateCard = (updatedCard: CardType) => {
    const newAccounts = accounts.map(account => ({
      ...account,
      cards: account.cards.map(card => card.id === updatedCard.id ? updatedCard : card)
    }));
    setAccounts(newAccounts);
  };
  
  const cardTransactions = accounts
    .flatMap(acc => acc.transactions)
    .filter(t => t.cardId === selectedCardId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1">
        <CardList 
          cards={allCards}
          selectedCardId={selectedCardId}
          onSelectCard={setSelectedCardId}
        />
      </div>
      <div className="md:col-span-2">
        {selectedCard ? (
          <CardDetails 
            card={selectedCard}
            transactions={cardTransactions}
            onUpdateCard={handleUpdateCard}
          />
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            <p>Please select a card to view its details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
