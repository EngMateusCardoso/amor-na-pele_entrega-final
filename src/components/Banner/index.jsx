import React from "react";
import Parceiros from "../../assets/img/parceiros.png";

const index = (props) => {
  return (
    <div className="px-1 pt-1 my-1 text-center">
      <div className="card text-white">
        <img
          src={Parceiros}
          className="card-img"
          alt="imagem de mãos sobrepostas"
        />
        <div className="card-img-overlay">
          <h1 className="display-4 fw-bold">Nossos Parceiros</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Venha conosco nesta jornada em busca da felicidade!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;