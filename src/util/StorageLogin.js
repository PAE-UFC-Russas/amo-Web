// Utilitário para gerenciar tokens de autenticação no localStorage
// Para aplicações Next.js, usamos localStorage no lado do cliente

export const StoreLoginToken = async (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token);
  }
};

export const GetLoginToken = async () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token");
  }
  return null;
};

export const DeleteLoginToken = async () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token");
  }
};
