import React, { useState } from "react";
import "./App.css";
import { ChamarTs } from "./types/ChamarTs";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Aside from "./components/Aside";

function App() {
  const fakeAPI: ChamarTs = {
    nome: "Rafael G Yokoyama ",
    ocupacao: "FRONT END DEVELOPER | UI/UX Designer ",
    resumo: "  Amante da tecnologia e futuro desenvovedor front - end",
    perfilProfissional: "  Iniciei como Desenvolvedor Front End no final  2020 e venho me dedicando a conhecer cada vez mais esse mundo maravilhoso.Tenho experiência em HTML5, CSS3, JavaScript e venho estudando React com TypeScript e com JavaScript ",

    contatos: [
      {
        id: 1,
        tipo: "TELEFONE",
        contato: "(11) 98472-0604",
      },
      {
        id: 2,
        tipo: "EMAIL",
        contato: "rafaelgava921@gmail.com",
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: "Campinas Tech Talents",
        curso: "Trilha React - 2021",
      },
      {
        id: 2,
        instituicao: "USF-SP",
        curso: "Engenharia da  Computação  2019 - 2023 ",
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: "Freelancer front-end developer",
        periodo: "Setembro 2020 - atualmente",
        empresa: "  Fariah Braids",
        local: "Cabreúva - SP",
        conteudo:
          "Desenvolvimento de uma página  web  utilizando Html,CSS e bootstrap",
      },
      {
        id: 2,
        cargo: "XXXX",
        periodo: "xxxx - xxxx",
        empresa: "XX",
        local: "XXXXX",
        conteudo: "Em Desenvolvimento ",
      },
    ],
  };

  const [resposta] = useState(fakeAPI);

  return (
    <main>
      <Header resposta={resposta} />
      <Aside resposta={resposta} />
      <Experience resposta={resposta} />
    </main>
  );
}

export default App;
