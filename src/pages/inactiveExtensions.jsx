import ExtensionCard from "../components/extensionCard.jsx";

export default function InactiveExtension({ modalId, openModal, closeModal, dataValue,removeItem, toggleChange }) {
    return (
        <div className="inactiveContainer">
            {dataValue.map((items) => (
                <ExtensionCard
                  key={items.key}
                  {...items}
                  toggleChange={toggleChange}
                  removeItem={removeItem}
                  modalId={modalId}
                  openModal={openModal}
                  closeModal={closeModal}
                />
            ))}
        </div>
    );
}