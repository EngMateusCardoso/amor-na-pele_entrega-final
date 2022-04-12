import React from "react";

import Linkscard from "../../components/Linkscard";

import emboasmaos from "../../assets/img/emboasmaos.png";
import socialcare from "../../assets/img/socialcare.png";
import falamulher from "../../assets/img/falamulher.png";
import amigasdopeito from "../../assets/img/amigasdopeito.png";
import { CardDeck, Col, Container, Row } from "reactstrap";

const index = (props) => {
  return (
    <CardDeck className="cardsLinks">
      <Container>
        <Row>
          <Col>
            <Linkscard
              foto={emboasmaos}
              descricao="ONG Em Boas Mãos"
              titulo="Em Boas Mãos"
              texto="A ONG EM BOAS MÃOS promove o acesso às pessoas que se sentem invalidadas devido à condição física, realizando acesso à cirurgias reparadoras, procedimentos reconstrutores e intervenção multidisciplinar."
              site="https://emboasmaos.org/"
            ></Linkscard>
          </Col>
          <Col>
            <Linkscard
              foto={amigasdopeito}
              titulo="Amigas do Peito"
              descricao="Amigas do Peito"
              texto="A ONG AMIGAS DO PEITO surgiu do sonho de Márcia Brasil, e oferece gratuitamente a pigmentação de redesenho em Aréolas Mamárias, buscando assim resgatar a autoestima de mulheres que passaram por mastectomia."
              site="https://amigasdopeitors.com.br/"
            ></Linkscard>
          </Col>
        </Row>
        <Row>
          <Col>
            <Linkscard
              foto={socialcare}
              titulo="Social Care"
              descricao="Logotipo da ONG Social Care"
              texto="O Projeto da ONG SOCIAL CARE busca oferecer o acesso das pessoas menos favorecidas aos procedimentos cirúrgicos, minimizando seus custos, de maneira a tornar cada dia mais acessível a maioria da população."
              site="https://www.socialcare.com.br/#firstPage"
            ></Linkscard>
          </Col>
          <Col>
            <Linkscard
              foto={falamulher}
              titulo="Fala Mulher"
              descricao="Logotipo da Associação Fala Mulher"
              texto="A ASSOCIAÇÃO FALA MULHER é uma Organização sem fins lucrativos, que tem como proposta atuar no enfrentamento à violência doméstica contra a mulher. Seu objetivo é empoderar mulheres, buscando assim fortalecer as famílias."
              site="https://www.falamulher.ong.br/"
            ></Linkscard>
          </Col>
        </Row>
      </Container>
    </CardDeck>
  );
};

export default index;
