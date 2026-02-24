'use client';

import * as React from 'react';
import type { Card as CardType } from '@/lib/mock-data';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { UpdateLimitDialog } from './update-limit-dialog';

interface SpendingControlsProps {
    card: CardType;
    onUpdateCard: (updatedCard: CardType) => void;
}

export function SpendingControls({ card, onUpdateCard }: SpendingControlsProps) {
  const [limit, setLimit] = React.useState(card.spendingLimit);
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const { toast } = useToast();

  const progressValue = (card.monthlySpending / limit) * 100;

  const handleLimitChange = (value: number[]) => {
    setLimit(value[0]);
  };

  const handleSaveChanges = () => {
    if (limit !== card.spendingLimit) {
      setIsConfirmOpen(true);
    }
  };

  const handleSuccess = () => {
    onUpdateCard({ ...card, spendingLimit: limit });
    setIsConfirmOpen(false);
    toast({
      title: 'Spending Limit Updated',
      description: `Your new spending limit is ${limit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`,
    });
  };

  React.useEffect(() => {
    setLimit(card.spendingLimit);
  }, [card]);

  return (
    <>
      <div className="space-y-4">
        <div>
          <Label htmlFor="spending-progress">Monthly Spending</Label>
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>{card.monthlySpending.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            <span>{limit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <Progress id="spending-progress" value={progressValue} className="mt-2" />
        </div>

        <div className="space-y-2">
            <Label htmlFor="spending-limit-slider">Set Monthly Spending Limit</Label>
            <div className="flex items-center gap-4">
                <Slider
                    id="spending-limit-slider"
                    min={0}
                    max={10000}
                    step={100}
                    value={[limit]}
                    onValueChange={handleLimitChange}
                    className="flex-1"
                />
                <span className="font-semibold w-24 text-right">
                    {limit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </span>
            </div>
        </div>

        <Button onClick={handleSaveChanges} disabled={limit === card.spendingLimit}>
          Save Changes
        </Button>
      </div>
      <UpdateLimitDialog
        isOpen={isConfirmOpen}
        onOpenChange={setIsConfirmOpen}
        onSuccess={handleSuccess}
      />
    </>
  );
}
