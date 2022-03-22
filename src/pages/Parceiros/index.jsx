import React from "react";
import Banner from "../../components/Banner";
import CardVertical from "../../components/CardVertical";
import Parceiro from "../../assets/img/logotipo.png";

const index = (props) => {
  return (
    <>
      <Banner></Banner>
      <section className="cardParceiros">
        <div className="card-ind-parc">
          <CardVertical imagem={Parceiro}></CardVertical>
          <CardVertical imagem={Parceiro}></CardVertical>
          <CardVertical imagem={Parceiro}></CardVertical>
        </div>
      </section>
    </>
  );
};

export default index;