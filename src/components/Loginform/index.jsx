import React from "react";

export default () => {
  return (
    <section>
      {/*Button trigger modal*/}
      <button
        id="btnmodal"
        type="button"
        className="btn text-white"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Login
      </button>

      {/*Modal*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      />

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="staticBackdropLabel">
              Login
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-modal"
            ></button>
          </div>

          {/*Área do Form Login*/}
          <div className="modal-body">
            <div className="row">
              <div className="card mb-4" id="formLogin">
                <form className="cardForm" action="index.html">
                  <div className="form-group">
                    <label for="inputLogin">Login:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputLogin"
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputSenha">Senha:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputSenha"
                      placeholder="Digite sua senha"
                    />
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
                    id="form1Example3"
                  />
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
  );
};
