
# Reformulacao Completa da Hero Section (1a Dobra)

## Resumo
Transformar a Hero Section de uma apresentacao generica para uma dobra de alto impacto com headline agressiva, badge premium, video com moldura MacBook, micro autoridade e fundo visual rico.

---

## Mudancas Detalhadas

### 1. Badge Superior (Selo Premium)
- Substituir o badge discreto por uma capsula com fundo gradiente verde, glow sutil e texto bold
- Texto: "PAGAMENTO UNICO VITALICIO -- SEM MENSALIDADE PARA SEMPRE"
- Estilo: fundo gradiente verde (green-500 para green-600), bordas arredondadas, pequeno glow verde, texto branco bold

### 2. Headline Agressiva
- Substituir a headline atual por duas linhas fortes:
  - Linha 1: "Pare de Pagar Mensalidade." (em verde neon, destaque forte)
  - Linha 2: "Seja Dono do Seu Proprio Sistema de Atendimento WhatsApp."
- A parte "Pare de Pagar Mensalidade" tera cor verde (text-green-400) para contraste visual

### 3. Subheadline Emocional
- Substituir por: "WhatsApps ilimitados, atendentes ilimitados e chatbot com IA pagando apenas uma vez. Sem mensalidade. Sem taxas escondidas."
- Manter estilo text-muted-foreground, tamanho lg

### 4. Video Premium (Moldura MacBook)
- Envolver o iframe em um container estilizado que simule uma tela de MacBook
  - Barra superior com 3 circulos (vermelho, amarelo, verde) simulando janela de navegador/Mac
  - Cantos arredondados maiores
  - Sombra mais forte (shadow-2xl com glow)
- Adicionar badge no canto superior direito do video: "Demonstracao Oficial do Sistema"

### 5. Bullets Atualizados
- Novos bullets:
  - WhatsApps ilimitados
  - Atendentes ilimitados
  - Codigo Fonte Incluso
  - White Label Completo
  - IA integrada (Gemini ou OpenAI)
- Adicionar frase abaixo dos bullets: "Voce compra uma vez. O sistema e seu." (em texto branco semi-bold, levemente maior)

### 6. Micro Autoridade
- Adicionar secao abaixo do video com 3 metricas lado a lado:
  - "+100 Empresas ja utilizam" 
  - "0 Mensalidades"
  - "100% Controle"
- Estilo: numeros grandes em branco bold, descricao menor em muted, separados por divisores verticais

### 7. Fundo Visual Rico
- Adicionar mais camadas de blur shapes:
  - Gradiente radial azul maior no centro (blue-500/15)
  - Blur shape roxo no canto esquerdo (purple-500/10)
  - Blur shape verde sutil no topo (green-500/5)
- Adicionar overlay de textura noise via CSS (background-image com SVG noise sutil, opacity muito baixa)
- Adicionar pequenos circulos decorativos flutuantes com animacao float (partículas discretas)

### 8. Botao CTA
- Manter verde com glow
- Adicionar subtexto abaixo do botao: "Acesso imediato apos o pagamento" em texto pequeno muted

---

## Detalhes Tecnicos

**HeroSection.tsx** -- reescrever completamente com:
- Badge com classes: `bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 py-2 rounded-full text-sm glow-green-sm`
- Headline com `<span className="text-green-400">` para destaque
- Moldura MacBook: div com barra superior contendo 3 circulos + container glass com shadow maior
- Secao de metricas com flex row, gap e separadores
- Particulas: 3-4 divs absolutos pequenos com animacao `animate-float` e delays diferentes
- Textura noise: pseudo-elemento CSS com SVG data URI de noise pattern

**index.css** -- adicionar:
- Classe `.noise-bg` com background-image SVG noise sutil (opacity 0.02-0.03)
