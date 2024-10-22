import React from "react";
import './WelcomeToNexus.css'
import RegistrerButton from "../../Atoms/RegistrerButton/RegistrerButton";

export default function WelcomeToNexus (){
    return(
    <section class="hero" id="hero">
        <div class="container">

          <p class="hero-subtitle">La Temporada 1</p>

          <h1 class="h1 hero-title">Nexus</h1>

          <div class="btn-group">

            <RegistrerButton/>
            <button class="btn btn-link">Torneos</button>

          </div>

        </div>
    </section>
    );
}