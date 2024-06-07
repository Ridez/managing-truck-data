import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import ExitIcon from "./ExitIcon";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  show: boolean;
  hideOverlay?: boolean;
  onClose: () => void;
  noCloseIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  show,
  hideOverlay,
  onClose,
  noCloseIcon,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return mounted && show
    ? createPortal(
        <main>
          <div
            onClick={() => onClose()}
            className={classNames(
              "fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity",
              {
                hidden: hideOverlay,
                "block opacity-100": show,
                "opacity-0": !show,
              }
            )}
          />
          <div
            className={classNames(
              "fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-lg shadow-lg w-[624px] max-w-[90%] transition-transform",
              className,
              {
                "opacity-100 scale-100": show,
                "opacity-0 scale-95": !show,
              }
            )}
          >
            {!noCloseIcon && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              >
                <ExitIcon />
              </button>
            )}
            <div>{children}</div>
          </div>
        </main>,
        document.querySelector("#portal")!
      )
    : null;
};

export default Modal;
