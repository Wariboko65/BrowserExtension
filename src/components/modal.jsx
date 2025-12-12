import { createPortal } from "react-dom";
import "./modal.css"

export default function Modal({ id, children, modalId, closeModal, removeItem }) {
    if (modalId !== id ) return null;

    return createPortal(
        <div className="modalBackground">
            <div className="modalContainer">
                {children}
                <div className="buttonContainer">
                    <button type="button" className="buttons" onClick={closeModal}>No, Cancel</button>
                    <button type="button" className="buttons btn" onClick={() => {
                        removeItem(id);
                        closeModal();
                    }}>Yes, I'm sure</button>
                </div>
            </div> 
        </div>,
        document.getElementById("root")
    );
}