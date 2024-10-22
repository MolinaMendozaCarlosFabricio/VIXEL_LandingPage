import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function RegistrerButton (){
    return(
        <button class="btn btn-primary">
            <span>Registrarse</span>

            <FontAwesomeIcon icon={faCirclePlay}/>
        </button>
    );
}