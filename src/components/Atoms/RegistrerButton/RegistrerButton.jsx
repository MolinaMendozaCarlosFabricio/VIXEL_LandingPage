import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RegistrerButton.css"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function RegistrerButton (){
    return(
        <button class="btn btn-primary">
            <span>Jugar ya!</span>

            <FontAwesomeIcon icon={faCirclePlay}/>
        </button>
    );
}