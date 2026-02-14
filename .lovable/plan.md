

# Ajustes na Landing Page

## Mudancas

### 1. Remover o Header (menu do topo)
- Remover o componente `<Header />` da pagina `Index.tsx`
- Ajustar o padding-top do HeroSection (remover o espaco extra que compensava o header fixo)

### 2. Centralizar o conteudo da landing page
- No HeroSection, trocar o layout de grid 2 colunas para layout centralizado (texto no centro)
- Alinhar headline, subheadline, bullets e botoes ao centro da pagina
- Centralizar tambem o conteudo textual das demais secoes que estejam desalinhadas

### 3. Remover a dobra apos Depoimentos
- A secao apos TestimonialsSection e a GuaranteeSection (Garantia)
- Remover `<GuaranteeSection />` do Index.tsx

### 4. Area de VSL na primeira dobra
- Substituir o mockup lateral por um player/embed de video centralizado abaixo dos botoes do Hero
- Criar um container responsivo com aspect-ratio 16:9, estilo glass com glow, contendo um placeholder para incorporar o video (iframe ou video tag)
- O VSL ficara em destaque, logo abaixo dos CTAs

---

## Detalhes Tecnicos

**Index.tsx:**
- Remover imports de `Header` e `GuaranteeSection`
- Remover `<Header />` e `<GuaranteeSection />` do JSX

**HeroSection.tsx:**
- Remover `pt-28 md:pt-36` (padding que compensava o header) e usar padding menor
- Trocar o grid de 2 colunas por layout centralizado (`text-center`, `items-center`, `mx-auto`)
- Centralizar bullets com `justify-center`
- Centralizar botoes
- Remover o bloco do mockup lateral (coluna direita)
- Adicionar abaixo dos botoes um container VSL centralizado com aspect-ratio 16:9, estilo glass, com placeholder para embed de video

