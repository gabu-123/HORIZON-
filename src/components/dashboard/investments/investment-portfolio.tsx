import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockUserData } from '@/lib/mock-data';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { InvestmentChart } from './investment-chart';
import { cn } from '@/lib/utils';

export function InvestmentPortfolio() {
  const { totalValue, totalGainLoss, totalGainLossPercent } = mockUserData.investments;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Portfolio</CardTitle>
        <CardDescription>Your current holdings and performance.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-semibold">${totalValue.toLocaleString()}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-muted-foreground">Total Gain/Loss</p>
            <p className={cn("text-2xl font-semibold", totalGainLoss > 0 ? 'text-green-600' : 'text-red-600')}>
              {totalGainLoss > 0 ? '+' : ''}${totalGainLoss.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-muted-foreground">Performance</p>
            <div className="flex items-center gap-2">
              <p className={cn("text-2xl font-semibold", totalGainLossPercent > 0 ? 'text-green-600' : 'text-red-600')}>
                {totalGainLossPercent > 0 ? <ArrowUp className="h-6 w-6" /> : <ArrowDown className="h-6 w-6" />}
                {totalGainLossPercent.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
        <InvestmentChart />
      </CardContent>
    </Card>
  );
}
