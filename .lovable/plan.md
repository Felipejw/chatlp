
# Carrossel Premium na Dobra 5

## Resumo
Substituir o grid de screenshots por um carrossel premium no desktop: 1 print grande central com setas laterais e miniaturas clicaveis abaixo.

## Layout Final (Desktop)

```text
                    [ < ]   PRINT GRANDE CENTRAL   [ > ]

          [mini1] [mini2] [mini3] [mini4] [mini5] [mini6] ...
```

## O que muda

### Desktop - Carrossel com foco central
- **Print grande**: BrowserFrame ocupando `max-w-4xl` centralizado com animacao de transicao (fade/slide) ao trocar
- **Setas laterais**: Botoes com icone `ChevronLeft` / `ChevronRight` posicionados nos lados do print grande, estilo glass com hover glow
- **Miniaturas abaixo**: Linha horizontal de thumbnails pequenos (~120px largura) com borda destacada no ativo, clicaveis para navegar
- **Transicao**: AnimatePresence do Framer Motion para fade suave entre prints

### Mobile - Mantem carrossel atual
- Sem mudancas no comportamento mobile (Embla swipe horizontal ja funciona bem)

### Lightbox - Mantem
- Click no print grande continua abrindo lightbox fullscreen

## Detalhes Tecnicos

### Arquivo: `src/components/landing/ShowcaseSection.tsx`

**Estado**: `activeIndex` controla qual screenshot esta visivel no centro

**Navegacao**:
- Setas: `prev()` e `next()` alteram `activeIndex` com wrap-around (volta ao inicio/fim)
- Thumbnails: click direto seta `activeIndex`

**Print grande**:
- Usa `AnimatePresence` + `motion.div` com `key={activeIndex}` para animar transicoes
- BrowserFrame existente reutilizado sem mudancas

**Thumbnails**:
- Grid horizontal com `flex` e `gap-3`, `overflow-x-auto` com scrollbar hidden
- Cada thumbnail: imagem pequena com `rounded-lg`, `border-2` (branco/primary quando ativo, transparente quando inativo)
- Opacity reduzida nos inativos (`opacity-50 hover:opacity-80`)

**Setas**:
- Botoes absolutos nas laterais do container do print grande
- Estilo: `glass` background, `rounded-full`, `w-12 h-12`, icone `ChevronLeft`/`ChevronRight`
- Hover: glow sutil

**Remocoes**:
- Remove as variaveis `featured` e `regular` (nao mais necessarias)
- Remove o grid desktop de 2 colunas + 4 colunas
