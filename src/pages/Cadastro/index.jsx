import React from "react";
import cardcadastropessoa from "../../assets/img/cardcadastropessoa.jpg";
import cardcadastroempresa from "../../assets/img/cardcadastroempresa.jpg";
import FormMulher from "../../components/FormMulher";
import FormEmpresa from "../../components/FormEmpresa";

import {
  Accordion,
  Collapse,
  Card,
  CardBody,
  CardHeader,
  ButtonToggle,
  CardGroup,
} from "reactstrap";

const Cadastro = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <section className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <Accordion defaultActiveKey="0">
            <CardGroup>
              {/*Primeiro Card*/}
              <Card className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="card-img-top"
                    src={cardcadastropessoa}
                    alt="Card Cadastrar Mulher"
                  />
                  <div className="card-body">
                    <CardHeader>
                      <p className="card-text">Cadastrar Mulher</p>
                      <ButtonToggle eventKey="0" onClick={toggle}>
                        Cadastrar
                      </ButtonToggle>
                    </CardHeader>
                    <Collapse eventKey="0" isOpen={isOpen}>
                      <CardBody>
                        <FormMulher />
                      </CardBody>
                    </Collapse>
                  </div>
                </div>
              </Card>
              {/*Primeiro Card*/}
              {/*Segundo Card*/}
              <Card className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <img
                    className="card-img-top"
                    src={cardcadastroempresa}
                    alt="Card Cadastrar Empresa"
                  />
                  <div className="card-body">
                    <CardHeader>
                      <p className="card-text">Cadastrar Empresa</p>
                      <ButtonToggle eventKey="1" onClick={toggle}>
                        Cadastrar
                      </ButtonToggle>
                    </CardHeader>
                    <Collapse eventKey="1" isOpen={isOpen}>
                      <CardBody>
                        <FormEmpresa />
                      </CardBody>
                    </Collapse>
                  </div>
                </div>
              </Card>
              {/*Segundo Card*/}
            </CardGroup>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;