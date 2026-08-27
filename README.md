# AM2 PACS — Tela de Login

Interface de login responsiva e preparada para personalização por cliente.

## Arquivos

- `index.html` — estrutura da tela
- `styles.css` — layout e responsividade
- `app.js` — comportamento da interface e ponto de integração com autenticação
- `branding.js` — personalização/white-label
- `logoam2.png` — logo padrão AM2
- `login-background.jpg` — fundo padrão médico

## Teste local

Sirva a pasta com um servidor HTTP. Exemplo:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Personalização por cliente

Edite apenas `branding.js` e, quando necessário, adicione o logo e o fundo do cliente.

Exemplo:

```javascript
window.PACS_BRANDING = {
  systemName: "Hospital Exemplo - PACS",
  institutionName: "Hospital Exemplo",
  logo: "./logo-cliente.png",
  loginBackground: "./fundo-cliente.jpg",
  primaryColor: "#1686F3",
  primaryDark: "#08335D",
  titleLine1: "Tecnologia que",
  titleLine2: "conecta imagens,",
  titleHighlight: "diagnósticos e vidas.",
  description: "Plataforma completa para gestão, visualização e compartilhamento de imagens médicas com segurança e eficiência.",
  welcomeTitle: "Bem-vindo(a) de volta!",
  welcomeText: "Entre com suas credenciais para acessar o sistema.",
  showForgotPassword: true,
  forgotPasswordUrl: "#",
  showPoweredBy: true,
  company: "AM2 Soluções"
};
```

## Integração com o PACS

O formulário visual está pronto. O `submit` em `app.js` deve ser conectado ao endpoint de autenticação já utilizado pelo AM2 PACS, preservando token/sessão, mensagens de erro e redirecionamento existentes.

## Observação

Os caminhos dos assets usam `./`, o que facilita publicar esta pasta em subdiretórios e também testar em servidores locais.
