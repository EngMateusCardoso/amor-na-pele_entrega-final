import React from "react";
import logotipo from "../../assets/img/logotipo.png";

const index = (props) => {
  return (
    <section id="institucional">
      <div className="col-md-12">
        <div className="card h-100 g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-auto d-none d-lg-block">
            <img
              src={logotipo}
              className="img-fluid rounded-start"
              alt="logotipo Amor na Pele"
              width="200"
            />
          </div>
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="d-inline-block mb-2">Quem somos</h3>
            <p>
              Somos um grupo de estudantes de tecnologia que acredita no poder
              da conexão entre histórias e pessoas. Também acreditamos que a
              autoestima está conectada com saúde, bem-estar e qualidade de
              vida. Foi com isso em mente, que nos unimos para proporcionar o
              elo entre mulheres em busca de uma solução e profissionais e/ou
              ONGs que oferecem um atendimento qualificado e humanizado.
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3>Missão</h3>
              <p>
                Nossa missão é alcançar mulheres que necessitem e, através de
                nossos parceiros, ajudar a resgatar a autoestima e confiança de
                mulheres que foram submetidas à algum tratamento, e vítimas de
                violência que carregam marcas e cicatrizes na pele.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3>Visão</h3>
              <p>
                Proporcionar transformações positivas na autoestima de cada
                mulher atendida, de forma que sintam-se seguras e confiantes
                para se desenvolver em todos os âmbitos de vida.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3>Valores</h3>
              <p>
                Os valores que defendemos são o acolhimento, a segurança, o
                bem-estar e a autoestima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
