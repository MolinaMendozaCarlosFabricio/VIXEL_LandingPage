import React from "react";
import "./LogoPage.css";
import GameXLogo from '../../../icons/logo.svg';

export default function LogoPage (){
    return(
        <a href="#" className="logo">
          <img src={GameXLogo} alt="GameX logo" />
        </a>
    );
}