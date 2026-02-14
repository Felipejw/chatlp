
# Ajustes Estrategicos na Dobra 7 (OfferSection)

## Resumo
Aplicar melhorias de copy, hierarquia, credibilidade e conversao na secao de oferta, seguindo as recomendacoes estrategicas fornecidas.

## Mudancas

### 1. Headline mais decisiva
**De:** "A automacao mais completa do WhatsApp / por um unico pagamento"
**Para:** "Hoje voce paga R$97 / e elimina mensalidades para sempre"

Subtitulo verde: "Outras plataformas cobram R$200/mes. Aqui voce paga uma unica vez."

### 2. Reordenar lista de features (diferenciais primeiro)
Nova ordem:
1. Pagamento unico vitalicio (com destaque visual - texto bold ou cor diferente)
2. WhatsApps ilimitados
3. Atendentes ilimitados e crie setores
4. Chatbot com I.A. Inclusa (Sem Custo Extra)
5. Integracao com Instagram e Facebook
6. Disparo em Massa para sua lista de contatos
7. Agendamento de Mensagens
8. Dashboard de Atendimento em tempo real
9. API e Integracoes (Typebot, Dialogflow, etc)

Os 3 primeiros itens terao texto em `font-semibold` para destaque.

### 3. Ajustar escassez (mais credivel)
**De:** "Oferta disponivel somente hoje!" (agressivo/artificial)
**Para:** "Preco promocional por tempo limitado" (credivel)

### 4. Preco mais proximo do botao + comparacao de mercado
Reordenar o card: Features → Escassez → Comparacao de mercado → Preco → Garantia → Social proof → CTA

Adicionar linha de comparacao acima do preco:
"Plataformas similares: a partir de R$200/mes" (texto pequeno, muted)

### 5. Selo de garantia colado no botao
Adicionar logo acima do CTA:
Icone de escudo + "Garantia incondicional de 7 dias" com estilo badge/pill

### 6. Social proof antes do botao
Adicionar frase logo antes do botao:
"Mais de 100 empresas ja utilizam. Garanta seu acesso agora."

### 7. Remover aviso amarelo generico
Substituir o "Esse preco pode mudar a qualquer momento" pelo reforco de social proof e garantia (menos agressivo, mais persuasivo).

## Estrutura Final do Card

```text
+----------------------------------------------------+
|  [timer] Preco promocional por tempo limitado      |
|          04 : 32                                   |
+----------------------------------------------------+

[v] **Pagamento unico vitalicio**
[v] **WhatsApps ilimitados**
[v] **Atendentes ilimitados e crie setores**
[v] Chatbot com I.A. Inclusa (Sem Custo Extra)
[v] Integracao com Instagram e Facebook
[v] Disparo em Massa
[v] Agendamento de Mensagens
[v] Dashboard em tempo real
[v] API e Integracoes

Plataformas similares: a partir de R$200/mes
De R$197,00  (riscado)
R$97,00      (grande, verde)

[check] Pagamento unico, sem mensalidade.
[escudo] Garantia incondicional de 7 dias

Mais de 100 empresas ja utilizam.

[ Comprar Agora por R$97 ]
```

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/OfferSection.tsx`

### Importacoes
- Adicionar `ShieldCheck` do Lucide (para icone de garantia)
- Manter imports existentes

### Features array
- Reordenar itens e adicionar campo `highlight: boolean` nos 3 primeiros (ou usar indice < 3 para aplicar `font-semibold`)

### Garantia
- Badge com `ShieldCheck` + texto, estilo `border border-primary/30 rounded-full px-4 py-1.5`
- Posicionado entre preco e botao

### Social proof
- Texto `text-sm text-muted-foreground` centralizado, logo acima do CTA

### Mobile
- Preco e botao ja ficam visiveis sem muito scroll (card compacto)
- Botao com `py-6 text-lg` (ja existente, manter)
