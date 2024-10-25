import "./MainTournaments.css";
import ImgPrueba from "../../../img/hero-banner.jpg"
import CardTournament from "@/components/Moleculas/CardTournament/CardTournament";
import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";
import ButtonLink from "@/components/Atoms/ButtonLink/ButtonLink";
import ButtonLinkButBlack from "@/components/Atoms/ButtonLinkButBlack/ButtonLinkButBlack";

const prueba = {
    title: "Torneo!",
    game: "Maincra",
    description: "Torneo de construcciones graciosas, únanse plis ;v",
    srcPhoto: ImgPrueba
}

export default function MainTournaments (){

    return(
        <main className="tournaments-body">
            <div className="container-tournaments-list">
                <CardTournament infoTournament={prueba}/>
                <CardTournament infoTournament={prueba}/>
                <CardTournament infoTournament={prueba}/>
            </div>
            <div className="container-tournaments-buttons">
                <ButtonLink pageName={"Agregar torneo"} linkTo={"/addTournament"}/>
                <ButtonLinkButBlack pageName={"Torneo global"} linkTo={"/joinInAGloblarTournament"}/>
            </div>
        </main>
    )
}