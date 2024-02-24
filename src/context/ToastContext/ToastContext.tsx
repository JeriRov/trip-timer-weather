import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useMemo,
} from "react";

import { Toast } from "components/Toast/Toast";
import { ToastType } from "components/Toast/toast.types";

import { TOAST_CLEAR_TIMEOUT } from "context/ToastContext/toastContext.config";

import { ToastContextType } from "context/ToastContext/toastContext.types";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }
  return context;
};

export function ToastProvider({ children }: Readonly<PropsWithChildren>) {
  const [message, setMessage] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [type, setType] = useState<ToastType>();
  const toast = (currentMessage: string, toastType?: ToastType) => {
    setMessage(currentMessage);
    setShow(true);
    setType(toastType);
  };

  const removeMessage = () => {
    setShow(false);
    const interval = setInterval(() => setMessage(null), TOAST_CLEAR_TIMEOUT);

    clearTimeout(interval);
  };

  const contextValue = useMemo(() => ({ toast }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Toast
        message={message}
        removeMessage={removeMessage}
        show={show}
        type={type}
      />
    </ToastContext.Provider>
  );
}
