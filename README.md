# AM2 PACS — Tela de Login 2026

Nova interface de login do **AM2 PACS**, desenvolvida com foco em uma apresentação mais moderna, elegante e adequada ao ambiente de diagnóstico por imagem.

A interface foi preparada para permitir personalização conforme a identidade visual de cada hospital, clínica ou centro de diagnóstico.

---

## 🎨 Identidade visual

A versão padrão utiliza a identidade da **AM2 Soluções / AM2 PACS**.

O painel esquerdo aprovado está armazenado no arquivo:

`left-panel-approved.jpg`

Nesta versão, o painel esquerdo é utilizado como uma única composição visual para preservar exatamente:

- enquadramento da tomografia;
- posição dos elementos;
- proporções;
- identidade visual;
- textos institucionais;
- acabamento gráfico.

Isso evita que diferentes resoluções de tela alterem excessivamente o enquadramento do equipamento médico.

---

## 🏥 Personalização por cliente

O sistema foi preparado para permitir que cada cliente utilize sua própria identidade visual.

Existem dois níveis de personalização.

### 1. Personalização simples

Para alterações de nome, textos e cores da área de login, editar:

`branding.js`

Exemplo:

```javascript
window.PACS_BRANDING = {
  systemName: "Hospital Exemplo - PACS",
  institutionName: "Hospital Exemplo",

  leftPanelImage: "./left-panel-approved.jpg?v=1",

  primaryColor: "#0A78E8",
  primaryDark: "#073F79",

  welcomeTitle: "Bem-vindo(a)!",
  welcomeText: "Entre com suas credenciais para acessar o sistema.",

  showForgotPassword: true,
  forgotPasswordUrl: "#",

  showPoweredBy: true,
  company: "Hospital Exemplo"
};
