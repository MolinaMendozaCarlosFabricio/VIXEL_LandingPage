import React from "react";
import './FooterPage.css';
import { faTwitch, faDiscord, faXbox, faYoutube } from "@fortawesome/free-brands-svg-icons";
import FooterMenuLink from "../../Atoms/FooterMenuLink/FooterMenuLink"
import FooterSocialLink from "../../Atoms/FooterSocialLink/FooterSocialLink";
import QuickLinkItem from "../../Atoms/QuickLinkItem/QuickLinkItem";
import LogoPage from "../../Atoms/LogoPage/LogoPage";
import SearchButton from "../../Atoms/SearchButton/SearchButton";
import FooterBottomImg from "../../../img/footer-bottom-img.png"

export default function FooterPage () {
    return(
        <footer>

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand-wrapper">

          <LogoPage/>

          <div class="footer-menu-wrapper">

            <ul class="footer-menu-list">

                <FooterMenuLink hreferencia={"#hero"} aPartOfThePage={"Home"}/>
                <FooterMenuLink hreferencia={"#about"} aPartOfThePage={"About"}/>
                <FooterMenuLink hreferencia={"#tournament"} aPartOfThePage={"Tournament"}/>
                <FooterMenuLink hreferencia={"#team"} aPartOfThePage={"Team"}/>
                <FooterMenuLink hreferencia={"#contact"} aPartOfThePage={"Contact"}/>

            </ul>

            <div class="footer-input-wrapper">
                <input type="text" name="message" required placeholder="Find Here Now" class="footer-input"/>
                <SearchButton/>
            </div>

          </div>

        </div>

        <div class="footer-quicklinks">

          <ul class="quicklink-list">

            <QuickLinkItem hreferencia={"#"} pageToLink={"Faq"}/>
            <QuickLinkItem hreferencia={"#"} pageToLink={"Help center"}/>
            <QuickLinkItem hreferencia={"#"} pageToLink={"Terms of use"}/>
            <QuickLinkItem hreferencia={"#"} pageToLink={"Privacy"}/> 
            
          </ul>

          <ul class="footer-social-list">

            <FooterSocialLink logoSocialLink={faDiscord}/>
            <FooterSocialLink logoSocialLink={faTwitch}/>
            <FooterSocialLink logoSocialLink={faXbox}/>
            <FooterSocialLink logoSocialLink={faYoutube}/>

          </ul>

        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          Copyright &copy; 2024 <a href="#">VIXEL</a>. all rights reserved
        </p>

        <figure class="footer-bottom-img">
          <img src={FooterBottomImg} alt="Online payment companies logo"/>
        </figure>
      </div>
    </div>

    </footer>
    );
}