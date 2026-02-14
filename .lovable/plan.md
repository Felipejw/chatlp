
# Ajustes Finais na Landing Page

## Resumo
Tres ajustes: trocar icone do botao flutuante do WhatsApp pelo logo oficial (SVG), reduzir espaçamento vertical entre todas as dobras, e instalar o Pixel da Meta.

## Mudancas

### 1. Botao Flutuante do WhatsApp com Logo Oficial

**Arquivo:** `src/components/landing/FloatingElements.tsx`

- Substituir o icone `MessageCircle` do Lucide por um SVG inline do logo oficial do WhatsApp
- Atualizar o link de `https://wa.me/5511967593117` para `https://wa.link/ferh66`

### 2. Reduzir Espacamento entre Dobras

**Arquivos afetados (todos os componentes de secao):**
- `HeroSection.tsx` - verificar padding
- `ComparisonSection.tsx` - `py-20` para `py-12`
- `FeaturesGrid.tsx` - `py-20` para `py-12`
- `ChatbotAISection.tsx` - `py-20` para `py-12`
- `ShowcaseSection.tsx` - `py-20` para `py-12`
- `TestimonialsSection.tsx` - `py-20` para `py-12`
- `OfferSection.tsx` - `py-20` para `py-12`
- `GuaranteeSection.tsx` - `py-20` para `py-12`
- `FAQSection.tsx` - `py-20` para `py-12`

Reduzir de `py-20` (80px top+bottom) para `py-12` (48px top+bottom) em todas as secoes, criando uma pagina mais compacta e fluida.

### 3. Instalar o Pixel da Meta

**Arquivo:** `index.html`

Adicionar o script padrao do Meta Pixel no `<head>` com o ID `2435773920153574`. Inclui:
- Script de inicializacao do `fbq`
- Chamada `fbq('init', '2435773920153574')`
- Chamada `fbq('track', 'PageView')`
- Tag `<noscript>` com pixel de fallback via imagem

## Detalhes Tecnicos

### SVG do WhatsApp
Usar o path SVG oficial do logo do WhatsApp (icone de telefone dentro do balao de chat), cor branca, tamanho `w-7 h-7`.

### Meta Pixel
Codigo padrao inserido antes do fechamento do `</head>`:
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2435773920153574');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2435773920153574&ev=PageView&noscript=1"
/></noscript>
```
