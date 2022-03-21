import React from "react";

export default (props) => {
  return (
      <div className="card border-light shadow-sm h-md-250 mb-12">
        <div className="card-header">Nome do parceiro 1</div>
        <div className="row mb-12">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text1">
                Especialidade do profissional/empresa: <br />
                Endereço do parceiro: <br />
                Dados de contato: <br />
                Para mais informações, acesse o site abaixo:
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={props.imagem}
              className="img-fluid rounded-start"
              alt="logotipo do parceiro"
              width="150"
            />
          </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <a href="#" className="btn btn-outline-success bg-light">Acessar</a>
        </div>
      </div>
  );
};
