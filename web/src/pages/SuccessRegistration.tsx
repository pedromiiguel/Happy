import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/success-registration.css";


function SuccessRegistration() {
  return (
    <div id="page-success">
      <div className="container-wrapper">
        <main>
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>
          <Link to="/app" className="go-map">
              Voltar para home
          </Link>
        </main>
      </div>
    </div>
  );
}

export default SuccessRegistration;
