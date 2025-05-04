import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {uuid} from '@supabase/supabase-js/dist/main/lib/helpers';

export type ToastSeverity = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  summary: string;
  detail: string;
  severity?: ToastSeverity;
}

type ToastState = {
  toasts: Toast[];
};

const initialState: ToastState = {
  toasts: [],
};

export const ToastStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      return {
        removeToast: (toast: Toast) => {
          patchState(store, {toasts: [...store.toasts().filter((toastToCompare) => toastToCompare.id !== toast.id)]});
        },
      };
    }),
    withMethods((store) => {
      return {
        createToast: (toast: { summary: string; detail: string; severity?: ToastSeverity; }) => {
          const newToast = {...toast, id: uuid()};
          patchState(store, {toasts: [...store.toasts(), newToast]});
          setTimeout(() => {
            store.removeToast(newToast);
          }, 5000);
        },
      };
    }),
);
