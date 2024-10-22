import React, { useState, useEffect } from "react";
import './HeaderPage.css';
import NavbarHeader from "../../Moleculas/NavbarHeader/NavbarHeader";
import SearchButton from "../../Atoms/SearchButton/SearchButton";
import LoginButton from "../../Atoms/LoginButton/LoginButton";
import LogoPage from "../../Atoms/LogoPage/LogoPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import RgbLine from "../../Atoms/RgbLine/RgbLine";
import ListPages from "@/components/Moleculas/ListPages/ListPages";

export default function HeaderPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Aplicar o remover la clase 'active' del body cuando el menú esté abierto
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className={`overlay ${isNavOpen ? "active" : ""}`} onClick={handleNavToggle}></div>

      <div className="container">
        <LogoPage/>

        <ListPages/>
        
        <button className="nav-open-btn" onClick={handleNavToggle}>
          <FontAwesomeIcon icon={faBars}/>
        </button>

        <NavbarHeader isNavOpen={isNavOpen} handleNavToggle={handleNavToggle} />

        <div className="header-actions">
          <SearchButton />
          <LoginButton />
        </div>
      </div>
      <div class="rgb-line separate-from-header"/>
    </header>
  );
}
