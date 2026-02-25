'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertTriangle } from 'lucide-react';

interface SecurityLockoutDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
}

export function SecurityLockoutDialog({ isOpen, onConfirm }: SecurityLockoutDialogProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
            <div className="flex justify-center">
                <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
          <AlertDialogTitle className="text-center text-2xl">Account Access Restricted</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            For your protection, access to this account has been temporarily restricted due to unusual activity detected by our security monitoring system.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onConfirm} className="w-full">
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
