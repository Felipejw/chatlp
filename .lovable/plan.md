
# Ajustes e Melhorias na Landing Page

## Resumo das Mudancas

### 1. Hero Section (1a Dobra) -- Reposicionar VSL e remover botao
- Mover a VSL (video do YouTube) para logo abaixo da subheadline, antes dos bullet points
- Incorporar o video real do YouTube (https://youtu.be/JafFc14Xsco) via iframe embed
- Remover o botao "Ver Demonstracao"
- Manter apenas o botao "Comprar Agora por R$97", agora em verde

### 2. Segunda Dobra -- Reformular como secao de diferenciais
- Substituir o formato comparativo atual (lado a lado com X e Check) por uma secao mais visual e atrativa que apresente os diferenciais do sistema
- Criar cards individuais com icones para cada diferencial: Pagamento Unico, Atendentes Ilimitados, White Label, Codigo Fonte Incluso, IA Integrada, Sem Mensalidade
- Layout em grid responsivo com glassmorphism e animacoes de entrada

### 3. Todos os CTAs em verde e centralizados
- Alterar a cor de todos os botoes CTA de roxo/primary para verde (bg-green-500/600)
- Garantir que todos estejam centralizados (text-center) -- a maioria ja esta, revisar cada secao
- Atualizar o glow effect dos botoes para verde
- Secoes afetadas: HeroSection, ComparisonSection (agora Diferenciais), FeaturesGrid, ChatbotAISection, ShowcaseSection, TestimonialsSection, FAQSection, ClosingSection, FloatingElements (barra mobile)

---

## Detalhes Tecnicos

**HeroSection.tsx:**
- Remover import do icone `Play`
- Remover o botao "Ver Demonstracao"
- Mover o bloco VSL para logo apos a subheadline (linha 38), antes dos bullets
- Trocar o placeholder por um iframe do YouTube: `https://www.youtube.com/embed/JafFc14Xsco`
- Alterar classe do botao CTA para `bg-green-500 hover:bg-green-600` e glow verde
- Remover `animate-glow-pulse` ou adaptar para verde

**ComparisonSection.tsx:**
- Reformular completamente: trocar de comparativo para secao de diferenciais
- Criar array de 6 diferenciais com icone, titulo e descricao curta
- Layout em grid 2x3 ou 3x2 com cards glass
- Titulo: "Por que escolher o Chatbot WhatsApp?"
- CTA verde centralizado ao final

**Todos os componentes com CTA (FeaturesGrid, ChatbotAISection, ShowcaseSection, TestimonialsSection, FAQSection, ClosingSection, FloatingElements):**
- Trocar `bg-primary hover:bg-primary/90` por `bg-green-500 hover:bg-green-600`
- Trocar `glow-primary` por box-shadow verde customizado inline ou nova classe utilitaria
- Adicionar classe `.glow-green` no index.css para reutilizacao

**index.css:**
- Adicionar classe utilitaria `.glow-green` com box-shadow verde
