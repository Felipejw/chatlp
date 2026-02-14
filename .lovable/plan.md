

# Reformulacao Completa da Dobra 2 (Diferenciais)

## Resumo
Transformar a secao de diferenciais de uma grade informativa e uniforme para uma dobra de alto impacto com hierarquia visual clara, copy persuasiva com contraste competitivo e microinteracoes premium.

---

## Mudancas Detalhadas

### 1. Card Destaque -- "Pagamento Unico" (Hero Card)
- O card "Pagamento Unico" sera maior, ocupando 2 colunas no desktop (col-span-2)
- Tera borda verde visivel (`border-green-500/40`), glow verde mais forte e fundo levemente mais claro (`bg-green-500/10`)
- Icone maior (w-16 h-16) com gradiente verde
- Texto maior e mais impactante
- Nova copy: **"Pague Uma Vez. Use Para Sempre."** com subtexto: "Enquanto outros cobram R$200+/mes, voce investe R$97 uma unica vez e o sistema e seu para sempre."

### 2. Reescrita Completa dos Textos (Copy Persuasiva)
Substituir todos os textos por versoes com mais emocao, contraste e senso de propriedade:

- **Pagamento Unico** -> "Pague Uma Vez. Use Para Sempre." / "Enquanto outros cobram R$200+/mes, voce investe R$97 uma unica vez e o sistema e seu para sempre."
- **Atendentes Ilimitados** -> "Escale Sem Pagar Mais" / "Adicione 10, 50 ou 100 atendentes. Zero custo extra. Seus concorrentes pagam por cada um."
- **White Label** -> "Sua Marca, Seu Negocio" / "Remova qualquer rastro e revenda como produto proprio. Crie uma nova fonte de receita."
- **Codigo Fonte Incluso** -> "Controle Total na Sua Mao" / "Hospede onde quiser, customize como quiser. Sem depender de ninguem."
- **IA Integrada** -> "IA Que Trabalha Por Voce" / "Gemini gratuito ou OpenAI. Respostas inteligentes 24/7 sem voce levantar um dedo."
- **Sem Mensalidade** substituido por **"Suporte + Atualizacoes"** -> "Evolucao Continua" / "Receba melhorias e suporte da comunidade. O sistema cresce junto com seu negocio."

### 3. Frase Estrategica Abaixo do Titulo
- Adicionar uma frase de contraste logo abaixo do subtitulo atual:
- **"Enquanto outras plataformas cobram mensalidades eternas, voce paga uma vez e tem controle total."**
- Estilo: texto branco semi-bold, levemente maior que o subtitulo, com destaque verde em "paga uma vez"

### 4. Microinteracoes e Hover Premium
- Hover nos cards: elevacao com `translate-y -2px`, aumento de glow, borda mais visivel
- Icones: fundo com gradiente sutil (de green-500/15 para green-400/25 no hover)
- Titulos dos cards com `text-white` (mais contraste) em vez de herdar foreground padrao

### 5. Layout com Hierarquia Visual
- Desktop: card destaque ocupa 2 colunas na primeira linha, os outros 4 cards em grid 2x2 abaixo (ou 2+3 com assimetria)
- Alternativa: grid de 3 colunas onde o primeiro card (Pagamento Unico) tem altura e padding maiores
- Mobile: cards empilhados com card destaque tendo padding e fonte maiores, mais espaco vertical entre cards (gap-4 para gap-6)

### 6. Cores e Vibrancia
- Glow nos cards levemente mais intenso (de green-500/30 para green-500/40)
- Titulos dos cards em branco puro (`text-white`) para mais contraste
- Icones com `text-green-400` mantido mas com drop-shadow sutil verde

---

## Detalhes Tecnicos

**ComparisonSection.tsx** -- reescrever completamente:
- Novo array de diferenciais com copy atualizada e flag `featured: true` no primeiro item
- Renderizacao condicional: card featured com `sm:col-span-2 lg:col-span-2`, padding maior (`p-8`), icone maior, borda verde, glow mais forte
- Cards normais mantendo `p-6` com hover melhorado (`hover:-translate-y-1 hover:shadow-lg`)
- Substituir icone `Ban` por `Headphones` ou `RefreshCw` (para Suporte + Atualizacoes)
- Frase de contraste entre subtitulo e grid: `<p className="text-white/90 font-semibold text-lg max-w-3xl mx-auto mt-4">Enquanto outras plataformas cobram mensalidades eternas, voce <span className="text-green-400">paga uma vez</span> e tem controle total.</p>`
- Grid com `gap-5 md:gap-6` para melhor espacamento mobile
- Hover classes: `hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_25px_hsl(142_71%_45%/0.3)]`
- Titulos com `text-white font-bold` para contraste
- CTA mantido verde com glow

