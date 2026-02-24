'use client'

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from 'recharts'
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { mockUserData } from '@/lib/mock-data'

const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "hsl(var(--primary))",
  },
}

export function InvestmentChart() {
  const chartData = mockUserData.investments.history;
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full">
      <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <Tooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Area
          dataKey="value"
          type="natural"
          fill="var(--color-value)"
          fillOpacity={0.4}
          stroke="var(--color-value)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
