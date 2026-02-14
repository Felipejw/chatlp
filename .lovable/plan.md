

# Reformulacao Completa da Dobra 3 (Features Grid)

## Resumo
Transformar a grade de funcionalidades de uma lista tecnica uniforme para uma secao categorizada com hierarquia visual, copy orientada a resultados e destaque nos 3 recursos principais.

---

## Mudancas Detalhadas

### 1. Novo Titulo (Posicionamento Estrategico)
- **Atual:** "Tudo que voce precisa, em um so lugar"
- **Novo:** "A Central Completa de Atendimento e Vendas no WhatsApp"
- Subtitulo: "+14 funcionalidades para automatizar, organizar e escalar seu negocio."

### 2. Categorias Visuais (3 Blocos)
Organizar os 14 cards em 3 categorias com labels visuais:

- **AUTOMACAO** (glow verde) -- IA, Chatbot Visual, Disparo em Massa, Agendamentos
- **GESTAO** (glow azul) -- CRM Integrado, Atendimento Multiusuario, Setores, Transferencia, Tags
- **CRESCIMENTO** (glow roxo) -- Dashboard, Relatorios, API Docs, Integracoes, Tutoriais

Cada categoria tera um label/badge pequeno acima do grupo de cards.

### 3. Destaque nos 3 Principais (Hero Features)
Os cards de **IA Gemini/OpenAI**, **Chatbot Visual** e **Disparo em Massa** terao:
- Icone maior (~w-10 h-10 vs w-8 h-8)
- Glow mais forte na cor da categoria
- Borda levemente visivel
- Padding um pouco maior

### 4. Copy Orientada a Resultados
Reescrever todas as descricoes para vender beneficio, nao funcao:

- **Atendimento Multiusuario:** "Varios atendentes trabalhando ao mesmo tempo, sem perder conversas."
- **CRM Integrado:** "Organize, acompanhe e feche mais negocios dentro do WhatsApp."
- **Disparo em Massa:** "Envie campanhas para sua base e gere novas oportunidades de venda."
- **Chatbot Visual:** "Crie fluxos automatizados em minutos, sem precisar programar."
- **IA Gemini/OpenAI:** "Respostas automaticas inteligentes 24/7, mesmo quando voce esta offline."
- **Integracoes:** "Conecte com as ferramentas que voce ja usa no dia a dia."
- **API Docs:** "Documentacao completa para integracoes personalizadas."
- **Tags:** "Segmente e organize seus contatos para acoes mais inteligentes."
- **Setores:** "Direcione conversas para o departamento certo automaticamente."
- **Transferencia:** "Transfira atendimentos entre agentes sem perder o historico."
- **Agendamentos:** "Agende atendimentos e follow-ups sem sair do sistema."
- **Relatorios:** "Acompanhe metricas de atendimento e tome decisoes com dados."
- **Dashboard:** "Visao completa do seu negocio em tempo real, em um so painel."
- **Tutoriais:** "Area de membros com videos e guias para dominar o sistema."

### 5. Cores por Categoria
- Cards de AUTOMACAO: hover com glow verde (`hover:border-green-500/30`, `hover:shadow-[0_0_20px_hsl(142_71%_45%/0.2)]`)
- Cards de GESTAO: hover com glow azul (`hover:border-blue-500/30`, `hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)]`)
- Cards de CRESCIMENTO: hover com glow roxo (`hover:border-purple-500/30`, `hover:shadow-[0_0_20px_hsl(270_70%_60%/0.2)]`)
- Icones seguem a cor da categoria

### 6. Icones Maiores
- Todos os icones aumentados de `w-8 h-8` para `w-9 h-9`
- Cards destacados: `w-10 h-10`
- Adicionar drop-shadow sutil nos icones na cor da categoria

### 7. CTA Aprimorado
- Botao maior com `px-10 py-6 text-lg`
- Subtexto: "Pagamento unico . Acesso imediato . Sem mensalidade"

---

## Detalhes Tecnicos

**FeaturesGrid.tsx** -- reescrever completamente:
- Criar 3 arrays separados (automacao, gestao, crescimento) ou 1 array com campo `category`
- Cada feature tera: `icon`, `title`, `desc`, `category` ("automacao" | "gestao" | "crescimento"), `highlighted` (boolean)
- Renderizar 3 blocos com label de categoria acima (badge pequeno com cor correspondente)
- Cards destacados com classes condicionais para icone maior, glow mais forte e borda visivel
- Cores dos icones: `text-green-400` (automacao), `text-blue-400` (gestao), `text-purple-400` (crescimento)
- Hover classes por categoria com shadow customizado
- Grid mantido em `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` dentro de cada categoria
- Labels de categoria: `<span className="text-xs font-bold uppercase tracking-wider text-green-400 mb-4 block">Automacao</span>`

