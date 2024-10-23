import LeaderBoard from "@/components/Organismos/LeaderBoard/LeaderBoard";
import "./DataTournamentInfo.css";
import { useState } from "react";

export default function DataTournamentInfo (){

    // Controla la pestaña activa
    const [activeTab, setActiveTab] = useState('tab1');

    // Función para cambiar la pestaña activa
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <main className="tabs-body">
    <div>
      {/* Encabezados de las pestañas */}
      <div className="tabs">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Tabla de Clasificaciones
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          Misiones Diarias
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Misiones Semanales
        </button>
        <button
            className={activeTab == 'tab4' ? 'active' : ''}
            onClick={() => handleTabClick('tab4')}
        >
            Misiones Mensuales
        </button>
      </div>

      {/* Contenido de las pestañas */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
          <div>
            <LeaderBoard/>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
            <h2>Contenido de la Pestaña 2</h2>
            <p>Este es el contenido de la segunda pestaña.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div>
            <h2>Contenido de la Pestaña 3</h2>
            <p>Este es el contenido de la tercera pestaña.</p>
          </div>
        )}
        {activeTab === 'tab4' && (
            <div></div>
        )}
      </div>
    </div>
        </main>
    )
}