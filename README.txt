AM2 PACS - Tela de Login

Arquivos:
- index.html
- styles.css
- app.js
- branding.js
- logoam2.png
- login-background.jpg

Uso rápido:
1. Coloque todos os arquivos na mesma pasta.
2. Abra index.html em um servidor web.
3. Para outro cliente, altere somente branding.js e troque os arquivos de logo/fundo.
4. No app.js, conecte o submit do formulário ao endpoint de autenticação já usado pelo PACS.

Exemplo de outro cliente:
logo: "./logo-cliente.png"
loginBackground: "./fundo-cliente.jpg"
primaryColor: "#15956F"
primaryDark: "#075844"

IMPORTANTE:
Não use file:// para validar em produção. Sirva a pasta pelo mesmo nginx/apache/frontend do PACS.
