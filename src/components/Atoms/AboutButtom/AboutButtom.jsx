import React from "react";
import './AboutButtom.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutButtom (){
    return (
        <p class="about-bottom-text">
            <FontAwesomeIcon icon={faCircleArrowRight}/>

            <span>Registrate y juega!</span>
        </p>
    );
}