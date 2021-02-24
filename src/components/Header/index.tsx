import React  from "react";
import { ChamarDadosTs } from '../../types/ChamarTs'
import Img from "../../img/perfil-2.png";


function Header(props:ChamarDadosTs) {
  const { nome, ocupacao, resumo, perfilProfissional } = props.resposta;

  return (
    <>
      <div className="perfil">
        <img src= {Img}  alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>{perfilProfissional}</p>
      </div>
    </>
  );
}

export default Header;
