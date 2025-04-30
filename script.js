const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");
const header = document.querySelector("header"); // Certifique-se de que o header existe

mobileMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Efeito scroll no header
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Função para fechar os modais ao clicar fora deles
function closeModalsOnOutsideClick() {
  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    const modalContent = modal.querySelector('.modal-content');

    modal.addEventListener('click', function (event) {
      if (!modalContent.contains(event.target)) {
        modal.style.display = 'none';
      }
    });
  });
}

closeModalsOnOutsideClick();

// Funções globais para abrir/fechar modais
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
