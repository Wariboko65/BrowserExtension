import ExtensionCard from "../components/extensionCard.jsx";
import "./pages.css"

export default function InactiveExtension({ modalId, openModal, closeModal, dataValue,removeItem, toggleChange }) {
    return (
        <div className="container">
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