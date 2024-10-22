import React from "react";
import './About.css'
import ImgAbout from '../../../img/about-img.png'
import ImgCharacter1 from '../../../img/character-1.png'
import ImgCharacter2 from '../../../img/character-2.png'
import ImgCharacter3 from '../../../img/character-3.png'
import AboutButtom from "../../Atoms/AboutButtom/AboutButtom";

export default function About (){
    return(
        <section class="about" id="about">
          <div class="container">

            <figure class="about-banner">

              <img src={ImgAbout} alt="M shape" class="about-img"/>

              <img src={ImgCharacter1} alt="Game character" class="character character-1"/>

              <img src={ImgCharacter2} alt="Game character" class="character character-2"/>

              <img src={ImgCharacter3} alt="Game character" class="character character-3"/>

            </figure>

            <div class="about-content">

              <p class="about-subtitle">Encontrar miembro del equipo</p>

              <h2 class="about-title">Experiencia solo para jugadores <strong>oferta</strong> </h2>

              <p class="about-text">
                Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
                viverra felis nunc
                et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
              </p>

                <AboutButtom/>

            </div>

          </div>
        </section>
    );
}