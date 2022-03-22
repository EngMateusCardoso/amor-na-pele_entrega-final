import React from "react";
import bannerprincipal from "../../assets/img/bannerprincipal.png";
import bannerprincipal2 from "../../assets/img/bannerprincipal2.png";

export default () => {
  return (
    <section>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={bannerprincipal}
              class="d-block w-100"
              alt="imagem mulheres com flores"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>ONG Amor na Pele</h1>
              <h4>
                Resgatando a autoestima e a alegria perdida, e transformando a
                vida e o destino de milhares de mulheres.
              </h4>
              <p>
                <a class="btn btn-dark" href="#">
                  Cadastre-se!
                </a>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={bannerprincipal2}
              class="d-block w-100"
              alt="imagem mulher com flor"
            />
            <div class="carousel-caption text-end">
              <h1>ONG Amor na Pele</h1>
              <h4>
                Resgatando a autoestima e a alegria perdida, e transformando a
                vida e o destino de milhares de mulheres.
              </h4>
              <p>
                <a class="btn btn-dark" href="#">
                  Cadastrar
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
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
