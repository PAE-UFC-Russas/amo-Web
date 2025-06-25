"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import Title from "@/components/title";
import DefaultButton from "@/components/DefaultButton";

// Força renderização dinâmica - DESABILITA SSR COMPLETAMENTE
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function AlmostRegistered() {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Renderização condicional completa - SSR vs Cliente
  if (!mounted) {
    return (
      <div className="container-border">
        <div className={styles.page}>
          <div className={styles.containerMobile}>
            <Title title="ESTAMOS QUASE LA" />
            <input
              placeholder="EMAIL"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="SENHA"
              type="password"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="CONFIRMA SENHA"
              type="password"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="NOME DE USUÁRIO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="NOME COMPLETO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="MATRÍCULA"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="SELECIONAR CURSO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="ANO DE ENTRADA"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
          </div>
          <div className={styles.rightArea}>
            <Title title="CADASTRE-SE" />
            <input
              placeholder="EMAIL"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="SENHA"
              type="password"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="CONFIRMA SENHA"
              type="password"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="SELECIONAR PERFIL"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
          </div>
          <VerticalLine />
          <div className={styles.leftArea}>
            <Title title="ESTAMOS QUASE LA" />
            <input
              placeholder="NOME DE USUÁRIO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="NOME COMPLETO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="MATRÍCULA"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="SELECIONAR CURSO"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <input
              placeholder="ANO DE ENTRADA"
              style={{ width: "100%", padding: "10px", margin: "5px 0" }}
            />
            <button style={{ padding: "10px 20px", margin: "10px 0" }}>
              Prosseguir
            </button>
          </div>
        </div>
      </div>
    );
  }

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
