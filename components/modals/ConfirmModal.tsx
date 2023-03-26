import React from "react";
import SimpleModal, { SimpleModalProps } from "./SimpleModal";

interface ConfirmModalProps extends Omit<SimpleModalProps, "children"> {
  onConfirm: () => void;
}

function ConfirmModal({ onConfirm, ...props }: ConfirmModalProps) {
  return (
    <SimpleModal {...props}>
      <div>Are you sure you want to do this?</div>
      <button
        onClick={props.onClose}
        className="m-1 p-2 bg-red-500  text-white rounded-md"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className="m-1 p-2 bg-blue-500 text-white rounded-md"
      >
        Confirm
      </button>
    </SimpleModal>
  );
}

export default ConfirmModal;
