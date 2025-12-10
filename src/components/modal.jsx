import { createPortal } from "react-dom";

export default function Modal({ id, children, modalId,  closeModal, removeItem }) {
    if (modalId !== id ) return null;

    return createPortal(
        <div className="modalBackground">
            <div className="modalContainer">
                {children}
                <div className="buttons">
                    <button type="button" onClick={() => closeModal}>Cancle</button>
                    <button type="button" onClick={() => removeItem(id)}>{id}</button>
                </div>
            </div>
        </div>,
        document.body
    );
}