import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";
import logo from "./assets/images/logo.svg";
import logoDark from "./assets/images/logodark.svg";
import AllExtensions from "./pages/allExtensions";
import ActiveExtensions from "./pages/activeExtensions";
import InactiveExtensions from "./pages/inactiveExtensions";
import useLocalStorage from "use-local-storage";
import ThemeToggler from "./components/toggleTheme.jsx";
import { extensionData } from "./data/extensionData.js";
import './App.css'

function App() {
  const [extensionInfo, setExtensionInfo] = useState(extensionData);
  const [modalId, setModalId] = useState(false);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", preference);
 
  const toggleChange = (id) => {
    setExtensionInfo((prev) => (
      prev.map((item) => (
        item.id === id ? {...item, isActive: !item.isActive} : item
      ))
    ));
  }

  const openModal = (id) => setModalId(id);
  const closeModal = () => setModalId(null);
  const allExtension = extensionInfo;
  const activeExtension = extensionInfo.filter((items) => items.isActive);
  const inactiveExtensions = extensionInfo.filter((items) => !items.isActive);

  const removeItem = (id) => {
    setExtensionInfo((prev) => (
      prev.filter((item) => (
        item.id !== id
      ))
    ));
  } 

  return (
    <BrowserRouter>
      <div className="appContainer" data-theme={theme ? "dark" : "light"}>
        <div className="header">
          <div className="logoTheme">
            <div className="logo">
             <img src={theme ? logo : logoDark} alt="ExtensionPageLogo" />
            </div>
            <ThemeToggler
              isChecked={theme}
              handleChange={() => setTheme(!theme)}
              className="red"
              sun={sun}
              moon={moon}
            /> 
          </div>
          <div className="navHeader">
            <h1>Extensions List</h1>
            <nav>
              <NavLink to="/">All</NavLink>
              <NavLink to="/active">Active</NavLink>
              <NavLink to="/inactive">Inactive</NavLink>
            </nav>
          </div>
        </div>
      
       <Routes>
        <Route path="/" element={
          <AllExtensions 
            dataValue={allExtension}
            modalId={modalId}
            openModal={openModal}
            closeModal={closeModal}
            removeItem={removeItem}
            toggleChange={toggleChange}
          />
          }
        />
        <Route path="/active" element={
          <ActiveExtensions 
            dataValue={activeExtension}
            modalId={modalId}
            openModal={openModal}
            closeModal={closeModal}
            removeItem={removeItem}
            toggleChange={toggleChange}
          />
          } 
        />
        <Route path="/inactive" element={
          <InactiveExtensions
            dataValue={inactiveExtensions}
            modalId={modalId}
            openModal={openModal}
            closeModal={closeModal}
            toggleChange={toggleChange}
          />
          } 
        />
       </Routes>
      </div>
    </BrowserRouter>
  
  )
}

export default App