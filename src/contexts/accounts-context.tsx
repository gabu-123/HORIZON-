'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { mockUserData } from '@/lib/mock-data';
import type { Account } from '@/lib/mock-data';

interface AccountsContextType {
  accounts: Account[];
  setAccounts: Dispatch<SetStateAction<Account[]>>;
  handleNewTransaction: (newTransaction: any, targetAccountNumber: string) => void;
}

const AccountsContext = createContext<AccountsContextType | undefined>(undefined);

export function AccountsProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>(mockUserData.accounts);

  const handleNewTransaction = (newTransaction: any, fromAccountNumber: string) => {
    setAccounts(prevAccounts =>
      prevAccounts.map(account => {
        if (account.accountNumber === fromAccountNumber) {
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
    <AccountsContext.Provider value={{ accounts, setAccounts, handleNewTransaction }}>
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
