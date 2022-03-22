import React from "react";
import cardcadastropessoa from "../../assets/img/cardcadastropessoa.jpg";
import cardcadastroempresa from "../../assets/img/cardcadastroempresa.jpg";
import ModalLink from "../../components/FormMulher";

export default () => {
  return (
    <section className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {/*Primeiro Card*/}
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src={cardcadastropessoa}
                alt="Card Cadastrar Mulher"
              />

              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Cadastrar Mulher</p>
                <a
                  className="btn btn-dark"
                  data-bs-toggle="collapse"
                  href="#collapseFormMulher"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <ModalLink>Cadastrar</ModalLink>
                </a>
              </div>
            </div>
          </div>
          {/*Primeiro Card*/}

          {/*Segundo Card*/}
          <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src={cardcadastroempresa}
                alt="Card Cadastrar Empresa"
              />

              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Cadastrar Empresa</p>
                <a
                  className="btn btn-dark"
                  data-bs-toggle="collapse"
                  href="#collapseFormEmpresa"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseEmpresa"
                >
                  Cadastrar
                </a>
              </div>
            </div>
          </div>
          {/*Segundo Card*/}
        </div>
      </div>
    </section>
  );
};
