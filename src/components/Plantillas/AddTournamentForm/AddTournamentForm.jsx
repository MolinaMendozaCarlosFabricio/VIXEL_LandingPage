import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";
import "./AddTournamentForm.css";

export default function AddTournamentForm (){
    return(
        <main className="add-tournaments-form-body">
        
            <div className="add-tournaments-from-camps">
                <h1>Nombre</h1>
                <input type="text" id="get-name-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Cantidad de participantes</h1>
                <input type="number" id="get-participants-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Costo</h1>
                <input type="number" id="get-prize-tournament"/>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Juego</h1>
                <select id="get-game-tournament">
                    <option>Juego 1</option>
                    <option>Juego 2</option>
                    <option>Juego 3</option>
                </select>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Tipo de premio</h1>
                <select id="get-trophy-tournament">
                    <option>Etherium</option>
                    <option>NFT</option>
                    <option>Otro</option>
                </select>
            </div>
            <div className="add-tournaments-from-camps">
                <h1>Fecha</h1>
                <input type="date" id="get-date-tournament"/>
            </div>

            <ButtonWhitFunction action={"Agregar"}/>
        </main>
    )
}