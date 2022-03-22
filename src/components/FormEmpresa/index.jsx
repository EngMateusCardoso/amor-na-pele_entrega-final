import React from "react";
import { useRef } from "react";

import api from "../../api"

const FormEmpresa = (props) => {

  const nomeParaContatoEmpresa = useRef();
  const cnpj = useRef();
  const razaoSocial = useRef();
  const numeroDeTelefoneEmpresa = useRef();
  const emailEmpresa = useRef();
  const estado = useRef();
  const cidade = useRef();
  const endereco = useRef();
  const descricaoNegocio = useRef();

  function enviarEmpresa(event) {
    event.preventDefault()
    api.post('/CadastroEmpresa', {
      nomeParaContatoEmpresa: nomeParaContatoEmpresa.current.value,
      cnpj: cnpj.current.value,
      razaoSocial: razaoSocial.current.value,
      numeroDeTelefoneEmpresa: numeroDeTelefoneEmpresa.current.value,
      emailEmpresa: emailEmpresa.current.value,
      estado: estado.current.value,
      cidade: cidade.current.value,
      endereco: endereco.current.value,
      descricaoNegocio: descricaoNegocio.current.value,
    }).then(res => window.location.reload())
    .catch(err => console.log(err))
  }
  return (
    <>
      <h2 className="titleForm">Cadastro Empresa</h2>
      <form className="cardForm" onSubmit={enviarEmpresa}>
        <div className="form-group">
          <label for="nomeParaContatoEmpresa">Nome do contato:</label>
          <input
            type="text"
            className="form-control"
            id="nomeParaContatoEmpresa"
            placeholder="Nome"
            ref={nomeParaContatoEmpresa}
          />
        </div>
        <div className="form-group">
          <label for="Cnpj">CNPJ:</label>
          <input
            type="text"
            className="form-control"
            id="Cnpj"
            placeholder="CNPJ"
            ref={cnpj}
          />
        </div>
        <div className="form-group">
          <label for="RazaoSocial">Razão Social:</label>
          <input
            type="text"
            className="form-control"
            id="RazaoSocial"
            placeholder="Razão social"
            ref={razaoSocial}
          />
        </div>
        <div className="form-group">
          <label for="NumeroTelefoneEmpresa">Telefone:</label>
          <input
            type="tel"
            className="form-control"
            id="NumeroTelefoneEmpresa"
            placeholder="Telefone"
            ref={numeroDeTelefoneEmpresa}
          />
        </div>
        <div className="form-group">
          <label for="emailEmpresa">Endereço de e-mail:</label>
          <input
            type="email"
            className="form-control"
            id="emailEmpresa"
            placeholder="email@exemplo.com"
            ref={emailEmpresa}
          />
        </div>
        <div className="form-group">
          <label for="estado">Estado:</label>
          <input
            type="text"
            className="form-control"
            id="estado"
            placeholder="Estado"
            ref={estado}
          />
        </div>
        <div className="form-group">
          <label for="cidade">Cidade:</label>
          <input
            type="text"
            className="form-control"
            id="cidade"
            placeholder="Cidade"
            ref={cidade}
          />
        </div>
        <div className="form-group">
          <label for="endereco">Endereço:</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            placeholder="Endereço"
            ref={endereco}
          />
        </div>
        <div className="form-group">
          <label for="descricaoNegocio">Especialidade do seu negócio:</label>
          <input
            type="text"
            className="form-control"
            id="descricaoNegocio"
            placeholder="Informe a especialidade do serviço a ser oferecido"
            ref={descricaoNegocio}
          />
        </div>
        <input type="submit" className="btn btn-dark" value="Cadastrar"/>
      </form>
    </>
  );
};

export default FormEmpresa;