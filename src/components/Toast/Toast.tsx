import React, { useState, useEffect } from "react";

import "components/Toast/toast.styles.css";
import { TOAST_TIMEOUT } from "components/Toast/toast.config";
import { ErrorToastProps } from "components/Toast/toast.types";

export function Toast({
  show,
  message,
  removeMessage,
  type,
}: Readonly<ErrorToastProps>) {
  const [currentMessage, setCurrentMessage] = useState<string | null>();
  let style: string;

  switch (type) {
    case "error":
      style = "toast__error";
      break;
    case "success":
      style = "toast__success";
      break;
    case "warning":
      style = "toast__warning";
      break;
    default:
      style = "toast__info";
  }

  useEffect(() => {
    setCurrentMessage(message);
    const timeout = setTimeout(() => {
      removeMessage();
    }, TOAST_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [message, removeMessage]);

  return (
    <div className={`toast ${style} ${show ? "show" : "hide"}`}>
      {currentMessage}
    </div>
  );
}
