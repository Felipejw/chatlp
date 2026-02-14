
# Mockup em Formato de Celular na Dobra 4

## Resumo
Envolver o mockup do chat simulado dentro de um frame visual de smartphone, dando a aparencia de um celular real exibindo o aplicativo. A interacao animada (conversa, typing dots, builder nodes) permanece identica -- apenas o container externo muda.

---

## O que muda

### Frame de celular ao redor do mockup
O componente `MockupBuilder` sera envolvido por um container estilizado como um smartphone:

- **Moldura externa**: borda arredondada grossa (~3px) cinza escuro, aspect-ratio de celular (~9:19), com cantos bem arredondados (`rounded-[2.5rem]`)
- **Notch/barra de status**: pequena barra no topo com hora, icones de sinal/wifi/bateria simulados (texto estatico)
- **Barra inferior**: linha horizontal fina simulando o indicador home do iPhone
- **Sombra e glow**: sombra externa + glow sutil roxo ao redor do dispositivo

### Conteudo interno inalterado
- Barra "Bot Ativo", builder nodes e chat animado permanecem exatamente como estao
- Apenas ficam "dentro" do frame do celular
- Altura fixa do dispositivo para manter proporcao realista

### Responsividade
- No mobile real, o celular mockup sera menor (max-w ajustado) para caber na tela
- No desktop, tamanho confortavel (~280px de largura)

---

## Detalhes Tecnicos

### Arquivo modificado
- `src/components/landing/ChatbotAISection.tsx`

### Estrutura do frame
```text
+---(moldura cinza escuro, rounded-[2.5rem])---+
|  [ 9:41  ----  sinal wifi bateria ]          |  <- status bar
|  +----------------------------------------+  |
|  | [o] Bot Ativo           ● online       |  |  <- titulo app
|  +----------------------------------------+  |
|  | [Inicio] --> [Pergunta] --> [IA]       |  |  <- builder nodes
|  +----------------------------------------+  |
|  |                                        |  |
|  |  Cliente: "Qual o preco?"              |  |  <- chat
|  |  Bot: "R$97, pagamento unico!"         |  |
|  |  ...                                   |  |
|  +----------------------------------------+  |
|              ____                            |  <- home indicator
+----------------------------------------------+
```

### Implementacao
- Wrapper `div` com classes: `relative mx-auto w-[280px] bg-black/80 rounded-[2.5rem] p-3 border-[3px] border-white/15 shadow-2xl`
- Status bar: `div` com textos estaticos (9:41, icones em texto) em `text-[10px] text-white/60`
- Home indicator: `div` com `w-28 h-1 bg-white/20 rounded-full mx-auto mb-2 mt-3`
- O `MockupBuilder` atual fica dentro, com seus rounded ajustados para `rounded-xl` (menos arredondado, ja que o frame externo cuida disso)
- O `animate-glow-pulse` move do MockupBuilder para o frame externo
