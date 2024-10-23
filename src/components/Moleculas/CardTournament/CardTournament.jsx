import React from "react";
import "./CardTournament.css";
import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";

export default function CardTournament ({infoTournament}){
    return(
        <main className="container-card-tournament">
            <div className="content-img-card-tournament">
                <img src={infoTournament.srcPhoto}/>
            </div>
            <div className="content-info-card-tournament">
                <h4>{infoTournament.title}</h4>
                <h6>{infoTournament.game}</h6>
                <p>{infoTournament.description}</p>
                <ButtonWhitFunction action={"Unirse"}/>
            </div>
        </main>
    )
}