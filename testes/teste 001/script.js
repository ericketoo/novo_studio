// Classe MobileNavbar
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      // Seleciona o elemento mobileMenu do DOM e atribui à propriedade mobileMenu da instância
      this.mobileMenu = document.querySelector(mobileMenu);
      // Seleciona o elemento navList do DOM e atribui à propriedade navList da instância
      this.navList = document.querySelector(navList);
      // Seleciona todos os elementos navLinks do DOM e atribui à propriedade navLinks da instância
      this.navLinks = document.querySelectorAll(navLinks);
      // Define uma classe CSS a ser usada quando a navegação móvel estiver ativa
      this.activeClass = "active";
    
      // Vincula o método handleClick a esta instância da classe, para que possa ser usado como um manipulador de eventos
      this.handleClick = this.handleClick.bind(this);
    }
    
    // Método para animar os links do menu de navegação móvel
    animateLinks() {
      // Para cada link na lista de links navLinks...
      this.navLinks.forEach((link, index) => {
        // Verifica se o link já possui uma animação
        link.style.animation ? (link.style.animation = "") : // Se tiver, remove a animação
          // Se não tiver, adiciona uma animação ao link
          (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
      });
    }
    
    // Método para lidar com o clique no ícone do menu de navegação móvel
    handleClick() {
      // Adiciona ou remove a classe CSS ativa do elemento navList
      this.navList.classList.toggle(this.activeClass);
      // Adiciona ou remove a classe CSS ativa do elemento mobileMenu
      this.mobileMenu.classList.toggle(this.activeClass);
      // Anima os links do menu de navegação móvel
      this.animateLinks();
    }
    
    // Método para adicionar o evento de clique no ícone do menu de navegação móvel
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    // Método para inicializar o menu de navegação móvel
    init() {
      // Verifica se o elemento mobileMenu existe no DOM
      if (this.mobileMenu) {
        // Se existir, adiciona o evento de clique ao ícone do menu de navegação móvel
        this.addClickEvent();
      }
      // Retorna a instância da classe MobileNavbar
      return this;
    }
  }
  
  // Instancia um objeto MobileNavbar com os seletores para o menu de navegação móvel e seus links
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  // Inicializa o objeto MobileNavbar
  mobileNavbar.init();
  

  /*class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init(); */