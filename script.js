// ================= PARTICULAS =================
window.addEventListener('load', () => {
  if (window.tsParticles) {
    tsParticles.load("particles", {
      particles: {
        number: { value: 70 },
        color: { value: "#3b82f6" },
        size: { value: 2 },
        move: { enable: true, speed: 1 },
        links: {
          enable: true,
          distance: 150,
          color: "#3b82f6",
          opacity: 0.3
        }
      }
    });
  }
});

// ================= ANIMAÇÃO (IntersectionObserver) =================
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// ================= MODAL =================
function openModal(project) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  // save last focused element to return focus when modal closes
  window._lastFocusedElement = document.activeElement;

  if (project === "padaria") {
    body.innerHTML = `
      <h2>PadariaBot</h2>

      <h3>Visão Geral</h3>
      <p>
        Assistente inteligente desenvolvido para auxiliar padarias
        com receitas, fermentação e boas práticas.
        Utiliza PDF como base principal e API de IA para complementar respostas.
      </p>

      <h3>Arquitetura</h3>
      <ul>
        <li>Front-end: HTML, CSS e JavaScript</li>
        <li>Back-end: Python com Flask</li>
        <li>Processamento automático de PDF</li>
        <li>Integração com API externa</li>
        <li>Deploy em nuvem (Render)</li>
      </ul>

      <h3>Conceitos Aplicados</h3>
      <ul>
        <li>Arquitetura Cliente-Servidor</li>
        <li>Integração com APIs</li>
        <li>Manipulação de arquivos</li>
        <li>Cloud deployment</li>
      </ul>
    `;
  }

  if (project === "sinergia") {
    body.innerHTML = `
      <h2>Sinergia17 API</h2>

      <h3>Visão Geral</h3>
      <p>
        API REST desenvolvida para armazenar ranking
        de jogadores de um jogo educativo baseado nos 17 ODS.
      </p>

      <h3>Funcionalidade</h3>
      <ul>
        <li>Recebe nome e tempo do jogador</li>
        <li>Salva dados no SQLite</li>
        <li>Retorna ranking Top 5</li>
      </ul>

      <h3>Conceitos Aplicados</h3>
      <ul>
        <li>API REST</li>
        <li>Persistência de dados</li>
        <li>Arquitetura distribuída</li>
      </ul>
    `;
  }

  if (project === "paopay") {
    body.innerHTML = `
      <h2>PãoPay</h2>

      <h3>Visão Geral</h3>
      <p>
        Sistema de gestão financeira para padarias,
        substituindo controle manual por solução digital.
      </p>

      <h3>Módulos</h3>
      <ul>
        <li>Cadastro de clientes</li>
        <li>Controle de estoque</li>
        <li>Registro de vendas</li>
        <li>Resumo financeiro</li>
        <li>Envio de link de pagamento</li>
      </ul>

      <h3>Modelagem</h3>
      <ul>
        <li>MER e DER</li>
        <li>DDL e DML</li>
        <li>Regras de negócio</li>
      </ul>
    `;
  }

  modal.style.display = "block";
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  const content = modal.querySelector('.modal-content');
  content.setAttribute('tabindex','-1');
  content.focus();
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  if (window._lastFocusedElement) window._lastFocusedElement.focus();
}

// ================= FECHAR MODAL CLICANDO FORA =================
// Fechar clicando fora usando função centralizada
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) closeModal();
});

// Fechar com tecla Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    const modal = document.getElementById('modal');
    if (modal && modal.style.display === 'block') closeModal();
  }
});

// Enable keyboard activation for project cards (Enter / Space)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// ===== Tema Escuro / Claro =====
const themeToggle = document.getElementById('theme-toggle');
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle){
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// inicializa com preferência salva ou preferencia do sistema
const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

if (themeToggle){
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}