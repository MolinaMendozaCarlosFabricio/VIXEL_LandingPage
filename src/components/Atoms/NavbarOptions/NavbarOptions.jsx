import React from "react";

export default function NavbarOptions ({hreferencia, pageName}){
    return(
        <li>
            <a href={hreferencia} class="navbar-link">{pageName}</a>
        </li>
    );
}