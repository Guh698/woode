document.addEventListener("DOMContentLoaded", () => {
  /*living page*/
  const living_btn_nav = document.getElementById("living-btn-nav");
  const living_page = document.getElementById("living-page-container");
  const nav_items = document.getElementById("nav-items");
  /*dinning page*/
  const dinning_btn_nav = document.getElementById("dinning-btn-nav");
  const dinning_page = document.getElementById("dinning-page-container");
  /*bedroom page*/
  const bedroom_btn_nav = document.getElementById("bedroom-btn-nav");
  const bedroom_page = document.getElementById("bedroom-page-container");
  /*visit us page*/
  const visit_btn_nav = document.getElementById("visit-btn");
  const visit_page = document.getElementById("visit-page-container");

  // Inicialização do Locomotive Scroll
  let scroll;

  window.addEventListener("load", () => {
    // Inicialize o LocomotiveScroll apenas depois que o window.load for disparado
    scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: false },
      tablet: { smooth: false },
      inertia: 0.8,
      lerp: 0.1,
      multiplier: 2,
    });

    // Correção para animações do GSAP
    scroll.on("scroll", (args) => {
      gsap.to(".specialties-container ul li", {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".specialties-container",
          start: "top center+=100",
          end: "bottom center+=100",
          scrub: true,
        },
      });
    });
  });

  /*living page*/
  if (living_btn_nav && living_page && nav_items && visit_page) {
    living_btn_nav.addEventListener("click", function () {
      const wasVisitPageOpen = visit_page.classList.contains("show"); // Verifica se visit_page estava aberta

      living_page.classList.toggle("show");
      nav_items.classList.toggle("show");
      /*remove*/
      nav_items.classList.remove("show2");
      nav_items.classList.remove("show3");
      nav_items.classList.remove("show4");
      visit_page.classList.remove("show");
      dinning_page.classList.remove("show");
      bedroom_page.classList.remove("show");

      // Se a Visit Page estava aberta, reativa o scroll
      if (wasVisitPageOpen) {
        scroll.start();
      }
    });
  }

  /*dinning page*/
  if (dinning_btn_nav && dinning_page && nav_items && visit_page) {
    dinning_btn_nav.addEventListener("click", function () {
      const wasVisitPageOpen = visit_page.classList.contains("show");
      dinning_page.classList.toggle("show");
      nav_items.classList.toggle("show3");
      /*remove*/
      nav_items.classList.remove("show");
      nav_items.classList.remove("show2");
      nav_items.classList.remove("show4");
      living_page.classList.remove("show");
      visit_page.classList.remove("show");
      bedroom_page.classList.remove("show");

      // Se a Visit Page estava aberta, reativa o scroll
      if (wasVisitPageOpen) {
        scroll.start();
      }
    });
  }

  if (bedroom_btn_nav && bedroom_page && nav_items && visit_page) {
    bedroom_btn_nav.addEventListener("click", function () {
      const wasVisitPageOpen = visit_page.classList.contains("show");
      bedroom_page.classList.toggle("show");
      nav_items.classList.toggle("show4");
      /*remove*/
      nav_items.classList.remove("show");
      nav_items.classList.remove("show2");
      nav_items.classList.remove("show3");
      visit_page.classList.remove("show");
      dinning_page.classList.remove("show");
      living_page.classList.remove("show");
      // Se a Visit Page estava aberta, reativa o scroll
      if (wasVisitPageOpen) {
        scroll.start();
      }
    });
  }

  if (visit_page && visit_btn_nav && nav_items && living_page) {
    visit_btn_nav.addEventListener("click", function () {
      visit_page.classList.toggle("show");
      nav_items.classList.toggle("show2");
      /*remove*/
      nav_items.classList.remove("show");
      nav_items.classList.remove("show3");
      nav_items.classList.remove("show4");
      living_page.classList.remove("show");
      dinning_page.classList.remove("show");
      bedroom_page.classList.remove("show");

      // Se a classe "show" estiver ativa, desativa o scroll
      if (visit_page.classList.contains("show")) {
        scroll.stop();
        console.log("oioi");
        // Para o Locomotive Scroll
      } else {
        scroll.start(); // Ativa novamente o scroll
      }
    });
  }
});
