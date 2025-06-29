"use client";
import styles from "./page.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Title from "@/components/title";
import SubLink from "@/components/subLink";
import DefaultButton from "@/components/DefaultButton";
import { useAuth } from "@/context/auth";
import api from "@/service/api";

export default function CheckCode() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timeToken, setTimeToken] = useState(60);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const { Active, Register, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeToken((prevTimeToken) =>
        prevTimeToken > 0 ? prevTimeToken - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const resendToken = async () => {
    if (timeToken === 0) {
      try {
        const isRegister = searchParams.get("register");
        const email = searchParams.get("email");

        if (isRegister) {
          await Register({ email: user.email, password: user.password });
        } else if (email) {
          await sendRecoverPassword();
        }
      } catch (error) {
        console.log(error);
        setError("Erro ao enviar o código, tente novamente mais tarde.");
      } finally {
        setTimeToken(60);
      }
    }
  };

  const TextResendToken = () => {
    if (timeToken > 0) {
      return `Aguarde ${timeToken} segundos para receber o código novamente.`;
    } else {
      return "Receber um novo código";
    }
  };

  const HandleChangeCode = (text, pos) => {
    let tempCode = code;
    tempCode[pos] = typeof text === "string" ? text.toLowerCase() : text;
    setCode(tempCode);

    if (text !== "" && pos < 5) {
      refs[pos + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      code[index] === "" &&
      index > 0
    ) {
      refs[index - 1].current.focus();
    }
  };

  const CheckinputCode = async () => {
    setLoading(true);
    const inputIsFilled = code.reduce((previousValue, currentValue) => {
      if (currentValue === "") return -1;
      return 1;
    });

    if (inputIsFilled > 0) {
      const activeToken = code.toString().replace(/,/g, "");
      const isRegister = searchParams.get("register");

      if (isRegister) {
        const codeActivationMessage = await Active(activeToken);

        if (codeActivationMessage === true) {
          router.push("/ProfilePicture");
        } else {
          setError(codeActivationMessage);
        }
      } else {
        try {
          await api.post("/usuario/verificar-token/", {
            token: activeToken,
          });
          router.push("/ProfilePicture");
          console.log(COURSES);
        } catch (error) {
          console.log(error.response);
          setError("Token inválido!");
        }
      }
    } else {
      setError("O campo do código não pode estar vazio!");
    }
    setLoading(false);
  };

  return (
    <div className="container-border">
      <div className={styles.page}>
        <Title title="UM CODIGO FOI ENVIADO PARA SEU EMAIL" />

        <div className={styles.containerCode}>
          {code.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => HandleChangeCode(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={refs[index]}
              maxLength={1}
              className={styles.inputCode}
            />
          ))}
        </div>

        <SubLink subtitle="Reenviar codigo" />
        <DefaultButton
          children="Prosseguir"
          disabled={loading}
          onClick={CheckinputCode}
        />
      </div>
    </div>
  );
}
