'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, ArrowRight } from 'lucide-react';

export function CardManagement() {
  return (
    <Card className="sm:col-span-2">
      <CardHeader>
        <CardTitle>Card Management</CardTitle>
        <CardDescription>Manage cards, set limits, and view statements.</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/dashboard/cards">
          <Button className="w-full">
            <CreditCard className="mr-2 h-4 w-4" />
            Manage My Cards
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
