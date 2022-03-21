import React from "react";
import logotipo from "../../assets/img/logotipo.png";


export default () => {
    return (

        <section class="container bg-tranparent sm-shadow">
            {/*Formulário de contato*/}
            <h1 class="titleForm">Contato</h1>
            <div class="row">
                <div class="col-md-4 order-md-1">
                    <div id="img-form">
                        <img src={logotipo} alt="logotipo Amor na pele" />
                    </div>
                </div>
                <div class="col-md-8 order-md-2">
                    <form class="cardForm">
                        <div class="form-group">
                            <label for="inputNome">Nome</label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputNome"
                                placeholder="Nome" />
                        </div>
                        <div class="form-group">
                            <label for="inputEmail">Endereço de e-mail</label>
                            <input
                                type="email"
                                class="form-control"
                                id="inputEmail"
                                placeholder="email@exemplo.com" />
                        </div>
                        <div class="form-group">
                            <label for="textAreaMensagem">Mensagem</label>
                            <textarea
                                class="form-control"
                                id="textAreaMensagem"
                                placeholder="Mensagem..."
                                rows="3">
                            </textarea>
                        </div>
                        <a href="#" class="btn btn-dark">Enviar</a>
                    </form>
                </div>
            </div>
        </section>
    )
}