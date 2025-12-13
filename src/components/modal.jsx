import { createPortal } from "react-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.css"

export default function Modal({ id, children, modalId, closeModal, removeItem }) {
    const modalOpen = modalId === id;
    useEffect(() => {
        if (modalOpen) {
            const getScrollbarWidth = () => {window.innerWidth - document.documentElement.clientWidth; }
            const scrollbarWidth = getScrollbarWidth();
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
                

        }  return () => {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";

        }
    }, [modalOpen]);
   
    const handleClose = () => {
        closeModal()
    }
   
    const handleConfirm = () => {
        closeModal();
        setTimeout(() => {removeItem(id)}, 300);
    }

    return createPortal(
        <AnimatePresence>
          {modalId === id && (
        <motion.div 
          className="modalBackground"
          data-theme={document.querySelector(".appContainer")?.dataset.theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.28 }}
          exit={{ opacity: 0, transition: { delay: 0.28, duration: 0.4 }}}
        
        >
            <motion.div 
              className="modalContainer-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28 }}
              exit={{ opacity: 0, scale: 0.1, transition: { delay: 0.28, duration: 0.4} }}
            
            >
                {children}
                <div className="buttonContainer">
                    <button type="button" className="buttons" onClick={handleClose}>No, Cancel</button>
                    <button type="button" className="buttons btn" onClick={handleConfirm}>Yes, I'm sure</button>
                </div>
            </motion.div>
        </motion.div>)}
        </AnimatePresence>, 
        document.body
    );
}