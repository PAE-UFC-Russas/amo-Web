"use client";
import styles from "./page.module.css";
import { useState } from "react";
import validator from "validator";
import { useRouter } from "next/navigation";
import Input from "@/components/input";
import VerticalLine from "@/components/verticalLine";
import About from "@/components/about";
import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";
import { useAuth } from "@/context/auth";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputErros, setInputErros] = useState({
    errosEmail: null,
    errosPassword: null,
    errosConfirmPassword: null,
  });

  const { Register } = useAuth();
  const router = useRouter();

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (field, value) => {
    setNewUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  async function InputValidation() {
    setLoading(true);
    setInputErros({
      errosEmail: null,
      errosPassword: null,
      errosConfirmPassword: null,
    });

    let erros = {
      errosEmail: null,
      errosPassword: null,
      errosConfirmPassword: null,
    };

    try {
      // Validação de email
      if (newUser.email.length < 10 || !validator.isEmail(newUser.email)) {
        erros.errosEmail = "E-mail inválido!";
      }

      // Validação de senha
      if (newUser.password.length < 8) {
        erros.errosPassword = "A senha precisa conter no mínimo 8 caracteres!";
      } else if (!newUser.password.match(/[a-zA-Z]/g)) {
        erros.errosPassword = "A senha precisa conter pelo menos uma letra!";
      } else if (!newUser.password.match(/\d/g)) {
        erros.errosPassword = "A senha precisa conter pelo menos um número!";
      }

      // Validação de confirmação de senha
      if (newUser.password !== newUser.confirmPassword) {
        erros.errosConfirmPassword = "As senhas devem ser iguais!";
      }

      setInputErros(erros);

      // Se não há erros, fazer a requisição
      if (
        !erros.errosEmail &&
        !erros.errosPassword &&
        !erros.errosConfirmPassword
      ) {
        const response = await Register(newUser);

        if (response === null) {
          // Sucesso - redirecionar para CheckCode
          router.push("/CheckCode");
        } else {
          // Erro - email já em uso
          setInputErros({
            ...erros,
            errosEmail: "Endereço de email já está em uso!",
          });
        }
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      setInputErros({
        ...erros,
        errosEmail: "Erro interno do servidor. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="container-border">
      <div className={styles.page}>
        <div className={styles.rightArea}>
          <About />
        </div>

        <VerticalLine />

        <div className={styles.leftArea}>
          <Title title="CADASTRE-SE" />

          <Input
            placeholder="EMAIL"
            value={newUser.email}
            onChange={(value) => handleInputChange("email", value)}
            error={inputErros.errosEmail}
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={newUser.password}
            onChange={(value) => handleInputChange("password", value)}
            error={inputErros.errosPassword}
          />
          <Input
            placeholder="CONFIRMA SENHA"
            type="password"
            value={newUser.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
            error={inputErros.errosConfirmPassword}
          />

          <SubLink subtitle="CADASTRE-SE COMO PROFESSOR" />

          <DefaultButton onClick={InputValidation} disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </DefaultButton>
        </div>
      </div>
    </div>
  );
}
