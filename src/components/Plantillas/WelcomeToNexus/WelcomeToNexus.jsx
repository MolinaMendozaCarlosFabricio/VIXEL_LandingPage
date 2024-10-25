import React from "react";
import './WelcomeToNexus.css'
import RegistrerButton from "../../Atoms/RegistrerButton/RegistrerButton";

export default function WelcomeToNexus (){
    return(
    <section class="hero" id="hero">
        <div class="container">

          <p class="hero-subtitle">Bienvenidos a</p>

          <h1 class="hero-title">VIXEL (Aquí debería ir el logo)</h1>

          <div class="btn-group">

            <RegistrerButton/>
            <button class="btn btn-link">Torneos</button>

          </div>

        </div>
    </section>
    );
}