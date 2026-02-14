
# Reformulacao da Dobra 4 (Chatbot AI Section)

## Resumo
Transformar a secao de Chatbot com IA de um mockup generico para uma demonstracao realista do produto, com conversa animada simulando interacao cliente/IA, blocos visuais do construtor e copy mais estrategica.

---

## Mudancas

### 1. Mockup Realista (Lado Esquerdo)
Substituir os blocos placeholder por uma simulacao visual do construtor + conversa:

**Parte superior -- Construtor Visual (mini)**
- 3 blocos conectados por linhas SVG simulando um fluxo:
  - Bloco "Inicio" (icone play) conecta a "Pergunta" conecta a "Resposta IA"
- Cada bloco com label visivel, borda sutil, icone pequeno
- Linhas curvas SVG ligando os blocos

**Parte inferior -- Conversa Simulada (chat bubbles)**
- Balao do cliente (alinhado a esquerda, fundo escuro): "Qual o preco?"
- Balao da IA (alinhado a direita, fundo primary/20): "Posso te ajudar com isso! Voce quer um orcamento ou falar com um atendente?"
- As mensagens aparecem com animacao sequencial (typing effect com delay):
  1. Balao do cliente aparece primeiro (delay 0s)
  2. Indicador "digitando..." aparece (delay 1s)
  3. Balao da IA aparece (delay 2s)
- Animacao reinicia ao entrar na viewport

**Barra superior do mockup**
- Simular barra de titulo do app: circulo verde + texto "Bot Ativo" + indicador online
- Transmite sensacao de "produto real rodando"

### 2. Selo Emocional Acima do Titulo
Adicionar badge/selo antes do h2:
- Texto: "O Futuro do Atendimento Ja Esta Aqui"
- Icone de sparkle/cristal ao lado
- Estilo: `text-xs uppercase tracking-wider text-primary/80` com fundo `bg-primary/10 rounded-full px-3 py-1`
- Animacao sutil de entrada

### 3. Copy Mais Estrategica
**Subtitulo atualizado:**
- De: "Construa fluxos inteligentes visualmente e deixe a IA responder seus clientes 24 horas por dia."
- Para: "Automatize seu atendimento com fluxos visuais e deixe a Inteligencia Artificial responder seus clientes 24/7 -- mesmo quando sua equipe estiver offline."

**Titulo h2 mantido** (ja esta bom com o gradient-text em "Inteligencia Artificial").

### 4. Highlights com Copy Refinada
Pequenos ajustes nas descricoes dos 4 destaques:
- **Construtor Visual:** "Monte fluxos completos arrastando blocos -- sem escrever uma linha de codigo."
- **IA Gemini Gratuito:** "Inteligencia artificial inclusa sem custo extra. Seu bot responde sozinho."
- **OpenAI Opcional:** "Ative o ChatGPT para respostas ainda mais precisas e naturais."
- **Respostas Automaticas:** "Seu sistema trabalha sozinho 24/7, sem depender de ninguem."

### 5. Movimento e Sensacao de Tecnologia Viva
- Linha SVG entre blocos do construtor com animacao de "fluxo" (dash-offset animado)
- Ponto pulsante verde no indicador "Bot Ativo"
- Leve glow animado no contorno do mockup (glow-pulse existente no tailwind config)
- Baloes de chat com stagger animation via framer-motion

---

## Detalhes Tecnicos

**Arquivo:** `src/components/landing/ChatbotAISection.tsx`

### Estrutura do Mockup
```text
+------------------------------------------+
| [o] Bot Ativo  ●                         |  <- barra titulo
+------------------------------------------+
|                                          |
|  [Inicio] ----> [Pergunta] ----> [IA]    |  <- blocos SVG
|                                          |
+------------------------------------------+
|  Cliente: "Qual o preco?"                |  <- chat bubble esq
|                                          |
|  IA: "Posso te ajudar! Quer orcamento    |  <- chat bubble dir
|       ou falar com atendente?"           |
+------------------------------------------+
```

### Animacoes
- Blocos do construtor: `motion.div` com `initial={{ opacity: 0, scale: 0.8 }}` e stagger delay
- Linhas SVG: CSS `stroke-dasharray` + `stroke-dashoffset` animado com keyframe
- Chat bubbles: `motion.div` com delays sequenciais (0s, 1.5s, 2.5s)
- Indicador "digitando...": 3 dots pulsantes aparecendo entre as mensagens
- Ponto verde "Bot Ativo": `animate-pulse` do Tailwind
- Glow do card: classe `animate-glow-pulse` ja existente

### Selo emocional
```text
<motion.div>
  <span class="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider 
    text-primary/80 bg-primary/10 rounded-full px-3 py-1 mb-4">
    <Sparkles class="w-3.5 h-3.5" />
    O Futuro do Atendimento Ja Esta Aqui
  </span>
</motion.div>
```

### Keyframe para linhas SVG (adicionar ao index.css)
```css
@keyframes flow-line {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}
.animate-flow-line {
  stroke-dasharray: 8 4;
  animation: flow-line 2s linear infinite;
}
```

### Arquivos modificados
- `src/components/landing/ChatbotAISection.tsx` -- reescrita completa do mockup e ajustes de copy
- `src/index.css` -- adicionar keyframe `flow-line` para animacao das linhas SVG
