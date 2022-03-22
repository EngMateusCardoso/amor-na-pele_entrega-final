import React from "react";

const index = (props) => {
  return (
    <section className="container px-4 py-5 mt-2" id="icon-grid">
      <h2 className="pb-2 border-bottom align-items-center">
        Números Importantes
      </h2>
      <div className="row g-4 py-5">
        <div className="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
          <div>
            <p>Acolhimentos</p>
            <h4 className="fw-bold mb-0">32</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
          <div>
            <p>Tratamentos Psicológicos</p>
            <h4 className="fw-bold mb-0">22</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
          <div>
            <p>Tratamentos Estéticos</p>
            <h4 className="fw-bold mb-0">14</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
          <div>
            <p>Cirurgias</p>
            <h4 className="fw-bold mb-0">8</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;