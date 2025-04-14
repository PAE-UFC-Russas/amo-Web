import React from "react";
import Image from "next/image";
import "./styles.css";

import Logo from "../../../assets/logoSadebar.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Image
          style={{ height: 150, width: 170 }}
          src={Logo}
          alt="Logo"
          crossOrigin="anonymous"
        />
      </div>
      <ul className="menu">
        <li className="menu-item active">ÉTICA PROFISSIONAL</li>
        <li className="menu-item">FÓRUM</li>
        <li className="menu-item">AGENDAMENTOS</li>
        <li className="menu-item">HORÁRIOS</li>
        <li className="menu-item">MONITORIAS</li>
      </ul>
    </div>
  );
}
