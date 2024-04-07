import { create } from 'zustand';
import { ToastStore } from './types/ToastType';

const useToast = create<ToastStore>(set => ({
  toasts: [],
  showToast: toast => {
    const id = `toast_${Date.now()}`;

    set(state => {
      if (state.toasts.length == 1) {
        const [, ...toastNow] = state.toasts;
        return { toasts: [...toastNow, { ...toast, id }] };
      }
      return { toasts: [...state.toasts, { ...toast, id }] };
    });
    setTimeout(() => {
      set(state => ({ toasts: state.toasts.filter(t => t.id !== toast.id) }));
    }, 3000);
  }
}));

export default useToast;
