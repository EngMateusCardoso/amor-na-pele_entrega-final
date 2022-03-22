import React from "react";

export default () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="content">
              <h2>Receba as nossas novidades!</h2>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="emailNewsletter"
                  placeholder="Informe o seu endereço de e-mail"
                />
                <a href="#" className="btn btn-dark">
                  Inscreva-se agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
