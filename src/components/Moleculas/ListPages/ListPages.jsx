import React from "react";
import "./ListPages.css";
import NavbarOptions from "@/components/Atoms/NavbarOptions/NavbarOptions";

export default function ListPages (){
    return(
        <nav>
            <ul className="another-navbar">
                <NavbarOptions hreferencia={"#"} pageName={"Inicio"}/>
                <NavbarOptions hreferencia={"#"} pageName={"Juegos"}/>
                <NavbarOptions hreferencia={"#"} pageName={"Torneos"}/>
                <NavbarOptions hreferencia={"#"} pageName={"Equpos"}/>
                <NavbarOptions hreferencia={"#"} pageName={"Más"}/>
            </ul>
        </nav>
    )
}