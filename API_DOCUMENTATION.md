# Documentação da API - AMO Web

## Estrutura da API

### 1. Serviço de API (`src/service/api.js`)

O serviço de API foi configurado com:

- **Base URL**: `https://amo-backend-aa73.onrender.com/`
- **Interceptadores** para:
  - Adicionar token de autenticação automaticamente
  - Tratamento global de erros 401 (token expirado)
  - Headers padrão `Content-Type: application/json`

### 2. Utilitário de Storage (`src/util/StorageLogin.js`)

Gerencia tokens de autenticação no localStorage:

- `StoreLoginToken(token)` - Armazena o token
- `GetLoginToken()` - Recupera o token
- `DeleteLoginToken()` - Remove o token

### 3. Contexto de Autenticação (`src/context/auth.js`)

Gerencia o estado de autenticação da aplicação:

- `Login(user)` - Autentica usuário
- `Register(newUser)` - Registra novo usuário
- `CompleteRegister(userData)` - Completa o registro
- `Active(token)` - Ativa conta via token
- `Logout()` - Desconecta usuário
- `IsConnected()` - Verifica se usuário está conectado

### 4. Hook useApi (`src/hooks/useApi.js`)

Hook personalizado para facilitar requisições:

```javascript
const { loading, error, get, post, put, patch, delete: del } = useApi();

// Exemplo de uso
const fetchData = async () => {
  try {
    const data = await get("/endpoint");
    console.log(data);
  } catch (err) {
    console.error("Erro:", error);
  }
};
```

### 5. Constantes de Endpoints (`src/constants/endpoints.js`)

Centraliza todos os endpoints da API para facilitar manutenção.

## Melhorias Implementadas

### ✅ Problemas Corrigidos:

1. **Caminho de importação**: Corrigido `../services/api` para `../service/api`
2. **Arquivo ausente**: Criado `StorageLogin.js`
3. **Interceptadores**: Adicionados para token automático e tratamento de erros
4. **Tratamento de erros**: Melhorado com optional chaining (`?.`)

### ✅ Funcionalidades Adicionadas:

1. **Interceptadores de requisição**: Token adicionado automaticamente
2. **Interceptadores de resposta**: Tratamento global de erros 401
3. **Hook useApi**: Facilita uso da API em componentes
4. **Constantes de endpoints**: Centralização e organização
5. **Compatibilidade Next.js**: Verificação de `typeof window !== 'undefined'`

## Como Usar

### Em componentes funcionais:

```javascript
import { useAuth } from '../context/auth';
import useApi from '../hooks/useApi';

function MeuComponente() {
  const { user, Login } = useAuth();
  const { loading, error, get } = useApi();

  const handleLogin = async (credentials) => {
    const result = await Login(credentials);
    if (result?.erro) {
      console.error('Erro no login:', result.erro);
    }
  };

  return (
    // Seu JSX aqui
  );
}
```

### Requisições diretas:

```javascript
import api from "../service/api";
import { API_ENDPOINTS } from "../constants/endpoints";

// GET request
const data = await api.get(API_ENDPOINTS.USER_PROFILE);

// POST request
const response = await api.post(API_ENDPOINTS.LOGIN, {
  username: "user@email.com",
  password: "password123",
});
```

## Estrutura de Arquivos

```
src/
├── service/
│   └── api.js                 # Configuração do Axios
├── context/
│   ├── auth.js               # Contexto de autenticação
│   └── subject.js            # Contexto de disciplinas
├── hooks/
│   └── useApi.js             # Hook personalizado para API
├── util/
│   └── StorageLogin.js       # Utilitários de token
└── constants/
    └── endpoints.js          # Endpoints da API
```

A estrutura agora está otimizada para consumo de API RESTful com boas práticas de React/Next.js!
