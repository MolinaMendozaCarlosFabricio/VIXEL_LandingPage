import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JoinInATournamentMain.css"
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";

export default function JoinInATournamentMain ({objTournament}){
    return(
        <main className="boyd-join-in-a-tournament">
            <h2 className="justify-this-content">Agregar torneo <FontAwesomeIcon icon={faTrophy}/></h2> 
            <div className="content-info-tournament-to-join">
                <h2>{objTournament.title}</h2>
                <img src={objTournament.srcPhoto}/>
                <h4>{objTournament.game}</h4>
                <p>{objTournament.description}</p>

                <ButtonWhitFunction action={"Unirse"}/>
            </div>
        </main>
    );
}