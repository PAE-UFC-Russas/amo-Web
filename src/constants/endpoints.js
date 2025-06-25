// Constantes para endpoints da API
export const API_ENDPOINTS = {
  // Autenticação
  LOGIN: "/usuario/login/",
  REGISTER: "/registrar/",
  CONFIRM_EMAIL: "/registrar/confirmar-email/",
  USER_PROFILE: "/usuario/eu/",

  // Outros endpoints (adicione conforme necessário)
  COURSES: "/cursos/",
  SUBJECTS: "/disciplinas/",
  SCHEDULES: "/agendamentos/",
  FORUM: "/forum/",

  // Exemplo de endpoints parametrizados
  USER_BY_ID: (id) => `/usuario/${id}/`,
  SUBJECT_BY_ID: (id) => `/disciplinas/${id}/`,
};

export default API_ENDPOINTS;
