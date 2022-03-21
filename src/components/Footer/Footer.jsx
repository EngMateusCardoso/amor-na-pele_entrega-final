import Logo from "../../assets/img/logo_menu.png";
import "./Footer.css";

export default () => {
  return (
    <footer id="footer">
      <div class="row">
        <div class="col">
          <img src={Logo} height="80" alt="logotipo" />
        </div>
        <div class="col">
          <p>contato@amornapele.com | (21) 9 9876-5432</p>
          <p>©2021 ONG Amor na Pele. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}