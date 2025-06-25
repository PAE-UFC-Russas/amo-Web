"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import dynamicImport from "next/dynamic";

// Força renderização dinâmica - DESABILITA SSR COMPLETAMENTE
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Carregamento dinâmico dos componentes para evitar SSR
const Input = dynamicImport(() => import("@/components/input"), { ssr: false });
const VerticalLine = dynamicImport(() => import("@/components/verticalLine"), {
  ssr: false,
});
const Title = dynamicImport(() => import("@/components/title"), { ssr: false });
const DefaultButton = dynamicImport(
  () => import("@/components/DefaultButton"),
  { ssr: false }
);

export default function AlmostRegistered() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    fullName: "",
    registration: "",
    course: "",
    entryYear: "",
    profile: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    // Implementar lógica de envio
  };

  // RENDERIZAÇÃO INTERATIVA - SOMENTE NO CLIENTE
  return (
    <div className="container-border">
      <div className={styles.page}>
        <div className={styles.containerMobile}>
          <Title title="ESTAMOS QUASE LA" />
          <Input
            placeholder="EMAIL"
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <Input
            placeholder="CONFIRMA SENHA"
            type="password"
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />
          <Input
            placeholder="NOME DE USUÁRIO"
            value={formData.username}
            onChange={(value) => handleInputChange("username", value)}
          />
          <Input
            placeholder="NOME COMPLETO"
            value={formData.fullName}
            onChange={(value) => handleInputChange("fullName", value)}
          />
          <Input
            placeholder="MATRÍCULA"
            value={formData.registration}
            onChange={(value) => handleInputChange("registration", value)}
          />
          <Input
            placeholder="SELECIONAR CURSO"
            value={formData.course}
            onChange={(value) => handleInputChange("course", value)}
          />
          <Input
            placeholder="ANO DE ENTRADA"
            value={formData.entryYear}
            onChange={(value) => handleInputChange("entryYear", value)}
          />
        </div>
        <div className={styles.rightArea}>
          <Title title="CADASTRE-SE" />
          <Input
            placeholder="EMAIL"
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
          />
          <Input
            placeholder="CONFIRMA SENHA"
            type="password"
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />
          <Input
            placeholder="SELECIONAR PERFIL"
            value={formData.profile}
            onChange={(value) => handleInputChange("profile", value)}
          />
        </div>
        <VerticalLine />
        <div className={styles.leftArea}>
          <Title title="ESTAMOS QUASE LA" />
          <Input
            placeholder="NOME DE USUÁRIO"
            value={formData.username}
            onChange={(value) => handleInputChange("username", value)}
          />
          <Input
            placeholder="NOME COMPLETO"
            value={formData.fullName}
            onChange={(value) => handleInputChange("fullName", value)}
          />
          <Input
            placeholder="MATRÍCULA"
            value={formData.registration}
            onChange={(value) => handleInputChange("registration", value)}
          />
          <Input
            placeholder="SELECIONAR CURSO"
            value={formData.course}
            onChange={(value) => handleInputChange("course", value)}
          />
          <Input
            placeholder="ANO DE ENTRADA"
            value={formData.entryYear}
            onChange={(value) => handleInputChange("entryYear", value)}
          />
          <DefaultButton onClick={handleSubmit}>Prosseguir</DefaultButton>
        </div>
      </div>
    </div>
  );
}
