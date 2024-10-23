import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./AddTournament.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import AddTournamentForm from "@/components/Plantillas/AddTournamentForm/AddTournamentForm";


export default function AddTournament(){
    return(
        <main>
            <HeaderPage/>
            <div>
                <h2>Agregar torneo <FontAwesomeIcon icon={faTrophy}/></h2> 
                <AddTournamentForm/>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    )
}