import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";
import "./DataTournament.css";
import RgbLine from "@/components/Atoms/RgbLine/RgbLine";
import FooterPage from "@/components/Organismos/FooterPage/FooterPage";

export default function DataTournament (){
    return(
        <main>
            <HeaderPage/>
            <div>
                <RgbLine/>
            </div>
            <FooterPage/>
        </main>
    );
}