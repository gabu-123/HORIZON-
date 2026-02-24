'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TransactionHistory } from '@/components/dashboard/transaction-history';
import { P2PTransferForm } from '@/components/dashboard/transfers/p2p-transfer-form';
import { mockUserData, Transaction } from '@/lib/mock-data';
import { useState } from 'react';

export default function TransfersPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(
    (
      mockUserData.accounts.find((acc) => acc.type === 'Checking')
        ?.transactions || []
    ).filter((t) => t.category === 'Transfers')
  );

  const handleNewTransfer = (newTransaction: Transaction) => {
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <div className="md:col-span-2">
        <TransactionHistory
          title="Transfer History"
          description="A log of your recent peer-to-peer transfers."
          transactions={transactions}
          categoryFilter="Transfers"
        />
      </div>
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>New Transfer</CardTitle>
            <CardDescription>Instantly send money to anyone.</CardDescription>
          </CardHeader>
          <CardContent>
            <P2PTransferForm onTransferSuccess={handleNewTransfer} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
