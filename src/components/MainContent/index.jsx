import React from "react";

import "./styles.css";
import Card from "../Card";

import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

import HorizontaLine from "../HorizontalLine";

export default function MainContent() {
  return (
    <div className="main-content">
      {/* Barra de navegação superior */}
      <div className="top-bar">
        <div className="search-container">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="PESQUISAR DÚVIDAS..."
            className="search-input"
          />
        </div>
        <div className="top-bar-buttons">
          <button>Responder</button>
          <button>Meus Curtidas</button>
          <button>Recentes</button>
        </div>
        <div className="user-icon">
          <FaUserCircle size={50} color="#024284" />
        </div>
      </div>

      <HorizontaLine height="2px" color="#024284" />

      <div className="cards-container">
        <Card
          author="Giovana Araújo 🎓"
          title="QUANTIDADE DE MEMBROS DO TRABALHO"
          description="O seminário pode ser feito com quantas pessoas no equipe?"
          date="17/04/2024"
          comments={7}
        />
        <Card
          author="Jéssica Nogueira"
          title="FREQUÊNCIA ESCOMP"
          description="Os participantes têm livre entrada na 10°. Escomp estará..."
          date="17/04/2024"
          comments={7}
        />
        <Card
          author="Pedro Henrique 🏆"
          title="NÃO HAVERÁ MONITORIA NO DIA 20/05"
          description="Genteho uma condsdsdssdsulta, não posso comparecer a..."
          date="17/04/2024"
          comments={7}
        />
        <Card
          author="Pedro Henrique"
          title=""
          description="Gente, tenho uma consulta, não posso comparecer a..."
          date="17/04/2024"
          comments={7}
        />

        <Card
          author="Pedro Henrique"
          title=""
          description="Gente, tenho uma consulta, não posso comparecer a..."
          date="17/04/2024"
          comments={7}
        />
      </div>
    </div>
  );
}
