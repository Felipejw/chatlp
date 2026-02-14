
# Dobra 5 - Showcase Premium com Prints Reais

## Resumo
Transformar a secao "Veja o Sistema por Dentro" de placeholders genericos para uma vitrine premium com screenshots reais do produto, moldura estilo MacBook, interacoes de hover/zoom e lightbox fullscreen ao clicar.

---

## O que muda

### 1. Copy atualizada
- **Titulo**: "Veja o Sistema Funcionando na Pratica"
- **Subtitulo**: "Interface profissional, pronta para empresas que querem crescer."

### 2. Screenshots reais do produto
As 8 imagens enviadas serao copiadas para `src/assets/screenshots/` e usadas no lugar dos gradientes genericos:

| Imagem | Titulo no card |
|--------|---------------|
| WhatsApp.png | Atendimento WhatsApp |
| Conexoes.png | Conexoes WhatsApp |
| Contatos.png | Gestao de Contatos |
| Disparo_em_Massa.png | Disparo em Massa |
| Agendamento.png | Agendamentos |
| Respostas_Rapidas.png | Respostas Rapidas |
| Personalizar_-_White_Label.png | White Label |
| Integracoes.png | Integracoes |

### 3. Layout com hierarquia visual (Desktop)
- **Linha 1**: 2 prints grandes (col-span completo, ~50% cada) -- WhatsApp e Disparo em Massa (telas mais ricas visualmente)
- **Linha 2**: 3 prints medios
- **Linha 3**: 3 prints medios
- Grid: `grid-cols-3` com os 2 primeiros ocupando `col-span-3 grid grid-cols-2`

### 4. Moldura estilo MacBook
Cada screenshot tera:
- Barra de titulo com 3 dots (vermelho, amarelo, verde) simulando janela de navegador
- URL bar mostrando `app.chatbotwhatsapp.store/...`
- Sombra profunda roxa/azul (`shadow-2xl` + box-shadow customizado)
- Leve rotacao no hover (perspectiva 3D sutil: `hover:rotate-x-1`)

### 5. Interacoes
- **Hover**: zoom suave na imagem (`scale-[1.03]`) + glow purple ao redor
- **Click**: abre lightbox/dialog fullscreen com a imagem em alta resolucao
- Usa `Dialog` do Radix (ja instalado) para o lightbox

### 6. Mobile
- Carrossel horizontal (Embla, ja configurado) com 1 print por vez (`flex-[0_0_90%]`)
- Cada card ocupa quase a tela inteira para manter impacto
- Tap abre lightbox fullscreen
- Indicadores de dots embaixo
- CTA logo abaixo do carrossel

---

## Detalhes Tecnicos

### Arquivos modificados
- `src/components/landing/ShowcaseSection.tsx` -- reescrita completa

### Novos arquivos
- `src/assets/screenshots/` -- 8 imagens copiadas do upload

### Estrutura do componente

**Array de dados:**
```text
const screenshots = [
  { src: importedImage, title: "Atendimento WhatsApp", url: "atendimento", featured: true },
  { src: importedImage, title: "Disparo em Massa", url: "campanhas", featured: true },
  { src: importedImage, title: "Gestao de Contatos", url: "contatos" },
  ...
];
```

**Moldura MacBook (sub-componente):**
```text
BrowserFrame({ children, url })
  -> Barra com 3 dots + URL
  -> children (a imagem)
  -> Sombra purple/blue
```

**Lightbox:**
- Estado `selectedImage` (index ou null)
- `Dialog` do Radix abrindo com a imagem selecionada em tamanho grande
- Fundo escuro com blur
- Click fora ou X para fechar

**Desktop layout:**
```text
<div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
  {featured (2 grandes)}
</div>
<div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto mt-5">
  {remaining (6 medios)}
</div>
```

**Mobile layout:**
- Embla carousel com `flex-[0_0_90%]`
- onClick abre lightbox
- Dots indicator

### CSS adicional em index.css
```text
.browser-shadow {
  box-shadow: 0 25px 60px -12px hsl(250 80% 60% / 0.25),
              0 12px 30px -8px hsl(220 70% 50% / 0.2);
}
```

### Perspectiva 3D no hover
```text
.showcase-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.showcase-card:hover {
  transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.02);
}
```
