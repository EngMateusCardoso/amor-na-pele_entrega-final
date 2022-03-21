import React from "react";

export default (props) => {
    return (
        <section class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4 shadow-sm">
                            <img class="card-img-top" src={props.foto} alt={props.descricao} />
                            <div class="card-body">
                                <h2 src={props.titulo}></h2>
                                <p src={props.texto}></p>
                                <a src={props.site} class="btn btn-dark"
                                    href={props.site}
                                    role="button"
                                    target="_blank">Mais detalhes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}