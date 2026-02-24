import { InvestmentPortfolio } from '@/components/dashboard/investments/investment-portfolio';
import { HoldingsList } from '@/components/dashboard/investments/holdings-list';

export default function InvestmentsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
      <InvestmentPortfolio />
      <HoldingsList />
    </div>
  );
}
