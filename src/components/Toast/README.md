# Componente Toast

Um sistema de notificações toast moderno e responsivo para a aplicação.

## Funcionalidades

- 🎨 4 tipos de notificação: `success`, `error`, `warning`, `info`
- ⏱️ Auto-dismiss configurável
- 🎯 Animações suaves de entrada e saída
- 📱 Design responsivo
- 🎮 Controles de pausa/retomar
- 🧹 Função de limpar todas as notificações
- 💅 Barra de progresso visual

## Uso Básico

### 1. Configuração

O `ToastProvider` já está configurado no arquivo `Providers.jsx` e envolve toda a aplicação.

### 2. Hook useToast

```jsx
import { useToast } from "@/context/toast";

function MeuComponente() {
  const { showSuccess, showError, showWarning, showInfo } = useToast();

  const handleSuccess = () => {
    showSuccess("Sucesso!", "Operação realizada com sucesso!");
  };

  const handleError = () => {
    showError("Erro!", "Algo deu errado.");
  };

  const handleWarning = () => {
    showWarning("Atenção!", "Verifique os dados informados.");
  };

  const handleInfo = () => {
    showInfo("Informação", "Dados atualizados.");
  };

  return (
    <div>
      <button onClick={handleSuccess}>Sucesso</button>
      <button onClick={handleError}>Erro</button>
      <button onClick={handleWarning}>Aviso</button>
      <button onClick={handleInfo}>Info</button>
    </div>
  );
}
```

### 3. Métodos Disponíveis

```jsx
const {
  showSuccess, // (title, message, duration?) => void
  showError, // (title, message, duration?) => void
  showWarning, // (title, message, duration?) => void
  showInfo, // (title, message, duration?) => void
  addToast, // (title, message, type, duration?) => void
  removeToast, // (id) => void
  clearAllToasts, // () => void
} = useToast();
```

### 4. Duração Customizada

```jsx
// Toast que desaparece em 3 segundos (padrão é 5 segundos)
showSuccess("Título", "Mensagem", 3000);

// Toast que não desaparece automaticamente
showError("Título", "Mensagem", 0);
```

## Tipos de Toast

### Success (Verde)

- Usado para confirmações de ações bem-sucedidas
- Cor: `#10b981`
- Ícone: ✓

### Error (Vermelho)

- Usado para erros e falhas
- Cor: `#ef4444`
- Ícone: ✕

### Warning (Amarelo)

- Usado para avisos e atenções
- Cor: `#f59e0b`
- Ícone: ⚠

### Info (Azul)

- Usado para informações gerais
- Cor: `#3b82f6`
- Ícone: ℹ

## Exemplo no RegisterDoubt

```jsx
import { useToast } from "@/context/toast";

export default function RegisterDoubt() {
  const { showSuccess, showError, showWarning } = useToast();

  const PostQuestion = async () => {
    try {
      // ... lógica de criação da pergunta

      showSuccess("Sucesso", "Dúvida publicada com sucesso!");
    } catch (error) {
      showError("Erro", "Erro ao publicar dúvida!");
    }
  };

  // ...resto do componente
}
```

## Personalização

O componente pode ser personalizado através do arquivo `styles.module.css`:

- Posição dos toasts (atualmente: top-right)
- Cores dos diferentes tipos
- Durações das animações
- Tamanhos e espaçamentos

## Comportamento

- **Desktop**: Toasts aparecem no canto superior direito
- **Mobile**: Toasts ocupam toda a largura da tela com margens laterais
- **Auto-dismiss**: Toasts desaparecem automaticamente após o tempo definido
- **Click to dismiss**: Usuário pode fechar manualmente clicando no ✕
- **Hover pause**: Barra de progresso pausa quando o mouse está sobre o toast
- **Animações**: Entrada suave da direita, saída para a direita
