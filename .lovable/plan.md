

# Otimizacao Mobile

## Resumo
Melhorar a experiencia mobile com carrossel horizontal por categoria na dobra de Features e barra de acesso rapido no rodape fixo.

---

## Mudancas

### 1. Feature Cards com Carrossel Horizontal no Mobile
Na dobra 3 (FeaturesGrid), no mobile cada categoria vira um carrossel horizontal swipeable:
- Cards com largura de ~85% da tela para mostrar parcialmente o proximo (efeito "peek")
- Dots de navegacao abaixo de cada carrossel
- No desktop, o grid atual permanece inalterado
- Usa `embla-carousel-react` (ja instalado no projeto)

### 2. Barra de Acesso Rapido no Mobile
Expandir a barra inferior fixa para incluir mini-navegacao alem do botao CTA:

```text
+---------------------------------------------------+
| [Recursos] [Demo] [FAQ]  |  Comprar por R$97      |
+---------------------------------------------------+
```

- 3 icones pequenos com label de 10px para scroll rapido ate as secoes (#features, #showcase, #faq)
- Botao CTA ocupa ~50% da largura
- Smooth scroll ao tocar nos icones

### 3. Showcase com Swipe no Mobile
Os 4 cards da ShowcaseSection viram carrossel horizontal no mobile com swipe e dots, em vez de grid 2x2.

---

## Detalhes Tecnicos

### FeaturesGrid.tsx
- Importar `useIsMobile` de `@/hooks/use-mobile`
- Importar `useEmblaCarousel` de `embla-carousel-react`
- Condicional: no mobile, renderizar cards dentro de container embla horizontal; no desktop, manter grid
- Cada card no carrossel com `min-w-[85%]` e `snap-center`
- Componente de dots usando `emblaApi.scrollSnapList()` e `emblaApi.selectedScrollSnap()`

### FloatingElements.tsx
- Reorganizar layout da barra inferior mobile com `flex`
- Lado esquerdo: 3 botoes icone+label (LayoutDashboard, Monitor, HelpCircle) que fazem `document.querySelector(id).scrollIntoView({ behavior: 'smooth' })`
- Lado direito: botao CTA compacto
- Importar icones de lucide-react

### ShowcaseSection.tsx
- No mobile: usar embla-carousel para os 4 cards com swipe horizontal e dots
- No desktop: manter grid sm:grid-cols-2 inalterado

### Arquivos modificados
- `src/components/landing/FeaturesGrid.tsx`
- `src/components/landing/FloatingElements.tsx`
- `src/components/landing/ShowcaseSection.tsx`

