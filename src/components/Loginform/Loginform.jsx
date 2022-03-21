import React from "react";


export default () => {
    return(
        
            <section>
              {/*Button trigger modal*/}
              <button
                id="btnmodal"
                type="button"
                class="btn text-white"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                Login
              </button>

              {/*Modal*/}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"/>

                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="staticBackdropLabel">
                        Login
                      </h3>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="btn-modal">
                    </button>
                    </div>

                    {/*Área do Form Login*/}
                    <div class="modal-body">
                      <div class="row">
                        <div class="card mb-4" id="formLogin">
                          <form class="cardForm" action="index.html">
                            <div class="form-group">
                              <label for="inputLogin">Login:</label>
                              <input
                                type="email"
                                class="form-control"
                                id="inputLogin"
                                placeholder="Digite seu e-mail"/>
                            </div>
                            <div class="form-group">
                              <label for="inputSenha">Senha:</label>
                              <input
                                type="password"
                                class="form-control"
                                id="inputSenha"
                                placeholder="Digite sua senha"/>
                            </div>

                            {/*Botão Entrar*/}
                            <button class="btn btn-dark" type="submit">
                              Entrar
                            </button>
                          </form>

                          {/*Checkbox*/}
                          <div class="form-group" id="checkLogin">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"/>
                            <label class="form-check-label" for="form1Example3">
                              Lembrar minha senha
                            </label>
                          </div>
                        </div>
                      </div>
                      {/*Área do Form Login*/}
                    </div>
                  </div>
                </div>
            </section>
            
    )
}