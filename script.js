// Botão do Menu Mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Alterna visibilidade do menu em telas pequenas
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    document.body.classList.toggle("menu-open");
  });
}

// Navegação suave entre seções
document.querySelectorAll('#menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 0;
      const position = targetSection.offsetTop - headerOffset;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });

      // Fecha o menu mobile
      menu.classList.remove('show');
      document.body.classList.remove('menu-open');
    }
  });
});

// Efeito de scroll no header (aplica apenas em telas maiores que 768px)
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (header && window.innerWidth > 768) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Fechar modais ao clicar fora do conteúdo
function closeModalsOnOutsideClick() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const modalContent = modal.querySelector('.modal-content');
    modal.addEventListener('click', event => {
      if (!modalContent.contains(event.target)) {
        modal.style.display = 'none';
      }
    });
  });
}
closeModalsOnOutsideClick();

// Abrir e Fechar Modais por ID
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// Troca de Abas
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  const clickedButton = Array.from(buttons).find(button =>
    button.getAttribute('onclick')?.includes(tabId)
  );
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Mostrar/ocultar links de leitura técnica no modal
function toggleLeiturasLinks() {
  const links = document.getElementById('leituras-links');
  if (links) {
    links.style.display = (links.style.display === 'none' || links.style.display === '') ? 'block' : 'none';
  }
}
function mostrarSecao(id) {
  document.querySelectorAll('.skills-category').forEach(secao => {
    secao.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function abrirModal(id) {
  document.getElementById(id).style.display = 'block';
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Exibir por padrão a primeira seção ao carregar
window.onload = function() {
  mostrarSecao('linguagens');
};