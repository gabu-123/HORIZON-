import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { P2PTransferForm } from './transfers/p2p-transfer-form';

export function P2PTransfer() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Send Money</CardTitle>
            <CardDescription>Instantly transfer funds to anyone.</CardDescription>
        </CardHeader>
        <CardContent>
            <P2PTransferForm />
        </CardContent>
    </Card>
  );
}
