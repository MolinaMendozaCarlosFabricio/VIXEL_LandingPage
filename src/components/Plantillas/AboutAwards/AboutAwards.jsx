import React from "react";
import './AboutAwards.css';
import ImgPrize from '../../../img/prize-img.png';
import ImgWinner1 from '../../../img/winner-img-1.png';
import ImgWinner2 from '../../../img/winner-img-2.png'
import CardAward from "../../Moleculas/CardAward/CardAward";

export default function AboutAwards (){
    return(
        <section class="abaout" id="abaout">
          <div class="container">

            <div class="tournament-content">

              <p class="tournament-subtitle">Echa un vistazo a nuestra próximo</p>

              <h2 class="h3 tournament-title">¡Torneos de juegos!</h2>

              <p class="tournament-text">
                Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua.
              </p>

              <button class="btn btn-primary">Únete con nosotros</button>

            </div>

            <div class="tournament-prize">

              <h2 class="h3 tournament-prize-title">Bolsa de premios</h2>

              <data value="80000">$80,000</data>

              <figure>
                <img src={ImgPrize} alt="Prize image"/>
              </figure>

            </div>

            <div class="tournament-winners">

              <h2 class="h3 tournament-winners-title">Últimos ganadores</h2>

              <ul class="tournament-winners-list">
                <CardAward cardPhoto={ImgWinner1}/>
                <CardAward cardPhoto={ImgWinner2}/>
                
              </ul>

            </div>

          </div>
        </section>
    );
}