import React from "react";
import { useRef } from "react";

import api from "../../api"

const FormMulher = (props) => {

  const nomeMulher = useRef();
  const dataNascimento = useRef();
  const numeroTelefoneMulher = useRef();
  const emailMulher = useRef();

  function enviarMulher(event) {
    event.preventDefault()
    api.post('/CadastroMulher', {
      nomeMulher: nomeMulher.current.value,
      dataNascimento: dataNascimento.current.value,
      numeroTelefoneMulher: numeroTelefoneMulher.current.value,
      emailMulher: emailMulher.current.value,
    }).then(res => window.location.reload())
    .catch(err => console.log(err))
  }

  return (
    <>
      <h2 class="titleForm">Cadastro Mulher</h2>
      <form class="cardForm" onSubmit={enviarMulher}>
        <div class="form-group">
          <label for="inputNome">Nome completo:</label>
          <input
            type="text"
            class="form-control"
            id="inputNome"
            placeholder="Nome"
            ref={nomeMulher}
          />
        </div>
        <div class="form-group">
          <label for="inputNascimento">Data de nascimento:</label>
          <input type="date" class="form-control" id="inputNascimento" ref={dataNascimento}/>
        </div>
        <div class="form-group">
          <label for="inputTelefone">Telefone:</label>
          <input
            type="tel"
            class="form-control"
            id="inputTelefone"
            placeholder="Telefone"
            ref={numeroTelefoneMulher}
          />
        </div>
        <div class="form-group">
          <label for="inputEmail">Endereço de e-mail:</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="email@exemplo.com"
            ref={emailMulher}
          />
        </div>
        <input type="submit" className="btn btn-dark" value="Cadastrar"/>
      </form>
    </>
  );
};

export default FormMulher;