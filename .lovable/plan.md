
# Corrigir Bug de Scroll e Fixar Tamanho do Celular

## Problema
O `scrollIntoView` na linha 116 faz o **navegador inteiro** rolar para baixo toda vez que uma nova mensagem aparece, porque ele move o viewport do documento para o elemento referenciado.

## Correcoes

### 1. Remover `scrollIntoView` e usar scroll interno
- Substituir `chatEndRef.current?.scrollIntoView(...)` por `chatEndRef.current?.parentElement?.scrollTo(...)` ou simplesmente setar `scrollTop` do container de mensagens
- Isso garante que apenas o container interno de chat rola, nao a pagina inteira

### 2. Tamanho fixo do celular
- Adicionar altura fixa ao frame do smartphone: `h-[560px]` (proporcao realista 9:19 para largura de 280px)
- A area de chat interna tera `overflow-y-auto` com altura limitada pelo container pai, em vez de `overflow-hidden`
- O container de mensagens usara `flex flex-col justify-end` para manter mensagens alinhadas na parte inferior

## Detalhes Tecnicos

### Arquivo: `src/components/landing/ChatbotAISection.tsx`

**Linha 115-117** -- Substituir o `useEffect` do scroll:
```tsx
// De:
chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

// Para:
const container = chatEndRef.current?.parentElement;
if (container) {
  container.scrollTop = container.scrollHeight;
}
```

**Linha 120** -- Adicionar altura fixa ao frame:
```tsx
// De:
<div className="relative mx-auto w-[280px] bg-black/80 rounded-[2.5rem] p-3 border-[3px] border-white/15 shadow-2xl animate-glow-pulse">

// Para:
<div className="relative mx-auto w-[280px] h-[560px] bg-black/80 rounded-[2.5rem] p-3 border-[3px] border-white/15 shadow-2xl animate-glow-pulse flex flex-col">
```

**Container interno (motion.div glass)** -- Permitir que ocupe o espaco restante:
- Adicionar `flex-1 flex flex-col min-h-0` ao motion.div glass
- A area de chat tera `flex-1 overflow-y-auto` em vez de `max-h-[240px] overflow-hidden`
