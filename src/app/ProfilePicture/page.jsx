"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";
import Foto from "../../../assets/perfil.png";

export default function ProfilePicture() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    registration: "",
    course: "",
    yearOfEntry: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="container-border">
      <div className={styles.page}>
        <div className={styles.rightArea}>
          <Title title="ESTAMOS QUASE LA" />
          <Input
            placeholder="NOME DE USUARIO"
            value={formData.username}
            onChange={(value) => handleInputChange("username", value)}
          />
          <Input
            placeholder="NOME COMPLETO"
            value={formData.fullName}
            onChange={(value) => handleInputChange("fullName", value)}
          />
          <Input
            placeholder="MATRICULA"
            value={formData.registration}
            onChange={(value) => handleInputChange("registration", value)}
          />
          <Input
            placeholder="SELECIONAR O CURSO"
            value={formData.course}
            onChange={(value) => handleInputChange("course", value)}
          />
          <Input
            placeholder="ANO DE ENTRADA"
            value={formData.yearOfEntry}
            onChange={(value) => handleInputChange("yearOfEntry", value)}
          />
        </div>

        <VerticalLine />

        <div className={styles.leftArea}>
          <Title title="SELECIONE SUA FOTO DE PERFIL" />
          <Image
            className={styles.profileImage}
            src={Foto}
            alt="Logo"
            crossOrigin="anonymous"
          />

          <SubLink subtitle="PULAR ETAPA" />

          <DefaultButton children="Prosseguir" />
        </div>
      </div>
    </div>
  );
}
