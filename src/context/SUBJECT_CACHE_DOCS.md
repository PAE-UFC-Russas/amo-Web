# Como usar o Subject Context com Cache

O contexto de Subject agora possui um sistema de cache que persiste os dados no localStorage. Para evitar problemas de hidratação no Next.js, utilize o estado `isLoaded`.

## Exemplo de uso:

```jsx
import { useSubject } from "@/context/subject";

function MeuComponente() {
  const { subject, course, isLoaded } = useSubject();

  // Aguarda o carregamento dos dados do cache
  if (!isLoaded) {
    return <div>Carregando...</div>;
  }

  // Agora pode usar subject e course com segurança
  return (
    <div>
      {subject ? (
        <h2>Disciplina: {subject.nome}</h2>
      ) : (
        <p>Nenhuma disciplina selecionada</p>
      )}

      {course ? <h3>Curso: {course.nome}</h3> : <p>Nenhum curso selecionado</p>}
    </div>
  );
}
```

## Funcionalidades disponíveis:

- `subject` - Disciplina atual (null se não selecionada)
- `course` - Curso atual (null se não selecionado)
- `isLoaded` - Boolean indicando se os dados foram carregados do cache
- `EditSubject(subject)` - Atualiza a disciplina e salva no cache
- `EditCourse(course)` - Atualiza o curso e salva no cache
- `ClearCache()` - Limpa todo o cache (usado no logout)

## Importante:

- Sempre verifique `isLoaded` antes de usar `subject` ou `course`
- O cache é limpo automaticamente no logout
- Tratamento de erros incluído para localStorage
