import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TransactionHistory } from '@/components/dashboard/transaction-history';
import { P2PTransferForm } from '@/components/dashboard/transfers/p2p-transfer-form';

export default function TransfersPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <div className="md:col-span-2">
        <TransactionHistory
          title="Transfer History"
          description="A log of your recent peer-to-peer transfers."
          categoryFilter="Transfers"
        />
      </div>
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>New Transfer</CardTitle>
            <CardDescription>Instantly send money to anyone.</CardDescription>
          </CardHeader>
          <CardContent>
            <P2PTransferForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
