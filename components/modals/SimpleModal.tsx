import React, { useEffect } from "react";

export type SimpleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function SimpleModal({ isOpen, onClose, children }: SimpleModalProps) {
  useEffect(() => {
    const onKeyPress = (event: any) => {
      if (event.key == "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyPress);

    return () => {
      window.removeEventListener("scroll", onKeyPress);
    };
  }, [onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="p-2 flex flex-col items-end bg-white rounded-lg border-2 border-blue-300">
        <button onClick={onClose} className="m-2">
          X
        </button>
        <div className="p-2 min-w-[400px]">{children}</div>
      </div>
    </div>
  );
}

export default SimpleModal;
