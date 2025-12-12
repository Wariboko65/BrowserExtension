import ExtensionCard from "../components/extensionCard.jsx";
import "./pages.css"

export default function ActiveExtensions({ modalId, openModal, closeModal, dataValue, removeItem, toggleChange }) {
    return (
        <div className="container">
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