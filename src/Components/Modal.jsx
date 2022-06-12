import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalContainer">
      <div className="modalText">
        <b>Thank You</b> <br /> Message Sent Sucessfully
      </div>
      <button
        onClick={() => {
          closeModal(false);
        }}
      >
        <MdCancel className="modalIcon" />
      </button>
    </div>
  );
};

export default Modal;
