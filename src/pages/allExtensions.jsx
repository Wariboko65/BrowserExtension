import ExtensionCard from "../components/extensionCard.jsx";
import "./pages.css"

export default function AllExtensions({ dataValue, modalId, openModal, closeModal, removeItem, toggleChange }) {
    return (
        <div className="container">
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