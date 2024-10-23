import React from "react";
import NavbarOptions from '../../Atoms/NavbarOptions/NavbarOptions';
import SocialOption from "../../Atoms/SocialOption/SocialOption";
import { faXTwitter, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import LogoPage from "../../Atoms/LogoPage/LogoPage";

export default function NavbarHeader({ isNavOpen, handleNavToggle }) {
  return (
    <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
      <div className="navbar-top">
        <LogoPage/>
        <button className="nav-close-btn" onClick={handleNavToggle}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul className="navbar-list">
        <NavbarOptions hreferencia={"/home"} pageName={"Inicio"} />
        <NavbarOptions hreferencia={"#torneos"} pageName={"Torneos"} />
        <NavbarOptions hreferencia={"#tournament"} pageName={"Tienda"} />
        <NavbarOptions hreferencia={"#team"} pageName={"Teams"} />
        <NavbarOptions hreferencia={"#gears"} pageName={"Streams"} />
        <NavbarOptions hreferencia={"#contact"} pageName={"Contact"} />
      </ul>

      <ul className="nav-social-list">
        <SocialOption hreferencia={"#"} logoContact={faXTwitter} />
        <SocialOption hreferencia={"#"} logoContact={faInstagram} />
        <SocialOption hreferencia={"#"} logoContact={faGithub} />
        <SocialOption hreferencia={"#"} logoContact={faYoutube} />
      </ul>
    </nav>
  );
}
