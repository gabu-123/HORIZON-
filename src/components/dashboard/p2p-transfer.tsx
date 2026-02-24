import { Transaction } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { P2PTransferForm } from './transfers/p2p-transfer-form';

export function P2PTransfer({
  onTransferSuccess,
}: {
  onTransferSuccess?: (newTransaction: Transaction) => void;
}) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Send Money</CardTitle>
            <CardDescription>Instantly transfer funds to anyone.</CardDescription>
        </CardHeader>
        <CardContent>
            <P2PTransferForm onTransferSuccess={onTransferSuccess} />
        </CardContent>
    </Card>
  );
}
