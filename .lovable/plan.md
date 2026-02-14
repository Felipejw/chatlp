

# Ajustes Estrategicos na Dobra de Duvidas Frequentes

## Resumo
Atualizar a copy das 7 perguntas do FAQ para reforcar seguranca, pagamento unico e valor percebido. Adicionar selos visuais de confianca acima do botao CTA.

## Mudancas

### 1. Atualizar respostas do FAQ

Cada resposta sera reescrita para ser mais persuasiva e eliminar objecoes:

| Pergunta | Resposta Atual | Nova Resposta |
|----------|---------------|---------------|
| E pagamento unico mesmo? | Sim! Voce paga apenas R$97... | Sim. Voce paga apenas R$97 uma unica vez e o sistema e seu. Sem mensalidade, sem taxa recorrente e sem surpresas futuras. |
| Preciso pagar mensalidade? | Nao. Diferente de outras plataformas... | Nao. Diferente de outras plataformas que cobram mensalmente, aqui voce paga uma unica vez e tem acesso vitalicio. |
| Funciona com quantos WhatsApps? | Ilimitados! Voce pode conectar... | Voce pode conectar multiplos numeros e adicionar quantos atendentes precisar. Sem cobranca por usuario. |
| Preciso saber programar? | Nao. O sistema possui interface... | Nao. O sistema possui construtor visual drag-and-drop. Voce monta fluxos sem escrever codigo. |
| Voces instalam para mim? | Sim! Oferecemos instalacao... | Sim. Apos a compra voce recebe o codigo fonte e tutoriais completos. Caso prefira, pode contratar nossa instalacao por R$97. |
| Recebo atualizacoes? | Sim, todas as atualizacoes... | Sim. Voce recebe atualizacoes e melhorias continuas sem custo adicional. |
| A IA e gratuita? | Sim! A integracao com o Gemini... | Sim. A integracao com Gemini esta inclusa sem custo extra. Caso queira, pode integrar a OpenAI opcionalmente. |

### 2. Adicionar selos de confianca acima do botao CTA

Tres badges horizontais entre o FAQ e o botao:

```text
[escudo] Compra 100% segura    [cadeado] Pagamento unico    [raio] Acesso imediato
```

- Layout: flex row centralizado, com gap
- Cada selo: icone + texto pequeno
- Estilo: `text-sm text-muted-foreground` com icones em `text-green-500`
- Responsivo: flex-wrap em mobile

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/FAQSection.tsx`

### Importacoes adicionais
- `ShieldCheck`, `Lock`, `Zap` do Lucide

### Selos
- Div flex entre o Accordion e o botao
- Tres itens inline com icone 16px e texto

