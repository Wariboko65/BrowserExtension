import Modal from "./modal.jsx";
import "./extensionCard.css"

export default function ExtensionCard( { name, logo, description, isActive, id, modalId, openModal, closeModal, toggleChange, removeItem}) {
  return (
    <div className="cardContainer">
        <div className="top">
            <div className="extensionIcon">
                <img src={logo} alt="cardLogo" />
            </div>
            <div className="extensionWriteUp">
               <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="bottom">
            <button className="button" type="button" onClick={() => openModal(id)}>Remove</button>
            <label className="label">
                <input 
                  type="checkbox" 
                  name="activity"
                  className="checkbox"
                  checked={isActive}
                  onChange={() => toggleChange(id)}
                />
                <span className="slider"></span>
            </label>
        </div>
        <Modal 
          id={id}
          removeItem={removeItem}
          modalId={modalId}
          closeModal={closeModal}
        >
            <div className="modalCon">
                <div className="header">
                    <p>Are you sure?</p>
                </div>
                <div className="body">
                    <p>
                        This action will temporarily remove this extension. Reload the page to restore it.
                    </p>
                </div>
            </div>
        </Modal>
    </div>
  );
}