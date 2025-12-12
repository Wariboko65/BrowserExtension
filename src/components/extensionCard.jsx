import Modal from "./modal.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {X, AlertTriangle } from "lucide-react";
import "./extensionCard.css"

export default function ExtensionCard( { name, logo, description, isActive, id, modalId, openModal, closeModal, toggleChange, removeItem}) {
  return (
    <AnimatePresence>
    <motion.div 
      className="cardContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    
    >
        <div className="top">
            <div className="extensionIcon">
                <img src={logo} alt="cardLogo" />
            </div>
            <div className="extensionWriteUp">
               <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="bottom">
            <button
              className="button" 
              type="button" 
              onClick={() => {
                setTimeout(() => {
                    openModal(id)
                }, 280);
              }}
            >Remove</button>
            <label className="labelCard">
                <input 
                  type="checkbox" 
                  name="activity"
                  className="checkbox"
                  defaultChecked={isActive}
                  onChange={() => {
                    setTimeout(() => {
                        toggleChange(id);
                    }, 280);
                  }}
                />
                <span className="slider"></span>
            </label>
        </div>

        <Modal 
          id={id}
          removeItem={removeItem}
          modalId={modalId}
          closeModal={closeModal}
        >
            <div className="modalContainer-2">
                <div className="modalHeader">
                  <div className="headerSection">
                    <AlertTriangle className="alert" size={24} />
                    <p>Are you sure?</p>
                  </div>
                  <button className="exitBtn" onClick={() => {
                    closeModal();
                  }} type="button">
                    <X className="exit" size={24}/>
                  </button>
                </div>
                <div className="alertText">
                    <p>
                        This action will temporarily remove this extension. Reload the page to restore it.
                    </p>
                </div>
            </div>
        </Modal>
    </motion.div>
    </AnimatePresence>
  );
}