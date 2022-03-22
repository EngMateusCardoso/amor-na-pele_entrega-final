import Logo from "../../assets/img/logo_menu.png";

const index = (props) => {
  return (
    <footer id="footer">
      <div className="row">
        <div className="col">
          <img src={Logo} height="80" alt="logotipo" />
        </div>
        <div className="col">
          <p>contato@amornapele.com | (21) 9 9876-5432</p>
          <p>©2021 ONG Amor na Pele. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default index;