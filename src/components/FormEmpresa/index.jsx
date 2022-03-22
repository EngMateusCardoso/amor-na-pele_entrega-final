import React from "react";

export default () => {
  return (
    <>
      <h2 className="titleForm">Cadastro Empresa</h2>
      <form className="cardForm" action="confirmarEmpresa.html">
        <div className="form-group">
          <label for="nomeParaContatoEmpresa">Nome do contato:</label>
          <input
            type="text"
            className="form-control"
            id="nomeParaContatoEmpresa"
            placeholder="Nome"
          />
        </div>
        <div className="form-group">
          <label for="Cnpj">CNPJ:</label>
          <input
            type="text"
            className="form-control"
            id="Cnpj"
            placeholder="CNPJ"
          />
        </div>
        <div className="form-group">
          <label for="RazaoSocial">Razão Social:</label>
          <input
            type="text"
            className="form-control"
            id="RazaoSocial"
            placeholder="Razão social"
          />
        </div>
        <div className="form-group">
          <label for="NumeroTelefoneEmpresa">Telefone:</label>
          <input
            type="tel"
            className="form-control"
            id="NumeroTelefoneEmpresa"
            placeholder="Telefone"
          />
        </div>
        <div className="form-group">
          <label for="emailEmpresa">Endereço de e-mail:</label>
          <input
            type="email"
            className="form-control"
            id="emailEmpresa"
            placeholder="email@exemplo.com"
          />
        </div>
        <div className="form-group">
          <label for="estado">Estado:</label>
          <input
            type="text"
            className="form-control"
            id="estado"
            placeholder="Estado"
          />
        </div>
        <div className="form-group">
          <label for="cidade">Cidade:</label>
          <input
            type="text"
            className="form-control"
            id="cidade"
            placeholder="Cidade"
          />
        </div>
        <div className="form-group">
          <label for="endereco">Endereço:</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            placeholder="Endereço"
          />
        </div>
        <div className="form-group">
          <label for="descricaoNegocio">Especialidade do seu negócio:</label>
          <input
            type="text"
            className="form-control"
            id="descricaoNegocio"
            placeholder="Informe a especialidade do serviço a ser oferecido"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Cadastrar
        </button>
      </form>
    </>
  );
};
