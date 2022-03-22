import React from "react";

export default (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" src={props.foto} alt={props.descricao} />
      <div className="card-body">
        <h2 src={props.titulo}></h2>
        <p src={props.texto}></p>
        <a
          src={props.site}
          className="btn btn-dark"
          href={props.site}
          role="button"
          target="_blank"
        >
          Mais detalhes
        </a>
      </div>
    </div>
  );
};
