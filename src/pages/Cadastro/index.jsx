import React from "react";
import cardcadastropessoa from "../../assets/img/cardcadastropessoa.jpg";
import cardcadastroempresa from "../../assets/img/cardcadastroempresa.jpg";

export default () => {
  return (
    <section class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          {/*Primeiro Card*/}
          <div class="col-md-6">
            <div class="card mb-4 shadow-sm">
              <img
                class="card-img-top"
                src={cardcadastropessoa}
                alt="Card Cadastrar Mulher"
              />

              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">Cadastrar Mulher</p>
                <a
                  class="btn btn-dark"
                  data-bs-toggle="collapse"
                  href="#collapseFormMulher"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Cadastrar
                </a>
              </div>
            </div>
          </div>
          {/*Primeiro Card*/}

          {/*Segundo Card*/}
          <div class="col-md-6">
            <div class="card mb-4 shadow-sm">
              <img
                class="card-img-top"
                src={cardcadastroempresa}
                alt="Card Cadastrar Empresa"
              />

              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">Cadastrar Empresa</p>
                <a
                  class="btn btn-dark"
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
