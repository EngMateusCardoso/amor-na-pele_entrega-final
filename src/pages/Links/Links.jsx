import React from "react";

import emboasmaos from "../../assets/img/emboasmaos.png";
import socialcare from "../../assets/img/socialcare.png";
import falamulher from "../../assets/img/falamulher.png";
import amigasdopeito from "../../assets/img/amigasdopeito.png";
import Linkscard from "../../Components/Linkscard/Linkscard";

export default () => {
    return (
        <section className="cardsLinks">
            <Linkscard
                foto={emboasmaos} titulo="Em Boas Mãos"  descricao="ONG Em Boas Mãos"
                texto="Buscamos através de um trabalho criterioso e avaliado caso a
                caso, devolver a autoestima perdida ao longo da vida, e
                assim transformar o destino e as oportunidades de milhares
                de pessoas."
                > 
            </Linkscard>
        </section>
    );
}