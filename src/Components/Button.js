import React from "react";
import { useState, useEffect } from 'react';
import Modal from "./Modal";

function Button(props) {
    const [showModal, setShowModal] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);

    const handleButtonClick = () => {
        const mediaIdentifier = props.label.toLowerCase().replace(/ /g, "-");
        setCurrentModal(mediaIdentifier);
        setShowModal(true); 
    };



    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentModal(null);
    };

    useEffect(() => {
        const handleCloseOutsideModal = (event) => {
            if (showModal && event.target.classList.contains("modal-overlay")) {
                handleCloseModal();
            }
        };

        window.addEventListener("click", handleCloseOutsideModal);

        return () => {
            window.removeEventListener("click", handleCloseOutsideModal);
        };
    }, [showModal]);

    return (
        <div>
            <button className="custom-button" onClick={handleButtonClick}>
                {props.label}
            </button>
            {showModal && currentModal === props.label.toLowerCase().replace(/ /g, "-") && (
              <Modal handleCloseModal={handleCloseModal} label={props.label}/>
            )}
        </div>
    );
}

export default Button