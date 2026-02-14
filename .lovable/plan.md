

# Nova Dobra: Oferta com Countdown Timer

## Resumo
Criar uma secao de oferta/pricing entre Depoimentos e FAQ, inspirada no print de referencia. Inclui titulo forte, subtitulo, countdown timer, checklist de funcionalidades, preco com ancora e CTA verde.

## Estrutura Visual

```text
+----------------------------------------------------------+
|  [icone] A automacao mais completa do WhatsApp            |
|          por um unico pagamento                           |
|                                                          |
|  [check] Subtitulo descritivo                            |
|                                                          |
|  +----------------------------------------------------+  |
|  |                                                    |  |
|  |  +----------------------------------------------+  |  |
|  |  |  [timer] Oferta disponivel somente hoje!     |  |  |
|  |  |          00 : 03 : 34                        |  |  |
|  |  +----------------------------------------------+  |  |
|  |                                                    |  |
|  |  [v] Gerencie +100 Numeros de WhatsApp            |  |
|  |  [v] Chatbot com I.A. Inclusa (Sem Custo Extra)   |  |
|  |  [v] Integracao com Instagram e Facebook          |  |
|  |  [v] Disparo em Massa para sua lista de contatos  |  |
|  |  [v] Adicione +100 Atendentes e crie setores      |  |
|  |  [v] Agendamento de Mensagens                     |  |
|  |  [v] Dashboard de Atendimento em tempo real       |  |
|  |  [v] API e Integracoes (Typebot, Dialogflow, etc) |  |
|  |  [v] Acesso Vitalicio e Atualizacoes Gratuitas    |  |
|  |                                                    |  |
|  |  Aviso de urgencia sobre preco                     |  |
|  |                                                    |  |
|  |  De R$197,00  (riscado)                           |  |
|  |  R$97,00      (grande, verde)                     |  |
|  |                                                    |  |
|  |  [check] Pagamento unico, sem mensalidade.        |  |
|  |                                                    |  |
|  |  [ Comprar Agora por R$97 ]  (botao verde glow)   |  |
|  +----------------------------------------------------+  |
+----------------------------------------------------------+
```

## Detalhes Tecnicos

### Novo arquivo
- `src/components/landing/OfferSection.tsx`

### Countdown Timer
- Estado com `useState` + `useEffect` com `setInterval` de 1 segundo
- Inicia em um tempo fixo (ex: 5 minutos) e decrementa
- Exibe `HH:MM:SS` formatado com `padStart(2, '0')`
- Borda verde pontilhada ao redor do bloco do timer
- Icone `Clock` do Lucide

### Checklist
- Array de strings com as 9 funcionalidades do print
- Cada item com icone `CheckSquare` ou `SquareCheck` verde (cor `text-green-500`)
- Texto em `text-sm` ou `text-base`

### Preco
- Preco antigo `R$197,00` com `line-through text-muted-foreground`
- Preco atual `R$97,00` em `text-5xl font-bold text-green-500`
- Centavos em `text-2xl` sobrescrito

### Card central
- Fundo claro levemente diferente: `bg-white/5` ou `glass` com borda sutil
- `rounded-2xl`, `max-w-2xl mx-auto`, `p-8`

### Secao externa
- Fundo com gradiente sutil ou `noise-bg`
- Titulo com icone decorativo (ex: `Bot` do Lucide)
- Subtitulo com icone `CheckCircle`

### CTA
- Botao verde full-width dentro do card: `glow-green bg-green-500`
- Icone `ShoppingCart` antes do texto
- Link para `https://chatbotwhatsapp.store/`

### Badge "Pagamento unico"
- Pill/badge com icone `CheckCircle` e texto "Pagamento unico, sem mensalidade."
- Estilo: `border border-green-500/30 rounded-full px-4 py-1 text-sm`

### Animacoes
- `motion.div` com `whileInView` fade-in para o bloco inteiro

### Integracao
- Importar em `Index.tsx` entre `TestimonialsSection` e `FAQSection`

