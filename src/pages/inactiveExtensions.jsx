import ExtensionCard from "../components/extensionCard.jsx";
import { motion, AnimatePresence } from "framer-motion";
import "./pages.css"

export default function InactiveExtension({ modalId, openModal, closeModal, dataValue,removeItem, toggleChange }) {
    return (
        <div className="gridContainer">
          <AnimatePresence>
            {dataValue.map((items) => (
                <motion.div
                  key={items.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0}}
                  viewport={{ once: true, amount: 0.5}}
                  layout
                  exit={{ scale: 0.5, opacity: 0, transition: { delay: 0.28, duration: 0.4 }}}
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
                  toggleChange={toggleChange}
                  removeItem={removeItem}
                  modalId={modalId}
                  openModal={openModal}
                  closeModal={closeModal}
                />
                </motion.div>
            ))}
          </AnimatePresence>
        </div>
    );
}