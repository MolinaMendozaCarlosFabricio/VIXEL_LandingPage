import React from "react";
import "./OurGames.css";
import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import GameInfo from "@/components/Plantillas/GameInfo/GameInfo";

export default function OurGames (){
    return(
        <main>
            <HeaderPage/>
            <diV>
                <GameInfo/>
            </diV>
            <FooterPage/>
        </main>
    );
}