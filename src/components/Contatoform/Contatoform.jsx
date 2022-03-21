import React from "react";
import logotipo from "../../assets/img/logotipo.png";


export default () => {
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
                    <form className="cardForm">
                        <div className="form-group">
                            <label for="inputNome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                placeholder="Nome" />
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Endereço de e-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="email@exemplo.com" />
                        </div>
                        <div className="form-group">
                            <label for="textAreaMensagem">Mensagem</label>
                            <textarea
                                className="form-control"
                                id="textAreaMensagem"
                                placeholder="Mensagem..."
                                rows="3">
                            </textarea>
                        </div>
                        <a href="#" className="btn btn-dark">Enviar</a>
                    </form>
                </div>
            </div>
        </section>
    )
}