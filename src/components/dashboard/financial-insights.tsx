'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { Lightbulb, Sparkles } from 'lucide-react';

type Insights = {
  insights: string;
  recommendations: string;
};

export function FinancialInsights() {
  const [insights] = useState<Insights | null>({
    insights: 'Your spending on dining out is higher than average for your income bracket. This is a key area for potential savings.',
    recommendations: 'Try reducing dining out by one meal per week. This could save you over $200 a month to put towards your housing goal.'
  });
  const [loading] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className='space-y-1.5'>
            <CardTitle>AI Financial Insights</CardTitle>
            <CardDescription>Personalized advice just for you.</CardDescription>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
            <Sparkles className="h-6 w-6 text-accent-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold"><Lightbulb className="h-4 w-4"/>Insights</h4>
              <p className="text-sm text-muted-foreground">
                {insights?.insights}
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold"><Sparkles className="h-4 w-4"/>Recommendations</h4>
              <p className="text-sm text-muted-foreground">
                {insights?.recommendations}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
