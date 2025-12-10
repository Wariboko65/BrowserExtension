import ExtensionCard from "../components/extensionCard.jsx";

export default function AllExtensions({ dataValue, modalId, openModal, closeModal, removeItem, toggleChange }) {
    return (
        <div className="allContainer">
            {dataValue.map((items) => (
                <ExtensionCard
                  key={items.id}
                  removeItem={removeItem}
                  toggleChange={toggleChange}
                  {...items}
                  modalId={modalId}
                  openModal={openModal}
                  closeModal={closeModal}
                />
            ))}
        </div>
    );
}