import { ToastType } from "components/Toast/toast.types";

export interface ToastContextType {
  toast: (message: string, toastType?: ToastType) => void;
}
