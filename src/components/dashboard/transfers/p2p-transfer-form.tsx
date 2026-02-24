'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Transaction } from '@/lib/mock-data';
import { DollarSign, Send, Users } from 'lucide-react';
import { useState } from 'react';

export function P2PTransferForm({
  onTransferSuccess,
}: {
  onTransferSuccess?: (newTransaction: Transaction) => void;
}) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const recipientInput = form.elements.namedItem('recipient') as HTMLInputElement;
    const amountInput = form.elements.namedItem('amount') as HTMLInputElement;
    const noteInput = form.elements.namedItem('note') as HTMLInputElement;

    const recipient = recipientInput.value;
    const amount = parseFloat(amountInput.value);
    const note = noteInput.value;

    if (onTransferSuccess) {
      const newTransaction: Transaction = {
        id: `txn_${Date.now()}`,
        date: new Date().toISOString(),
        description: `Transfer to ${recipient}${note ? ` - ${note}`: ''}`,
        amount: -amount,
        type: 'debit',
        category: 'Transfers',
        status: 'Completed',
      };
      onTransferSuccess(newTransaction);
    }
    
    toast({
      title: 'Transfer Sent',
      description: `You sent ${amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })} to ${recipient}.`,
    });

    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Send className="mr-2 h-4 w-4" /> New Transfer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Peer-to-Peer Transfer</DialogTitle>
          <DialogDescription>
            Send money securely. The recipient will be notified instantly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSendMoney}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="recipient" placeholder="Email, phone, or username" className="pl-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="amount" type="number" placeholder="0.00" className="pl-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="note">Note (Optional)</Label>
              <Input id="note" placeholder="For dinner last night" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="mr-2 h-4 w-4" /> Send Money
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
