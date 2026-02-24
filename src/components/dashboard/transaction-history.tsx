'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockUserData, Transaction } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TransactionHistoryProps {
  title?: string;
  description?: string;
  categoryFilter?: string;
}

export function TransactionHistory({
  title = 'Recent Transactions',
  description = 'A log of recent activity in your checking account.',
  categoryFilter,
}: TransactionHistoryProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let transactions: Transaction[] =
    mockUserData.accounts.find((acc) => acc.type === 'Checking')
      ?.transactions || [];

  if (categoryFilter) {
    transactions = transactions.filter(txn => txn.category === categoryFilter);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.slice(0, 5).map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                     <div className={cn("hidden h-8 w-8 items-center justify-center rounded-full sm:flex", txn.type === 'credit' ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50')}>
                        {txn.type === 'credit' ? <ArrowDownLeft className="h-4 w-4 text-green-600 dark:text-green-400" /> : <ArrowUpRight className="h-4 w-4 text-red-600 dark:text-red-400" />}
                     </div>
                    <div className="font-medium">{txn.description}</div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {txn.category}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant={txn.status === 'Completed' ? 'default' : 'secondary'}>
                    {txn.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {isClient ? new Date(txn.date).toLocaleDateString() : txn.date}
                </TableCell>
                <TableCell
                  className={cn('text-right font-medium', {
                    'text-green-600 dark:text-green-400': txn.type === 'credit',
                    'text-red-600 dark:text-red-400': txn.type === 'debit',
                  })}
                >
                  {txn.type === 'credit' ? '+' : ''}
                  {txn.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
