'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Camera, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FacialVerificationDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
  onFailure: () => void;
}

export function FacialVerificationDialog({
  isOpen,
  onOpenChange,
  onSuccess,
  onFailure,
}: FacialVerificationDialogProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | null>(null);
  const [isVerifying, setIsVerifying] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    let stream: MediaStream | null = null;
    
    const getCameraPermission = async () => {
      if (!isOpen) return;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings.',
        });
      }
    };

    getCameraPermission();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isOpen, toast]);

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate a facial verification API call
    setTimeout(() => {
      const isVerified = Math.random() > 0.2; // 80% success rate for demo
      if (isVerified) {
        toast({
          title: 'Verification Successful',
          description: 'Identity confirmed. You can now proceed.',
        });
        onSuccess();
      } else {
        toast({
          variant: 'destructive',
          title: 'Verification Failed',
          description: 'We could not verify your identity. For security, you will be logged out.',
        });
        setTimeout(onFailure, 1500); // Give user time to read toast
      }
      setIsVerifying(false);
    }, 2000);
  };
  
  React.useEffect(() => {
    if (!isOpen) {
      setHasCameraPermission(null);
      setIsVerifying(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Facial Verification Required</DialogTitle>
          <DialogDescription>
            As a security measure, we need to verify your identity before proceeding. Please position your face in the camera frame.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
            />
            {hasCameraPermission === false && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 text-white">
                    <Camera className="h-10 w-10" />
                    <p className="text-sm font-medium">Camera access denied</p>
                </div>
            )}
             {hasCameraPermission === null && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Requesting camera...</p>
                </div>
            )}
          </div>
          {hasCameraPermission === false && (
            <Alert variant="destructive" className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Camera Access Required</AlertTitle>
              <AlertDescription>
                Please allow camera access in your browser settings to use this feature.
              </AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button
            onClick={handleVerify}
            disabled={!hasCameraPermission || isVerifying}
            className="w-full"
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              'Start Verification'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

    