export interface ToastItem {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  type?: 'info' | 'success' | 'error' | 'warning';
}

export interface ToastStore {
  toasts: ToastItem[];
  showToast: (toast: ToastItem) => void;
}
