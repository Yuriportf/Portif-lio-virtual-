document.addEventListener("DOMContentLoaded", function () {
  // Menu Hambúrguer
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
      document.body.classList.toggle("no-scroll");
      menuToggle.setAttribute("aria-expanded", menu.classList.contains("show"));
    });
  }

  // Navegação suave para links com âncoras
  document.querySelectorAll('#menu a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const headerOffset = document.querySelector("header")?.offsetHeight || 0;
        const position = targetSection.offsetTop - headerOffset;

        window.scrollTo({
          top: position,
          behavior: "smooth"
        });

        // Fecha o menu mobile
        if (menu) {
          menu.classList.remove("show");
          document.body.classList.remove("no-scroll");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Efeito de scroll no header (aplica apenas em telas > 768px)
  const header = document.querySelector(".header-container");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.innerWidth > 768) {
        header.classList.toggle("scrolled", window.scrollY > 50);
      }
    });
  }

  // Função para abrir modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      document.body.classList.add("no-scroll");
    }
  }

  // Função para fechar modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  }

  // Fechar modais ao clicar fora do conteúdo
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("click", event => {
      if (event.target.classList.contains("modal")) {
        closeModal(modal.id);
      }
    });
  });

  // Adicionar evento de fechar modal ao botão de fechar
  document.querySelectorAll(".close").forEach(button => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        closeModal(modal.id);
      }
    });
  });

  // Função para mostrar seção (usada em habilidades.html)
  function mostrarSecao(secaoId) {
    document.querySelectorAll(".skills-category").forEach(secao => {
      secao.style.display = "none";
    });
    const secao = document.getElementById(secaoId);
    if (secao) {
      secao.style.display = "block";
    }

    document.querySelectorAll(".category-buttons button").forEach(btn => {
      btn.classList.remove("active");
    });
    const activeButton = document.querySelector(`button[onclick="mostrarSecao('${secaoId}')"]`);
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }

  // Adicionar evento de clique aos botões de categoria (habilidades.html)
  const categoryButtons = document.querySelectorAll(".category-buttons button");
  categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
      const secaoId = this.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
      if (secaoId) {
        mostrarSecao(secaoId);
      }
    });
  });

  // Adicionar evento de clique aos cartões de habilidade (habilidades.html)
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    card.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      if (modalId) {
        openModal(modalId);
      }
    });
  });

  // Mostrar seção "linguagens" ao carregar (habilidades.html)
  if (document.getElementById("linguagens")) {
    mostrarSecao("linguagens");
  }

  // Funções para compatibilidade com outras páginas
  function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(button => button.classList.remove("active"));

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add("active");
    }

    const clickedButton = Array.from(buttons).find(button =>
      button.getAttribute("onclick")?.includes(tabId)
    );
    if (clickedButton) {
      clickedButton.classList.add("active");
    }
  }

  function toggleLeiturasLinks() {
    const links = document.getElementById("leituras-links");
    if (links) {
      links.style.display = links.style.display === "none" || links.style.display === "" ? "block" : "none";
    }
  }

  // Expor funções ao escopo global (para chamadas em HTML)
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.mostrarSecao = mostrarSecao;
  window.showTab = showTab;
  window.toggleLeiturasLinks = toggleLeiturasLinks;
});