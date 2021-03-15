import React from "react";
import "./Modal.css";
import CloseIconSVG from "../assets/CloseIconSVG";

export default function Modal({ props }) {
  const { modalContent, setModalContent } = props;

  return (
    <div className={`modal ${modalContent ? "open-modal" : "hidden-modal"}`}>
      {modalContent && (
        <div className="modal-box">
          <button
            className="close-modal"
            onClick={() => {
              setModalContent(null);
            }}
          >
            <CloseIconSVG />
          </button>
          {modalContent}
        </div>
      )}
      <div
        className="modal-background"
        onClick={() => setModalContent(null)}
      ></div>
    </div>
  );
}
