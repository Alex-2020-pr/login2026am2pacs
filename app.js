
const defaults = {
  systemName: "AM2 PACS",
  institutionName: "AM2 Soluções",
  logo: "./logoam2.png",
  loginBackground: "./login-background.jpg",
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

const branding = {...defaults, ...(window.PACS_BRANDING || {})};

function hexToRgb(hex){
  const v = hex.replace("#","");
  const n = parseInt(v.length === 3 ? v.split("").map(c=>c+c).join("") : v,16);
  return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
}

function applyBranding(){
  const root = document.documentElement;
  const rgb = hexToRgb(branding.primaryColor);
  root.style.setProperty("--primary", branding.primaryColor);
  root.style.setProperty("--primary-dark", branding.primaryDark);
  root.style.setProperty("--primary-rgb", `${rgb.r},${rgb.g},${rgb.b}`);

  document.title = branding.systemName;
  document.getElementById("brandBackground").style.backgroundImage = `url("${branding.loginBackground}")`;
  const logo = document.getElementById("clientLogo");
  logo.src = branding.logo;
  logo.alt = branding.institutionName;

  document.getElementById("brandTitle").innerHTML =
    `${branding.titleLine1}<br>${branding.titleLine2}<br><span class="accent">${branding.titleHighlight}</span>`;
  document.getElementById("brandDescription").textContent = branding.description;
  document.getElementById("welcomeTitle").textContent = branding.welcomeTitle;
  document.getElementById("welcomeText").textContent = branding.welcomeText;

  const forgot = document.getElementById("forgotArea");
  forgot.style.display = branding.showForgotPassword ? "flex" : "none";
  document.getElementById("forgotLink").href = branding.forgotPasswordUrl;

  document.getElementById("powered").style.visibility = branding.showPoweredBy ? "visible" : "hidden";
  document.getElementById("company").textContent = branding.company;
  document.getElementById("year").textContent = new Date().getFullYear();
}

applyBranding();

const password = document.getElementById("password");
document.getElementById("togglePassword").addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const pass = password.value;
  const error = document.getElementById("loginError");

  error.classList.remove("show");
  error.textContent = "";

  if(!username || !pass){
    error.textContent = "Informe usuário e senha.";
    error.classList.add("show");
    return;
  }

  // IMPORTANTE:
  // Substitua este trecho pela chamada de login já existente no seu PACS.
  // O layout e a personalização não dependem da API de autenticação.
  console.log("Login:", {username, password:"********"});
});
