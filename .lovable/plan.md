

# Dobra 6 - Depoimentos Premium com Hierarquia e Copy Forte

## Resumo
Transformar a secao de depoimentos de 3 cards iguais para um layout com hierarquia visual: 1 depoimento destaque (economia) + 2 menores. Copy mais forte e especifica. Carrossel horizontal no mobile.

## O que muda

### 1. Copy atualizada

**Titulo da secao**: "Quem usa, recomenda" (mantido - ja e bom)

**Depoimento 1 (DESTAQUE)**:
- "Eu pagava R$297 por mes em outra plataforma. Hoje paguei R$97 uma unica vez e economizei mais de R$3.000 no ano. Tenho controle total do meu atendimento."

**Depoimento 2**:
- "A IA resolve cerca de 80% das duvidas sozinha. Nosso tempo de resposta caiu de 15 minutos para poucos segundos. Os pacientes adoram o atendimento rapido."

**Depoimento 3**:
- "Instalei como White Label para meus clientes e ja recuperei o investimento nas primeiras semanas. Melhor decisao que tomei pro meu negocio."

### 2. Layout com hierarquia (Desktop)

```text
+--------------------------------------------------+
|                                                  |
|        DEPOIMENTO 1 - GRANDE (destaque)          |
|        glow-primary, texto maior, avatar maior   |
|                                                  |
+--------------------------------------------------+

    +---------------------+  +---------------------+
    |  DEPOIMENTO 2       |  |  DEPOIMENTO 3       |
    |  tamanho normal     |  |  tamanho normal      |
    +---------------------+  +---------------------+
```

- Depoimento 1: `col-span-full`, padding maior (`p-8`), texto maior (`text-base`), avatar maior (`w-14 h-14`), borda com gradient e `glow-primary-sm` permanente, badge "Mais popular" ou icone de aspas decorativo
- Depoimentos 2 e 3: `grid-cols-2`, estilo atual com `glass` e hover glow

### 3. Elementos visuais adicionais
- Icone de aspas decorativo (`"`) grande e semi-transparente no canto superior direito do card destaque
- Badge ou tag sutil no card principal (ex: destaque com borda gradient)
- Avatares com anel colorido (borda `ring-2 ring-primary/50`) no destaque

### 4. Mobile
- Carrossel horizontal com Embla (1 depoimento por vez, swipe)
- Card destaque aparece primeiro
- Dots indicadores abaixo
- CTA logo depois

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/TestimonialsSection.tsx`

### Estrutura de dados
- Adicionar campo `featured: true` ao primeiro depoimento no array
- Renderizacao condicional de estilos baseada no campo `featured`

### Desktop
- Container `max-w-4xl mx-auto`
- Card featured: `glass-strong` + `gradient-border` + `glow-primary-sm` permanente, `p-8`, texto `text-base`, avatar `w-14 h-14`
- Aspas decorativas: pseudo-elemento ou `<span>` com `text-6xl opacity-10 absolute top-4 right-6`
- Cards normais: grid `grid-cols-2 gap-6 mt-6`

### Mobile
- Importar Embla (`useEmblaCarousel`)
- Cards com `flex-[0_0_85%]` para mostrar peek do proximo
- Dots indicator (circulos pequenos, ativo = `bg-primary`, inativo = `bg-white/20`)
- Breakpoint: `md:` para alternar entre carrossel e grid

### Animacoes
- Manter `motion.div` com `whileInView` fade-in existente
- Card featured com delay 0, cards normais com delay 0.1 e 0.2

