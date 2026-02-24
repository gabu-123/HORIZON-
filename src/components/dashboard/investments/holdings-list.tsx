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
import { mockUserData } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function HoldingsList() {
  const { holdings } = mockUserData.investments;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Holdings</CardTitle>
        <CardDescription>A list of your current investment holdings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="hidden sm:table-cell">Shares</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Price</TableHead>
              <TableHead className="hidden md:table-cell text-right">Value</TableHead>
              <TableHead className="text-right">Day's Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.id}>
                <TableCell>
                  <div className="font-medium">{holding.name}</div>
                  <div className="text-sm text-muted-foreground">{holding.ticker}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{holding.shares}</TableCell>
                <TableCell className="hidden sm:table-cell text-right">${holding.price.toFixed(2)}</TableCell>
                <TableCell className="hidden md:table-cell text-right font-medium">${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                <TableCell className="text-right">
                  <div
                    className={cn('flex items-center justify-end gap-1 font-medium', {
                      'text-green-600': holding.changePercent >= 0,
                      'text-red-600': holding.changePercent < 0,
                    })}
                  >
                    {holding.changePercent >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {holding.changePercent.toFixed(2)}%
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
