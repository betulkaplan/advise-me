import React, { useEffect } from "react";

function SimpleModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: any;
  children: any;
}) {
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
    <div className=" fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="p-2 flex flex-col items-end bg-white rounded-lg">
        <button onClick={onClose} className="m-2">
          X
        </button>
        <div className="bg-blue-400  min-w-[400px]">{children}</div>
      </div>
    </div>
  );
}

export default SimpleModal;