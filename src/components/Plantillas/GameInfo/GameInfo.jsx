import React from "react";
import "./GameInfo.css";
import CardGame from "@/components/Moleculas/CardGame/CardGame";
import WhaleXpaceImg from "../../../img/WhaleXpace-caratula.jpg";
import CoinDrifters from "../../../img/CoinersDrifter-caratula.jpg";

export default function GameInfo (){

    const objExample = {
        srcImg : "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
        titleCard: "Card Heading",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.",
        link: "/home"
    }

    const WhaleXpaceInfo = {
        srcImg: WhaleXpaceImg,
        titleCard: "WhaleXPace",
        content: "WhaleXPace es un juego clicker, donde controlaremos a Phynix, una ballena que se lanza al espacio a explorar, evita los obstáculos, sobrevive las profundidades del espacio y consigue la gloria en este juego sencillo pero divertido.",
        link: "https://anabelenscript.github.io/WhaleXpace/"
    }

    const CoinDriftersInfo = {
        srcImg : CoinDrifters,
        titleCard: "Coin Drifters",
        content: "Domina las calles y carreteras en Coin drifter, donde tomarás el contro de un veloz auto, cruza los largos desiertos en este extraordinario juego de conducción en 2d, y vuélvete un maestro al volante.",
        link: "/home"
    }

    return(
        <main className="content-gamecards">
            <CardGame gameObj={WhaleXpaceInfo}/>
            <CardGame gameObj={CoinDriftersInfo}/>
            <CardGame gameObj={objExample}/>
        </main>
    );
}