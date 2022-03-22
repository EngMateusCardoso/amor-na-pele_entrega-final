import React from "react";
import logotipo from "../../assets/img/logotipo.png";
import { useRef } from "react";

import api from "../../api"

const Contatoform = (props) => {

    const nomeContato = useRef();
    const msg = useRef();
    const emailContato = useRef();

    function enviarContato(event) {
        event.preventDefault()
        api.post('/CadastroContato', {
            nomeContato: nomeContato.current.value,
            msg: msg.current.value,
            emailContato: emailContato.current.value,
        }).then(res => window.location.reload())
        .catch(err => console.log(err))
      }

    return (
        <section className="container bg-tranparent sm-shadow">
            {/*Formulário de contato*/}
            <h1 className="titleForm">Contato</h1>
            <div className="row">
                <div className="col-md-4 order-md-1">
                    <div id="img-form">
                        <img src={logotipo} alt="logotipo Amor na pele" />
                    </div>
                </div>
                <div className="col-md-8 order-md-2">
                    <form className="cardForm" onSubmit={enviarContato}>
                        <div className="form-group">
                            <label for="inputNome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                placeholder="Nome"
                                ref={nomeContato} />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Endereço de e-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="email@exemplo.com"
                                ref={emailContato} />
                        </div>
                        <div className="form-group">
                            <label for="textAreaMensagem">Mensagem</label>
                            <textarea
                                className="form-control"
                                id="textAreaMensagem"
                                placeholder="Mensagem..."
                                rows="3"
                                ref={msg}>
                            </textarea>
                        </div>
                        <input type="submit" className="btn btn-dark" value="Enviar"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contatoform;