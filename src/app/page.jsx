"use client";

import "./page.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/auth";

import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubTitle from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";

export default function Home() {
  const router = useRouter();
  const { Login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleRegisterClick = () => {
    console.log("Navegando para a página de registro...");
    router.push("/Register");
  };

  const handleInputChange = (field, value) => {
    setUserLogin((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Limpa o erro quando o usuário começa a digitar
    if (error) setError("");
  };

  const login = async () => {
    // Validação básica
    if (!userLogin.email || !userLogin.password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("🔐 Iniciando login...");

      const result = await Login({
        email: userLogin.email,
        password: userLogin.password,
      });

      if (result?.erro) {
        setError(result.erro);
        console.error("Erro no login:", result.erro);
      } else if (result === "usuario incompleto!") {
        console.log(
          "✅ Login realizado! Redirecionando para completar cadastro..."
        );
        router.push("/CompleteRegister");
      } else {
        console.log("✅ Login realizado com sucesso!");
        router.push("/SelectMonitoring"); // ou a página principal após login
      }
    } catch (err) {
      console.error("Erro durante o login:", err);
      setError("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container-border">
      <div className="page">
        <div className="left-area">
          <Title title="LOGIN" />
          <Input
            placeholder="EMAIL"
            value={userLogin.email}
            onChange={(value) => handleInputChange("email", value)}
            type="email"
          />
          <Input
            placeholder="SENHA"
            value={userLogin.password}
            onChange={(value) => handleInputChange("password", value)}
            type="password"
          />
          {error && (
            <div style={{ color: "red", fontSize: "14px", margin: "10px 0" }}>
              {error}
            </div>
          )}
          <SubTitle subtitle="ESQUECI MINHA SENHA" />{" "}
          <DefaultButton onClick={login} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </DefaultButton>
          <SubTitle
            subtitle="NÃO POSSUO CADASTRO"
            onClick={handleRegisterClick}
          />
        </div>

        <VerticalLine />

        <div className="right-area">
          <About />
        </div>
      </div>
    </div>
  );
}
