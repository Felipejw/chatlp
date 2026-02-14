

# Nova Dobra de Garantia (acima do FAQ)

## Resumo
Criar uma secao de garantia entre a OfferSection e a FAQSection, inspirada no print de referencia. Layout horizontal com icone de escudo a esquerda e texto de garantia a direita, dentro de um card com fundo glass.

## Estrutura Visual

```text
+------------------------------------------------------------------+
|                                                                  |
|   [ShieldCheck]   Sua Compra e 100% Segura!                     |
|                                                                  |
|                   O codigo de defesa do consumidor (Art. 49)     |
|                   garante 7 dias de garantia incondicional!      |
|                   Se nao gostar, devolvemos seu dinheiro         |
|                   sem perguntas.                                 |
|                                                                  |
+------------------------------------------------------------------+
```

## Mudancas

### 1. Novo componente `GuaranteeSection.tsx`
O arquivo ja existe mas tem um layout diferente (centralizado com botao CTA). Sera reescrito para seguir o estilo do print de referencia:

- Layout horizontal (flex row) em desktop, empilhado em mobile
- Icone grande de escudo (ShieldCheck) a esquerda dentro de um circulo com fundo verde/primary
- Titulo em negrito: "Sua Compra e 100% Segura!"
- Texto descritivo mencionando Art. 49, 7 dias de garantia incondicional, devolucao sem perguntas
- "7 dias de garantia incondicional" em destaque (texto verde/primary e bold)
- Card com fundo glass, max-width ~4xl, centralizado

### 2. Integracao no Index.tsx
- Importar GuaranteeSection
- Inserir entre OfferSection e FAQSection

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/GuaranteeSection.tsx` (reescrito)
- `src/pages/Index.tsx` (adicionar import e componente)

### Estilo do card
- `glass rounded-2xl p-8 md:p-10 max-w-4xl mx-auto`
- Flex row com gap, alinhamento centralizado verticalmente
- Icone em circulo `w-20 h-20 bg-green-500/15 rounded-full` com `ShieldCheck` verde

### Animacao
- `motion.div` com fade-in via `whileInView`

### Sem botao CTA
- Diferente da versao atual, esta dobra nao tera botao (apenas reforco de confianca)

