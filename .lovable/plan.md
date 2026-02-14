

# Ajustes Finos na Dobra 3 (Features Grid)

## Resumo
Aplicar refinamentos visuais e de copy na secao de funcionalidades para aumentar a presenca dos titulos de categoria, melhorar contraste dos textos e afiar a copy.

---

## Mudancas

### 1. Titulos de Categoria com Mais Destaque
- Aumentar fonte de `text-xs` para `text-sm`
- Adicionar linha horizontal ao lado do texto (usando flex + hr/divider com cor da categoria)
- Layout: texto a esquerda + linha que preenche o restante da largura
- Resultado visual: "AUTOMACAO ————————————————"

### 2. Icones 10% Maiores
- Cards normais: de `w-9 h-9` para `w-10 h-10`
- Cards destacados: de `w-10 h-10` para `w-11 h-11`

### 3. Mais Contraste nos Textos Secundarios
- Descricoes: de `text-xs text-muted-foreground` para `text-sm text-muted-foreground/80`
- Titulos dos cards: de `text-sm` para `text-base` com `text-white`

### 4. Ajustes de Copy
- **IA Gemini/OpenAI:** "...mesmo quando **sua equipe** esta offline." (em vez de "voce")
- **CRM Integrado:** "...sem sair do WhatsApp." (em vez de "dentro do WhatsApp")
- **Dashboard:** "Visao completa do seu atendimento e vendas em tempo real, em um unico painel."

---

## Detalhes Tecnicos

**Arquivo:** `src/components/landing/FeaturesGrid.tsx`

**Titulo de categoria** -- substituir o `<span>` simples por um flex container:
```
<div className="flex items-center gap-3 mb-5">
  <span className="text-sm font-bold uppercase tracking-wider {config.color} whitespace-nowrap">
    {config.label}
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-{cor}/30 to-transparent" />
</div>
```
A cor do gradiente sera dinamica por categoria (green, blue, purple) -- definida no `categoryConfig`.

**Icones** -- ajustar tamanhos:
- Normal: `w-10 h-10`
- Highlighted: `w-11 h-11`

**Textos** -- ajustar classes:
- Titulo do card: `text-base font-semibold text-white`
- Descricao: `text-sm text-muted-foreground/80 leading-relaxed`

**Copy** -- atualizar 3 strings no array `features`.

