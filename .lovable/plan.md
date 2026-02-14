
# Chat Simulado Estilo Video na Dobra 4

## Resumo
Expandir a conversa animada atual do mockup para uma sequencia mais longa e realista, com multiplas trocas de mensagens aparecendo automaticamente em loop -- como se fosse um video de demonstracao do produto rodando.

---

## O que muda

### Conversa longa e sequencial
Em vez de apenas 1 pergunta + 1 resposta, o mockup vai exibir uma conversa completa com **5-6 trocas de mensagens** que aparecem uma a uma com delays naturais:

1. **Bot:** "Ola! Bem-vindo ao nosso atendimento. Como posso ajudar?"
2. **Cliente:** "Qual o preco do plano?"
3. *(digitando...)* **Bot:** "O acesso completo custa R$97 -- pagamento unico, sem mensalidade!"
4. **Cliente:** "Tem suporte incluso?"
5. *(digitando...)* **Bot:** "Sim! Suporte por WhatsApp e atualizacoes gratuitas por 1 ano."
6. **Cliente:** "Quero comprar!"
7. *(digitando...)* **Bot:** "Otimo! Vou te enviar o link de pagamento agora mesmo."

### Loop automatico
- Ao terminar a sequencia, as mensagens somem e recomeam do zero (~2s de pausa entre loops)
- Usa `useInView` para rodar apenas quando visivel na tela

### Typing indicator entre cada resposta do bot
- Aparece por ~1s antes de cada mensagem do bot
- Desaparece quando a mensagem aparece

### Visual mantido
- Mesma estetica glass/glow, barra "Bot Ativo", builder nodes no topo
- Area de chat com altura fixa e scroll visual (overflow hidden, nao interativo)
- Mensagens aparecem de baixo para cima empurrando as anteriores

---

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/ChatbotAISection.tsx`

### Logica do MockupBuilder
- Array de mensagens com `role` (client/bot), `content` e `delay` (tempo acumulado)
- Estado `visibleMessages` controlado por `useEffect` com timeouts sequenciais
- Quando todas as mensagens aparecem, aguarda 3s e reseta para recomecar
- `useInView` controla se o loop esta ativo
- Container de mensagens com `max-h-[220px] overflow-hidden` e scroll automatico via `scrollIntoView` no ultimo elemento
- Cada mensagem entra com `motion.div` fade+slide (cliente da esquerda, bot da direita)
- `TypingDots` aparece antes de cada mensagem do bot e some quando ela surge

### Estrutura das mensagens
```text
const chatScript = [
  { role: "bot", content: "Ola! Bem-vindo...", delayAfterPrev: 1000 },
  { role: "client", content: "Qual o preco?", delayAfterPrev: 2000 },
  { role: "bot", content: "O acesso custa R$97...", delayAfterPrev: 2500 },
  { role: "client", content: "Tem suporte?", delayAfterPrev: 2000 },
  { role: "bot", content: "Sim! Suporte por WhatsApp...", delayAfterPrev: 2500 },
  { role: "client", content: "Quero comprar!", delayAfterPrev: 1500 },
  { role: "bot", content: "Otimo! Vou enviar o link...", delayAfterPrev: 2500 },
];
```

### Fluxo de animacao
- Para cada mensagem do bot: mostra TypingDots por ~1.2s, depois substitui pelos texto
- Para cada mensagem do cliente: aparece direto com slide da esquerda
- Ao final: fade-out geral, pausa 2s, reinicia
- Tudo controlado por `setTimeout` chain dentro de `useEffect`, limpo no cleanup
