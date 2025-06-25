import axios from "axios";

// Configuração para desenvolvimento (usando proxy do Next.js)
const isDevelopment = process.env.NODE_ENV === "development";

const api = axios.create({
  baseURL: isDevelopment
    ? "/api/backend/" // Usa o proxy do Next.js em desenvolvimento
    : "https://amo-backend-aa73.onrender.com/", // URL direta em produção
  headers: {
    "Content-Type": "application/json",
  },
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
      console.error(
        "Erro de CORS detectado. Verifique a configuração do servidor."
      );
    }

    return Promise.reject(error);
  }
);

export default api;
