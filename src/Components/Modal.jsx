import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="closeModal"
          onClick={() => {
            closeModal(false);
          }}
        >
          <MdCancel />
        </button>
        <div className="modalTitle">Message Sent!!</div>
        <div className="modalBody">
          <FaCheckCircle />
        </div>
        <div className="modalFooter">
          <button
            className="closeModal-large"
            onClick={() => {
              closeModal(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
