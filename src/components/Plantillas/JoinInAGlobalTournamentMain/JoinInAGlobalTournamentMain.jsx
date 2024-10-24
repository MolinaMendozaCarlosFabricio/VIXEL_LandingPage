import "./JoinInAGlobalTournamentMain.css";
import ImgPrueba from "../../../img/hero-banner.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ButtonPay from "@/components/Atoms/ButtonPay/ButtonPay";

export default function JoinInAGlobalTournamentMain (){

    const objTournament = {
        title: "Torneo mundial de tetris!",
        game: "Tetris",
        description: "Campeones de tetris, preparen sus dedos porque se viene el torneo de tetris, donde competirán contra los demás para sobrevivir a la oleada de figuras, buena suerte campeones!",
        srcPhoto: ImgPrueba
    }

    return(
        <main className="boyd-join-in-a-tournament">
            <h2 className="justify-this-content">Agregar torneo <FontAwesomeIcon icon={faTrophy}/></h2> 
            <div className="content-info-tournament-to-join">
                <h2>{objTournament.title}</h2>
                <img src={objTournament.srcPhoto}/>
                <h4>{objTournament.game}</h4>
                <p>{objTournament.description}</p>

                <ButtonPay action={"Unirse" } linkTo={"/pay"} pageName="Unirse"/>
            </div>
        </main>
    );
}