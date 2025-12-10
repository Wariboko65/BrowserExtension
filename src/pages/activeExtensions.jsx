import ExtensionCard from "../components/extensionCard.jsx";

export default function ActiveExtensions({ modalId, openModal, closeModal, dataValue, removeItem, toggleChange }) {
    return (
        <div className="activeContainer">
            {dataValue.map((items) => (
                <ExtensionCard
                  key={items.id}
                  {...items}
                  openModal={openModal}
                  closeModal={closeModal}
                  modalId={modalId}
                  removeItem={removeItem}
                  toggleChange={toggleChange}
                />
            ))}
        </div>
    );
}