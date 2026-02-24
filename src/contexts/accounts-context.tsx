'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { mockUserData } from '@/lib/mock-data';
import type { Account, Transaction } from '@/lib/mock-data';

interface AccountsContextType {
  accounts: Account[];
  handleNewTransaction: (newTransaction: Transaction, targetAccountNumber: string) => void;
}

const AccountsContext = createContext<AccountsContextType | undefined>(undefined);

export function AccountsProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>(mockUserData.accounts);

  const handleNewTransaction = (newTransaction: Transaction, targetAccountNumber: string) => {
    setAccounts(prevAccounts =>
      prevAccounts.map(account => {
        if (account.accountNumber === targetAccountNumber) {
          // Ensure the balance is updated correctly as a number
          const newBalance = Number(account.balance) + Number(newTransaction.amount);
          return {
            ...account,
            balance: newBalance,
            transactions: [newTransaction, ...account.transactions],
          };
        }
        return account;
      })
    );
  };

  return (
    <AccountsContext.Provider value={{ accounts, handleNewTransaction }}>
      {children}
    </AccountsContext.Provider>
  );
}

export function useAccounts() {
  const context = useContext(AccountsContext);
  if (context === undefined) {
    throw new Error('useAccounts must be used within an AccountsProvider');
  }
  return context;
}
