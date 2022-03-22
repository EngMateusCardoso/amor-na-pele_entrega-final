import React from "react";
import { useRef } from "react";

import api from "../../api"

const Newsletter = (props) => {

  const emailNewsletter = useRef();

  function enviarNewsletter(event) {
    event.preventDefault()
    api.post('/CadastroNewsletter', {
      emailNewsletter: emailNewsletter.current.value,
    }).then(res => window.location.reload())
    .catch(err => console.log(err))
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="content">
              <h2>Receba as nossas novidades!</h2>
              <form onSubmit={enviarNewsletter}>
                <div className="input-group">
                  <input
                    type="email"
                   className="form-control"
                    id="emailNewsletter"
                    placeholder="Informe o seu endereço de e-mail"
                    ref={emailNewsletter}
                  />
                  <input type="submit" className="btn btn-dark" value="Inscreva-se agora"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;