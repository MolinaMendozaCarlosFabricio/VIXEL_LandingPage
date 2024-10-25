import './FooterPage.css';
import FooterMenuLink from "../../Atoms/FooterMenuLink/FooterMenuLink"
import LogoPage from "../../Atoms/LogoPage/LogoPage";
import SearchButton from "../../Atoms/SearchButton/SearchButton";
import FooterBottomImg from "../../../img/Another-vara-baner.png"

export default function FooterPage () {
    return(
        <footer>

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand-wrapper">

          <div className="logo-footer-content">
            <LogoPage/>
          </div>
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