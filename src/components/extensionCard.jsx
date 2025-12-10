import Modal from "./modal.jsx";

export default function ExtensionCard( { name, logo, description, isActive, id, modalId, openModal, closeModal, toggleChange, removeItem }) {
  return (
    <div className="cardContainer">
        <div className="top">
            <div>
                <img src={logo} alt="cardLogo" />
            </div>
            <div>
               <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="bottom">
            <button type="button" onClick={openModal(id)}>Remove</button>
            <label>
                <input 
                  type="checkbox" 
                  name="activity"
                  checked={isActive}
                  onChange={() => toggleChange(id)}
                />
            </label>
        </div>
        <Modal 
          id={id}
          removeItem={removeItem}
          modalId={modalId}
          openModal={openModal}
          closeModal={closeModal}
        >
            <div className="modalCon">
                <div className="header">
                    <p>Are you sure?</p>
                </div>
                <div className="body">
                    <p>Are you sure you want to remove this extension?</p>
                </div>
            </div>
        </Modal>
    </div>
  );
}