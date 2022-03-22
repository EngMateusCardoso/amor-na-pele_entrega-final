import React from "react";

import Linkscard from "../../components/Linkscard";

import emboasmaos from "../../assets/img/emboasmaos.png";
import socialcare from "../../assets/img/socialcare.png";
import falamulher from "../../assets/img/falamulher.png";
import amigasdopeito from "../../assets/img/amigasdopeito.png";
import { Col, Container, Row } from "reactstrap";

const index = (props) => {
  return (
    <section className="cardsLinks">
      <Container>
        <Row>
          <Col>
            <Linkscard
              foto={emboasmaos}
              titulo={"Em Boas Mãos"}
              descricao="ONG Em Boas Mãos"
              texto="Buscamos através de um trabalho criterioso e avaliado caso a
                        caso, devolver a autoestima perdida ao longo da vida, e
                        assim transformar o destino e as oportunidades de milhares
                        de pessoas."
              site="https://emboasmaos.org/"
            ></Linkscard>
          </Col>
          <Col>
            <Linkscard
              foto={socialcare}
              titulo="Social Care"
              descricao="Social Care"
              texto="O Projeto da ONG SOCIAL CARE é oferecer o acesso as pessoas menos favorecidas e que, no entanto, possuem as mesmas necessidades e desejos de outras socialmente mais privilegiadas."
              site="https://www.socialcare.com.br/#firstPage"
            ></Linkscard>
          </Col>
        </Row>
        <Row>
          <Col>
            <Linkscard
              foto={falamulher}
              titulo="Fala Mulher"
              descricao="Fala Mulher"
              texto="Empoderando mulheres e fortalecendo famílias. Somos uma Organização sem fins lucrativos, que atua no enfrentamento à violência doméstica contra a mulher."
              site="https://www.falamulher.ong.br/"
            ></Linkscard>
          </Col>
          <Col>
            <Linkscard
              foto={amigasdopeito}
              titulo="Amigas do Peito"
              descricao="Amigas do Peito"
              texto="Surgida do sonho de Márcia Brasil, a ONG oferece gratuitamente a pigmentação de redesenho em Aréolas Mamárias, buscando resgatar a autoestima de mulheres que passaram por mastectomia."
              site="https://amigasdopeitors.com.br/"
            ></Linkscard>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default index;