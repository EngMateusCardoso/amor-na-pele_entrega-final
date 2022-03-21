import React from "react";
import Banner from "../../Components/Banner/Banner"
import CardVertical from "../../Components/CardVertical/CardVertical";
import Parceiro from "../../assets/img/logotipo.png"

export default () => {
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
}
