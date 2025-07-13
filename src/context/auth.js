import { createContext, useContext, useState } from "react";
import {
  DeleteLoginToken,
  StoreLoginToken,
  GetLoginToken,
} from "../util/StorageLogin";
import api from "../service/api";
import { API_ENDPOINTS } from "../constants/endpoints";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  async function GetUser(token) {
    try {
      // Se o token for fornecido, usa ele; senão, o interceptador usa o token do localStorage
      const headers = token ? { Authorization: `Token ${token}` } : {};
      const response = await api.get(API_ENDPOINTS.USER_PROFILE, {
        headers,
      });

      return response.data;
    } catch (error) {
      console.log(error.response?.data);
      return null;
    }
  }

  function EditUser(user) {
    setUser(user);
  }
  async function Login(user) {
    try {
      console.log("🔄 Tentando fazer login...");

      const response = await api.post(API_ENDPOINTS.LOGIN, {
        username: user.email,
        password: user.password,
      });

      console.log("✅ Resposta recebida:", response.status);

      const token = response.data.token;
      const userData = await GetUser(token);

      setUser({ ...userData });

      await StoreLoginToken(token);

      if (
        userData.perfil.curso === null ||
        userData.perfil.entrada === null ||
        userData.perfil.nome_completo.length < 1
      ) {
        return { erro: "usuario incompleto!" };
      }

      return undefined;
    } catch (error) {
      console.error("❌ Erro no login:", error);

      // Tratamento específico para credenciais inválidas (401)
      if (error.response?.status === 401) {
        return {
          erro: "Email ou senha incorretos. Verifique suas credenciais e tente novamente.",
        };
      }

      // Tratamento para outros erros de status HTTP
      if (error.response?.status === 400) {
        return {
          erro: "Dados inválidos. Verifique o email e senha.",
        };
      }

      // Tratamento específico para erro de CORS
      if (error.isCorsError) {
        return {
          erro: "Erro de conexão com o servidor. Verifique sua internet ou entre em contato com o suporte.",
        };
      }

      // Tratamento para outros erros de rede
      if (error.code === "ERR_NETWORK") {
        return {
          erro: "Não foi possível conectar ao servidor. Verifique sua conexão.",
        };
      }

      // Tratamento para erros de resposta HTTP
      if (error.response?.data) {
        return error.response.data;
      }

      // Erro genérico
      return { erro: "Erro interno. Tente novamente." };
    }
  }
  async function Register(newUser) {
    try {
      await api.post(API_ENDPOINTS.REGISTER, {
        email: newUser.email,
        password: newUser.password,
      });
      setUser({ email: newUser.email, password: newUser.password });

      return null;
    } catch (error) {
      console.log(error.response);
      return error.response?.data;
    }
  }

  async function CompleteRegister(userData) {
    const foto = userData.foto ? userData.foto : null;

    try {
      // O interceptador vai adicionar o token automaticamente
      const response = await api.patch(API_ENDPOINTS.USER_PROFILE, {
        nome_completo: userData.name,
        nome_exibicao: userData.nickName,
        data_nascimento: new Date().toISOString().split("T")[0],
        matricula: userData.registration,
        entrada: userData.entryYear,
        curso: userData.course.id,
        foto: foto,
      });
      console.log("Dados do usuário atualizados:", response.data);
      return response.data.perfil.nome_exibicao;
    } catch (error) {
      console.log(error);
      return error.response?.data;
    }
  }

  async function Active(token) {
    try {
      const response = await api.post(API_ENDPOINTS.CONFIRM_EMAIL, {
        token: token,
      });
      const userData = await GetUser(response.data.auth_token);

      await StoreLoginToken(response.data.auth_token);
      setUser({ ...userData });

      return true;
    } catch (error) {
      console.log(error.response);
      if (
        error.response?.status === 401 ||
        error.response?.status === 404 ||
        error.response?.status === 409
      ) {
        return error.response.data.detail;
      } else {
        return "Falha ao ativar o token, verifique se o código está correto ou se o celular está conectado a internet!";
      }
    }
  }

  async function Logout() {
    setUser(null);
    await DeleteLoginToken();

    // Limpar cache de subject e course
    if (typeof window !== "undefined") {
      localStorage.removeItem("selected_subject");
      localStorage.removeItem("selected_course");
    }
  }

  async function IsConnected() {
    const token = await GetLoginToken();
    const userData = await GetUser(token);

    if (!userData) {
      return false;
    } else {
      if (!userData.perfil.curso) {
        return null;
      } else {
        setUser({ ...userData });
        return true;
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        Logout,
        Login,
        Register,
        CompleteRegister,
        Active,
        IsConnected,
        EditUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
