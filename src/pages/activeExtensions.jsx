import { motion, AnimatePresence } from "framer-motion";
import ExtensionCard from "../components/extensionCard.jsx";
import "./pages.css"

export default function ActiveExtensions({ modalId, openModal, closeModal, dataValue, removeItem, toggleChange }) {
    return (
        <div className="gridContainer">
            <AnimatePresence>
            {dataValue.map((items) => (
                <motion.div
                 key={items.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0}}
                 layout
                 exit={{ scale: 0.5, opacity: 0, transition: { delay: 0.3, duration: 0.5}}}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ layout: {
                    type: "spring",
                    bounce: 0.35,
                    duration: 0.6
                 },
                    type: "spring",
                    stiffness: 120,
                    damping: 14
                }}
                >
                <ExtensionCard
                  {...items}
                  openModal={openModal}
                  closeModal={closeModal}
                  modalId={modalId}
                  removeItem={removeItem}
                  toggleChange={toggleChange}
                />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    );
}