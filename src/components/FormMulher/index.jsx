import React from "react";

export default () => {
  return (
    <>
      <div className="row">
        <div className="collapse" id="collapseFormMulher">
          <div className="card mb-4 shadow-sm">
            <h2 className="titleForm">Cadastro Mulher</h2>
            <form className="cardForm" action="confirmarPessoa.html">
              <div className="form-group">
                <label for="nomeMulher">Nome completo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeMulher"
                  placeholder="Nome"
                />
              </div>
              <div className="form-group">
                <label for="dataNascimento">Data de nascimento:</label>
                <input type="date" class="form-control" id="dataNascimento" />
              </div>
              <div className="form-group">
                <label for="numeroTelefoneMulher">Telefone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="numeroTelefoneMulher"
                  placeholder="Telefone"
                />
              </div>
              <div className="form-group">
                <label for="emailMulher">Endereço de e-mail:</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailMulher"
                  placeholder="email@exemplo.com"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
