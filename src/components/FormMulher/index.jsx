import React from "react";

export default () => {
  return (
    <>
      <div class="row">
        <div class="collapse" id="collapseFormMulher">
          <div class="card mb-4 shadow-sm">
            <h2 class="titleForm">Cadastro Mulher</h2>
            <form class="cardForm" action="confirmarPessoa.html">
              <div class="form-group">
                <label for="inputNome">Nome completo:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNome"
                  placeholder="Nome"
                />
              </div>
              <div class="form-group">
                <label for="inputNascimento">Data de nascimento:</label>
                <input type="date" class="form-control" id="inputNascimento" />
              </div>
              <div class="form-group">
                <label for="inputTelefone">Telefone:</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputTelefone"
                  placeholder="Telefone"
                />
              </div>
              <div class="form-group">
                <label for="inputEmail">Endereço de e-mail:</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="email@exemplo.com"
                />
              </div>
              <button type="submit" class="btn btn-dark">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
