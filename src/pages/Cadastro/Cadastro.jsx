import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Newsletter from "../../Components/Newsletter/Newsletter";
import cardcadastropessoa from "../../assets/img/cardcadastropessoa.jpg";
import cardcadastroempresa from "../../assets/img/cardcadastroempresa.jpg";
import "./Cadastro.css";

export default () => {
    return (
        <Header />,

        
        <section class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    {/*Primeiro Card*/}
                    <div class="col-md-6">
                        <div class="card mb-4 shadow-sm">
                            <img
                                class="card-img-top"
                                src={cardcadastropessoa}
                                alt="Card Cadastrar Mulher"/>

                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">Cadastrar Mulher</p>
                                <a
                                    class="btn btn-dark"
                                    data-bs-toggle="collapse"
                                    href="#collapseFormMulher"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample">Cadastrar</a>
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
                                alt="Card Cadastrar Empresa"/>

                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">Cadastrar Empresa</p>
                                <a
                                    class="btn btn-dark"
                                    data-bs-toggle="collapse"
                                    href="#collapseFormEmpresa"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseEmpresa">Cadastrar</a>
                            </div>
                        </div>
                    </div>
                    {/*Segundo Card*/}
                </div>

                {/*Formulário Mulher*/}
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
                                        placeholder="Nome"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputNascimento">Data de nascimento:</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="inputNascimento"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputTelefone">Telefone:</label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="inputTelefone"
                                        placeholder="Telefone"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Endereço de e-mail:</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail"
                                        placeholder="email@exemplo.com"/>
                                </div>
                                <button type="submit" class="btn btn-dark">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/*Formulário Mulher*/}

                {/* Formulário  Empresa */}
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
                                        placeholder="Nome"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputCNPJ">CNPJ:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputCNPJ"
                                        placeholder="CNPJ"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputRazaoSocial">Razão Social:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputRazaoSocial"
                                        placeholder="Razão social"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputTelefone">Telefone:</label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="inputTelefone"
                                        placeholder="Telefone"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Endereço de e-mail:</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail"
                                        placeholder="email@exemplo.com"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEstado">Estado:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEstado"
                                        placeholder="Estado"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputCidade">Cidade:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputCidade"
                                        placeholder="Cidade"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEndereco">Endereço:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEndereco"
                                        placeholder="Endereço"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEspecialidade"
                                    >Especialidade do seu negócio:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputEspecialidade"
                                        placeholder="Informe a especialidade do serviço a ser oferecido"/>
                                </div>
                                <button type="submit" class="btn btn-dark">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Formulário  Empresa */}
            </div>
        </section>

    );
}