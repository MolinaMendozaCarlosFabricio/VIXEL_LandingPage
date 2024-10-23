import React from "react";
import "./GameInfo.css";
import CardGame from "@/components/Moleculas/CardGame/CardGame";

export default function GameInfo (){
    return(
        <main className="content-gamecards">
            <CardGame/>
            <CardGame/>
            <CardGame/>
            <CardGame/>
            <CardGame/>
        </main>
    );
}