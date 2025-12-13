import { useState, useEffect, useEffectEvent } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";
import logo from "./assets/images/logo.svg";
import darkLogo from "./assets/images/darkLogo.svg";
import AllExtensions from "./pages/allExtensions";
import ActiveExtensions from "./pages/activeExtensions";
import InactiveExtensions from "./pages/inactiveExtensions";
import useLocalStorage from "use-local-storage";
import ThemeToggler from "./components/toggleTheme.jsx";
import { extensionData } from "./data/extensionData.js";
import './App.css'

function App() {
  const [extensionInfo, setExtensionInfo] = useState(extensionData);
  const [modalId, setModalId] = useState(null);
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", systemPreference);
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "system");
 
  useEffect(() => {
    if (themeMode !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
   
    const applyTheme = (e) => {
      setTheme(e?.matches ?? mediaQuery.matches ? "dark" : "light");
    }
   
    applyTheme();
   
    mediaQuery.addEventListener("change", applyTheme);
   
    return () => 
      mediaQuery.removeEventListener("change", applyTheme);
  }, [setTheme, themeMode]);
 
  useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
 
  const toggleTheme = () => {
    setThemeMode("manual");
    setTheme((prev) => (
      prev === "dark" ? "light" : "dark"
    ));
  }

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
 
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--red-2)" : "var(--bg-1)",
    color: isActive ? "var(--bg-1)" : "var(--text-1)"
  });

  return (
    <BrowserRouter>
      <div className="appContainer">
        <div className="body">
          <div className="header">
            <div className="logoTheme">
              <div className="logo">
               <img src={theme === "dark" ? logo : darkLogo} alt="ExtensionPageLogo" />
              </div>
              <ThemeToggler
                isChecked={theme === "dark"}
                toggleTheme={toggleTheme}
                sun={sun}
                moon={moon}
              /> 
            </div>
            <div className="navHeader">
              <h1>Extensions List</h1>
              <nav>
                <NavLink style={navLinkStyles} className="link" to="/">All</NavLink>
                <NavLink style={navLinkStyles} className="link" to="/active">Active</NavLink>
                <NavLink style={navLinkStyles} className="link" to="/inactive">Inactive</NavLink>
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
                removeItem={removeItem}
                toggleChange={toggleChange}
              />
              } 
            />
          </Routes>
       </div>
      </div>
    </BrowserRouter>
  
  )
}

export default App