import React from "react";

export default () => {
  return (
    <>
      <div class="row">
        <div class="collapse" id="collapseFormEmpresa">
          <div class="card mb-4 shadow-sm">
            <h2 class="titleForm">Cadastro Empresa</h2>
            <form class="cardForm" action="confirmarEmpresa.html">
              <div class="form-group">
                <label for="inputNome">Nome do contato:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNome"
                  placeholder="Nome"
                />
              </div>
              <div class="form-group">
                <label for="inputCNPJ">CNPJ:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCNPJ"
                  placeholder="CNPJ"
                />
              </div>
              <div class="form-group">
                <label for="inputRazaoSocial">Razão Social:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputRazaoSocial"
                  placeholder="Razão social"
                />
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
              <div class="form-group">
                <label for="inputEstado">Estado:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEstado"
                  placeholder="Estado"
                />
              </div>
              <div class="form-group">
                <label for="inputCidade">Cidade:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCidade"
                  placeholder="Cidade"
                />
              </div>
              <div class="form-group">
                <label for="inputEndereco">Endereço:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEndereco"
                  placeholder="Endereço"
                />
              </div>
              <div class="form-group">
                <label for="inputEspecialidade">
                  Especialidade do seu negócio:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEspecialidade"
                  placeholder="Informe a especialidade do serviço a ser oferecido"
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
