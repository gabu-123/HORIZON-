import { CardManagement } from '@/components/dashboard/card-management';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function CardsPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
                <CardManagement />
            </div>
            <div className="md:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle>Request New Card</CardTitle>
                        <CardDescription>Request a new physical or virtual card.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full">
                            <PlusCircle className="mr-2 h-4 w-4" /> Request Card
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
