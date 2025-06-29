import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false, // Importante para CORS
  timeout: 10000, // Timeout de 10 segundos
});

// Interceptador de requisição para adicionar token automaticamente
api.interceptors.request.use(
  async (config) => {
    // Verifica se estamos no lado do cliente (navegador)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Token ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptador de resposta para tratamento global de erros
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Erro na API:", error);

    // Tratamento para token expirado ou inválido
    if (error.response?.status === 401) {
      // Remove token inválido
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        // Opcional: redirecionar para login
        // window.location.href = '/login';
      }
    }

    // Tratamento específico para erros de CORS
    if (error.code === "ERR_NETWORK" || error.message.includes("CORS")) {
      console.error("❌ Erro de CORS detectado!");
      console.error("O backend precisa configurar os headers:");
      console.error("- Access-Control-Allow-Origin");
      console.error("- Access-Control-Allow-Methods");
      console.error("- Access-Control-Allow-Headers");

      // Retorna um erro mais amigável
      const corsError = new Error(
        "Erro de conexão com o servidor. Entre em contato com o administrador."
      );
      corsError.isCorsError = true;
      return Promise.reject(corsError);
    }

    return Promise.reject(error);
  }
);

export default api;
