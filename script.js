// BOTÃO DO MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const header = document.querySelector("header");

// Alterna visibilidade do menu em telas pequenas
menuToggle?.addEventListener("click", () => {
  menu?.classList.toggle("show"); // Mostra ou esconde o menu lateral
  document.body.classList.toggle("menu-open");
});

// Fecha o menu ao clicar em qualquer link do menu
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu?.classList.remove('show');
    document.body.classList.remove('menu-open');
  });
});

// EFEITO DE SCROLL NO HEADER (aplica apenas em telas maiores que 768px)
window.addEventListener('scroll', () => {
  if (header && window.innerWidth > 768) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// FECHAR MODAIS AO CLICAR FORA DO CONTEÚDO
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

// ABRIR E FECHAR MODAIS POR ID
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
