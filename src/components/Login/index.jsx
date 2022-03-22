import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalLink = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={toggle}>Login</Button>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody style={{ height: "40vh" }}>
          <iframe
            style={{
              height: "100%",
              width: "100%",
              borderStyle: "none",
              borderRadius: "10px",
            }}
            src=" "
          />
          <div class="row">
            <div class="card mb-4" id="formLogin">
              <form class="cardForm" action="index.html">
                <div class="form-group">
                  <label for="inputLogin">Login:</label>
                  <input
                    type="email"
                    class="form-control"
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
                <button class="btn btn-dark" type="submit">
                  Entrar
                </button>
              </form>
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
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            OK{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalLink;
