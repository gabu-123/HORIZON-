export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  category: string;
  status: 'Completed' | 'Pending' | 'Failed';
};

export type Account = {
  id: string;
  type: 'Checking' | 'Savings';
  accountNumber: string;
  balance: number;
  transactions: Transaction[];
};

export type Card = {
  id: string;
  type: 'Virtual' | 'Physical';
  provider: 'Visa' | 'Mastercard';
  lastFour: string;
  expiryDate: string;
  isFrozen: boolean;
};

export type UserData = {
  name: string;
  email: string;
  accounts: Account[];
  cards: Card[];
};

export const mockUserData: UserData = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  accounts: [
    {
      id: 'acc_chk_1',
      type: 'Checking',
      accountNumber: '**** **** **** 1234',
      balance: 5420.75,
      transactions: [
        {
          id: 'txn_1',
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Netflix Subscription',
          amount: -15.99,
          type: 'debit',
          category: 'Entertainment',
          status: 'Completed',
        },
        {
          id: 'txn_2',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Salary Deposit',
          amount: 3500.0,
          type: 'credit',
          category: 'Income',
          status: 'Completed',
        },
        {
          id: 'txn_3',
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Whole Foods Market',
          amount: -124.5,
          type: 'debit',
          category: 'Groceries',
          status: 'Completed',
        },
        {
          id: 'txn_4',
          date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'P2P from Jane Smith',
          amount: 50.0,
          type: 'credit',
          category: 'Transfers',
          status: 'Completed',
        },
        {
          id: 'txn_5',
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Gas Station',
          amount: -45.25,
          type: 'debit',
          category: 'Transport',
          status: 'Completed',
        },
      ],
    },
    {
      id: 'acc_sav_1',
      type: 'Savings',
      accountNumber: '**** **** **** 5678',
      balance: 28750.0,
      transactions: [
        {
          id: 'txn_6',
          date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Monthly Interest',
          amount: 35.80,
          type: 'credit',
          category: 'Interest',
          status: 'Completed',
        },
        {
          id: 'txn_7',
          date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: 'Transfer to Checking',
          amount: -500.0,
          type: 'debit',
          category: 'Transfers',
          status: 'Completed',
        },
      ],
    },
  ],
  cards: [
    {
      id: 'card_1',
      type: 'Physical',
      provider: 'Visa',
      lastFour: '1234',
      expiryDate: '12/26',
      isFrozen: false,
    },
    {
      id: 'card_2',
      type: 'Virtual',
      provider: 'Mastercard',
      lastFour: '9876',
      expiryDate: '06/25',
      isFrozen: true,
    },
  ],
};
