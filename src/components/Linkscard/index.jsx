import React from "react";

const index = (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" src={props.foto} alt={props.descricao} />
      <div className="card-body">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        <a
          src={props.site}
          className="btn btn-dark"
          href={props.site}
          role="button"
          rel="noreferrer"
          target="_blank"
        >
          Mais detalhes
        </a>
      </div>
    </div>
  );
};

export default index;
