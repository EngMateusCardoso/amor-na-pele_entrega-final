import React from "react";
import bannerprincipal from "../../assets/img/bannerprincipal.png";
import bannerprincipal2 from "../../assets/img/bannerprincipal2.png";

const index = (props) => {
  return (
    <section>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bannerprincipal}
              className="d-block w-100"
              alt="imagem de três mulheres com flores"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>ONG Amor na Pele</h1>
              <h4>
                Resgatando a autoestima e a alegria perdida, e transformando a
                vida e o destino de milhares de mulheres.
              </h4>
              <p>
                <input className="btn btn-dark" value="Cadastre-se!"/>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bannerprincipal2}
              className="d-block w-100"
              alt="imagem de uma mulher com flor"
            />
            <div className="carousel-caption text-end">
              <h1>ONG Amor na Pele</h1>
              <h4>
                Resgatando a autoestima e a alegria perdida, e transformando a
                vida e o destino de milhares de mulheres.
              </h4>
              <p>
              <input className="btn btn-dark" value="Cadastre-se!"/>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
      </div>
    </section>
  );
};

export default index;