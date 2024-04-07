'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/toast';
import useToast from '@/hooks/useToast';
import { AlertCircle, Ban, CheckCircle2, Info } from 'lucide-react';

const IconToast = {
  info: {
    icon: <Info className="text-primary-blue" />,
    borderColor: 'border-primary-blue'
  },
  warning: {
    icon: <AlertCircle className="text-yellow-400" />,
    borderColor: 'border-yellow-400'
  },
  error: {
    icon: <Ban className="text-red-500" />,
    borderColor: 'border-red-500'
  },
  success: {
    icon: <CheckCircle2 className="text-green-500" />,
    borderColor: 'border-green-500'
  }
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        type = 'info',
        ...props
      }) {
        const { icon, borderColor } = IconToast[type];
        return (
          <Toast key={id} {...props} className="rounded-xl">
            <div className={`flex border-l-2 gap-2 ${borderColor}`}>
              <div className="flex ml-2">
                <div className="flex items-center">{icon}</div>
              </div>
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>

            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
