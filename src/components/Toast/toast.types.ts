export type ToastType = "error" | "success" | "info" | "warning";

export type ErrorToastProps = {
  message: string | null;
  removeMessage: () => void;
  show?: boolean;
  type?: ToastType;
};
