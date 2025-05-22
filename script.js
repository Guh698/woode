gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

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
  /*collections page*/
  const collections_btn_nav = document.getElementById("collections-btn-nav");
  const collections_page = document.getElementById(
    "collections-page-container"
  );
  /*search*/
  const lupa = document.getElementById("searchLupa");
  const search_screen = document.getElementById("search_screen");
  const lupa_input = document.getElementById("lupa_input");
  /*visit us page*/
  const visit_btn_nav = document.getElementById("visit-btn");
  const visit_page = document.getElementById("visit-page-container");
  /*contact us page*/
  const contact_btn = document.getElementById("contact-btn");
  const contact_btn_mbl = document.getElementById("contact-btn-mbl");
  const contact_page = document.getElementById("contact-page-container");
  const title2 = document.getElementById("logomark2");
  const titulo = document.getElementById("logomark");
  const categ1_items = document.getElementById("categ1_items");
  const categ2_items = document.getElementById("categ2_items");
  /*mobile sidebar*/
  const tittle = document.getElementById("logomark");
  const mbl_menu_container = document.getElementById("mobile-menu");
  const mobile_menu = document.getElementById("menu-mbl");
  const mobile_menu_icon = document.getElementById("mobile-menu-icon");
  const close_menu_icon = document.getElementById("close-menu-icon");
  const sidebar_container = document.getElementById("sidebar-container");
  const side1 = document.getElementById("side-option");
  const side2 = document.getElementById("side-option2");
  const side3 = document.getElementById("side-option3");
  const side4 = document.getElementById("side-option4");
  const side5 = document.getElementById("side-option5");
  const side6 = document.getElementById("side-option6");
  const side7 = document.getElementById("side-option7");
  const back_arrow = document.getElementById("back-arrow");
  const back_arrow2 = document.getElementById("back-arrow2");
  const back_arrow3 = document.getElementById("back-arrow4");
  /*living sidebar categ*/
  const living_btn_side = document.getElementById("living-btn-mbl");
  const living_list = document.getElementById("living-list-container");
  /*dinning sidebar categ*/
  const dinning_btn_side = document.getElementById("dinning-btn-mbl");
  const dinning_list = document.getElementById("dinning-list-container");
  /*bedroom sidebar categ*/
  const bedroom_btn_side = document.getElementById("bedroom-btn-mbl");
  const bedroom_list = document.getElementById("bedroom-list-container");
  /*collections sidebar categ*/
  const collections_btn_side = document.getElementById("collections-btn-mbl");
  const collections_list = document.getElementById(
    "collections-list-container"
  );
  /*visit mobile page*/
  const visit_btn_side = document.getElementById("visit-btn-mbl");
  const visit_page_mobile = document.getElementById("visit-list-container2");
  /*shopping bag sidebar categ*/
  const cart_btn_side = document.getElementById("cart-btn-mbl");
  /*general*/
  const main_page = document.getElementById("main-page-container");
  const ArrowBacktoTop = document.getElementById("arrowToTop");
  //footer
  const footer = document.getElementById("footer");
  const LogoFooter = document.getElementById("LogoFooter");
  const otherFooter = document.getElementById("otherFooter");
  const categoriesFooter = document.getElementById("categoriesFooter");
  const footerContainer = document.getElementById("footerContainer");
  /*cart page*/
  const backArrowCart = document.getElementById("backArrowCart");
  const cartPage = document.getElementById("cartPage");
  const cartPageSide1 = document.getElementById("cartPage-side1");
  const cartPageSide2 = document.getElementById("cartPage-side2");
  const BuyingBtn = document.getElementById("BuyingBtn");
  const ItemsInCart = [];
  const ItemsEl = document.getElementById("itemsQntd");
  const arrowToTop = document.getElementById("arrowToTop");
  const SideBackArrowCart = document.getElementById("back-arrowCartSide");
  const cartBtnNav = document.getElementById("cartNav-btn");

  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
  });

  let scrollPos = 0;

  gsap.utils.toArray(".fade-up").forEach((section) => {
    gsap.fromTo(
      section,
      { y: 75 },
      {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  });

  /*functions*/
  function ToggleSideCart() {
    main_page.classList.add("showOff");
    cartPage.classList.add("show");
    sidebar_container.classList.remove("show");
    SideBackArrowCart.classList.add("show");
    resumeScroll();
  }

  function CloseSideCart() {
    main_page.classList.remove("showOff");
    cartPage.classList.remove("show");
    main_page.classList.remove("showOff");
    sidebar_container.classList.add("show");
    SideBackArrowCart.classList.remove("show");
    backArrowCart.classList.remove("show");
    pauseScroll();
    RemoveCartVerify();
  }

  function scrollToTopWithDelay(delay = 10) {
    setTimeout(() => {
      gsap.to(smoother, {
        scrollTop: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, delay);
  }

  function scrollToSavedPositionWithDelay(delay = 10) {
    setTimeout(() => {
      gsap.to(smoother, {
        scrollTop: scrollPos,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }, delay);
  }

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
  }

  function ToggleCartPage() {
    main_page.classList.add("showOff");
    cartPage.classList.add("show");
    nav_items.classList.add("show");
    tittle.classList.add("show");
    mobile_menu_icon.classList.add("remove-show");
    sidebar_container.classList.remove("show");
    backArrowCart.classList.add("show");
    SideBackArrowCart.classList.remove("show");
    scrollToTopWithDelay();
    resumeScroll();
    RemoveCartVerify();
  }

  function CloseCartPage() {
    main_page.classList.remove("showOff");
    cartPage.classList.remove("show");
    tittle.classList.remove("show");
    nav_items.classList.remove("show");
    close_menu_icon.classList.remove("show");
    mobile_menu_icon.classList.remove("remove-show");
    backArrowCart.classList.remove("show");
    RemoveFooterShow();
    RemoveCartVerify();
  }

  function updateSubtotal() {
    const subtotalEl = document.getElementById("subtotal");
    const isGift = document.getElementById("giftCheckbox").checked;
    let total = 0;

    for (let i = 0; i < ItemsInCart.length; i++) {
      total += ItemsInCart[i].price;
    }

    if (isGift) {
      total += 10;
    }

    subtotalEl.textContent = `Subtotal: R$ ${total}`;
  }

  function updateItems() {
    ItemsEl.textContent = `Items: ${ItemsInCart.length}`;
  }

  function ToggleContactPage() {
    contact_page.classList.toggle("show");
    title2.classList.toggle("show");
    titulo.classList.toggle("showOff");
    categ1_items.classList.toggle("show");
    categ2_items.classList.toggle("show");
    living_page.classList.remove("show");
    dinning_page.classList.remove("show");
    bedroom_page.classList.remove("show");
    collections_page.classList.remove("show");
    visit_page.classList.remove("show");
    search_screen.classList.remove("show");
    nav_items.classList.remove("show");
    main_page.classList.remove("showOff");
    tittle.classList.remove("show");
    productPage.classList.remove("show");
    CloseCartPage();

    if (contact_page.classList.contains("show")) {
      pauseScroll();
    } else {
      resumeScroll();
    }
  }

  function ToggleCartPageOnNav() {
    main_page.classList.remove("showOff");
    cartPage.classList.toggle("show");
    tittle.classList.add("show");
    living_page.classList.remove("show");
    dinning_page.classList.remove("show");
    bedroom_page.classList.remove("show");
    collections_page.classList.remove("show");
    visit_page.classList.remove("show");
    search_screen.classList.remove("show");
    categ1_items.classList.remove("show");
    categ2_items.classList.remove("show");
    tittle.classList.remove("show");
    productPage.classList.remove("show");
    contact_page.classList.remove("show");
    title2.classList.remove("show");
    titulo.classList.remove("showOff");
    backArrowCart.classList.remove("show");
    SideBackArrowCart.classList.remove("show");

    if (cartPage.classList.contains("show")) {
      main_page.classList.add("showOff");
      nav_items.classList.add("show");
      ToggleFooterShow();
      resumeScroll();
    } else {
      nav_items.classList.remove("show");
      RemoveFooterShow();
    }
  }

  if (cartBtnNav) {
    cartBtnNav.addEventListener("click", () => {
      ToggleCartPageOnNav();
    });
  }

  function ToggleProductPage() {
    scrollPos = smoother.scrollTop();
    nav_items.classList.add("show");
    main_page.classList.add("showOff");
    mobile_menu_icon.classList.add("remove-show");
    contact_page.classList.remove("show");
    title2.classList.remove("show");
    titulo.classList.remove("showOff");
    categ1_items.classList.remove("show");
    categ2_items.classList.remove("show");
    resumeScroll();
    scrollToTopWithDelay();
  }

  function ToggleCartVerify() {
    BuyingBtn.textContent = "You need to choose something...";
  }

  function RemoveCartVerify() {
    BuyingBtn.textContent = "Place Order via WhatsApp";
  }

  function CloseProductPage() {
    main_page.classList.remove("showOff");
    nav_items.classList.remove("show");
    mobile_menu_icon.classList.remove("remove-show");
    tittle.classList.remove("show");
    productPage.classList.remove("show");
  }

  function addItemToCart(productData) {
    ItemsInCart.push(productData);
    const cartList = document.getElementById("cartList");
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="cartIMG">
        <img src="${productData.img}" alt="${productData.title}" >
      </div>
      <div class="cartProductInfo">
        <h3>${productData.title}</h3>
        <p>${productData.description.slice(0, 60)}...</p> 
        <p>price: ${productData.price}</p>
        <button class="removeBtn">Remove</button>
      </div>
    `;

    cartList.appendChild(li);
    const removeBtn = li.querySelector(".removeBtn");
    removeBtn.onclick = () => {
      const index = ItemsInCart.indexOf(productData);
      if (index !== -1) {
        ItemsInCart.splice(index, 1); // remove do array
      }
      li.remove(); // remove do HTML
      updateSubtotal();
      updateItems();
    };
    updateSubtotal();
    updateItems();
  }

  function ToggleFooterShow() {
    LogoFooter.classList.add("show");
    otherFooter.classList.add("show");
    categoriesFooter.classList.add("show");
    footerContainer.classList.add("show");
  }

  function RemoveFooterShow() {
    LogoFooter.classList.remove("show");
    otherFooter.classList.remove("show");
    categoriesFooter.classList.remove("show");
    footerContainer.classList.remove("show");
  }

  function sendOrderToWhatsApp() {
    const numero = "5519993244478";
    let mensagem = "Olá! Gostaria de fazer um pedido:\n\n";

    const isGift = document.getElementById("giftCheckbox").checked;
    let total = ItemsInCart.reduce((soma, item) => soma + item.price, 0);

    ItemsInCart.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.title} - R$${item.price}\n`;
    });

    if (isGift) {
      mensagem += "\n🎁 Este pedido é um presente!\n";
      total += 10;
    }

    mensagem += `\nSubtotal: R$${total.toFixed(2)}\n\nMuito obrigado!`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`;

    window.open(linkWhatsApp, "_blank");
  }

  document
    .getElementById("giftCheckbox")
    .addEventListener("change", updateSubtotal);

  /*general code*/
  window.addEventListener("load", () => {
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

  const pages = {
    living: { btn: living_btn_nav, page: living_page },
    dinning: { btn: dinning_btn_nav, page: dinning_page },
    bedroom: { btn: bedroom_btn_nav, page: bedroom_page },
    collections: { btn: collections_btn_nav, page: collections_page },
    visit: { btn: visit_btn_nav, page: visit_page },
    search: { btn: lupa, page: search_screen },
  };

  function togglePage(selectedPage) {
    let anyPageOpen = false;

    Object.values(pages).forEach(({ page }) => {
      if (page === selectedPage) {
        page.classList.toggle("show");
        if (page.classList.contains("show")) {
          anyPageOpen = true;
        }
      } else {
        page.classList.remove("show");
      }
    });

    // Atualiza a navbar
    if (anyPageOpen) {
      CloseCartPage();
      nav_items.classList.add("show");
      productPage.classList.remove("show");
      footer.classList.remove("show");
      document.getElementById("Search_inputID").focus();
      main_page.classList.remove("showOff");
      contact_page.classList.remove("show");
      cartPage.classList.remove("show");
      title2.classList.remove("show");
      titulo.classList.remove("showOff");
      categ1_items.classList.remove("show");
      categ2_items.classList.remove("show");
      pauseScroll();
    } else {
      tittle.classList.remove("show");
      nav_items.classList.remove("show");
      resumeScroll();
    }

    if (search_screen.classList.contains("show")) {
      lupa_input.classList.add("show");
    }
  }

  // Adiciona os event listeners para cada botão
  Object.values(pages).forEach(({ btn, page }) => {
    if (btn && page) {
      btn.addEventListener("click", () => togglePage(page));
    }
  });

  /*product page*/
  const products = {
    product1: {
      btn: document.getElementById("product1"),
      title: "Vase",
      img: "imgs/vase.png",
      color: "Brown",
      size: "Medium",
      weight: "2kg",
      price: 50,
      addToCartBtn: "addToCartBtn1",
      description:
        "A modern classic for any curated space. The Coffee Table Vase is handcrafted with rich brown tones and a warm, tactile finish. Its sculptural form adds depth and character to your coffee table or shelving display, making it a standout accent piece. Whether styled with dried florals or left empty as an art object, it brings an organic elegance that enhances any interior design.",
    },
    product2: {
      btn: document.getElementById("product2"),
      title: "Frame",
      img: "imgs/framepro.png",
      color: "Black",
      size: "Large",
      weight: "1kg",
      price: 150,
      addToCartBtn: "addToCartBtn2",
      description:
        "More than just a frame, this is a statement of memory and minimalism. Crafted with sleek black lines and a refined matte finish, the 'Memories in Frame' piece is designed to spotlight your favorite photographs or art in a gallery-worthy style. Its large format adds presence to any wall or shelf, while the timeless design blends seamlessly with both modern and classic interiors.",
    },
    product3: {
      btn: document.getElementById("product3"),
      title: "Chateau Sofa",
      img: "imgs/canepé.png",
      color: "Grey",
      size: "XL",
      weight: "10kg",
      price: 370,
      addToCartBtn: "addToCartBtn3",
      description:
        "Sink into sophistication with the Chateau Sofa. Designed for those who appreciate comfort without compromising on style, this XL piece features soft grey upholstery and clean, architectural lines. Its generous proportions make it the perfect companion for long evenings, relaxed gatherings, or solo moments of calm. A true centerpiece for any living room, this canapé balances cozy functionality with high-end design sensibility.",
    },
    product4: {
      btn: document.getElementById("product4"),
      title: "Pencils to decor",
      img: "imgs/pencils.png",
      color: "black",
      size: "Small",
      weight: "12g",
      price: 30,
      description:
        "More than just writing instruments, these pens are crafted to complement your curated workspace or styled tabletop. Featuring sleek metallic finishes, sculptural forms, and a satisfying weight in hand, they blend utility with understated luxury. Whether resting in a porcelain tray or tucked beside a leather notebook, each piece adds a subtle note of intention and taste. Perfect for those who believe even the smallest details deserve great design.",
    },
    product5: {
      btn: document.getElementById("product5"),
      title: "Vase to decor",
      img: "imgs/vaseandflower.png",
      color: "blue",
      size: "Small",
      weight: "1.5kg",
      price: 70,
      description:
        "A study in balance and beauty, this piece pairs a delicately chosen bloom with a sculptural vase that feels both timeless and contemporary. Whether placed on a console, dining table, or bedside, it draws the eye without demanding attention — a quiet gesture of nature, elevated through design. Ideal for those who appreciate interiors with soul and subtlety.",
    },
    product6: {
      btn: document.getElementById("product6"),
      title: "Mirror & Stuffs",
      img: "imgs/vaseandmirror.png",
      color: "white",
      size: "Small",
      weight: "3kg/all",
      price: 90,
      description:
        "This curated trio — a small round mirror, a minimalist vase, and a single, graceful flower — creates a quiet moment of harmony. Designed to elevate shelves, dressers, or entryways, it plays with light, shape, and natural elements in perfect balance. A subtle statement for interiors that value simplicity, softness, and thoughtful composition.",
    },
    product7: {
      btn: document.getElementById("product7"),
      title: "Modern lampshade",
      img: "imgs/lamp.png",
      color: "Brown",
      size: "Large",
      weight: "6kg",
      price: 180,
      description:
        "Defined by clean lines and a sculptural silhouette, this piece transforms illumination into an element of design. Its subtle texture and soft diffusion create a warm, ambient glow — perfect for setting the tone in any space. Whether paired with a bold base or standing alone in its simplicity, it’s a refined accent for interiors that favor form, function, and quiet sophistication.",
    },
  };

  // Element references
  const productPage = document.getElementById("productPage");
  const backArrow3 = document.getElementById("backArrow3");
  const titleEl = document.getElementById("productTitle");
  const imgEl = document.getElementById("productImage");
  const descEl = document.getElementById("productDescription");
  const colorEl = document.getElementById("productColor");
  const sizeEl = document.getElementById("productSize");
  const weightEl = document.getElementById("productWeight");
  const colors = document.getElementById("colors");
  const productIMG = document.getElementById("product-image");
  const CartBtn = document.querySelector(".productPage-addToCart-btn");

  function toggleProduct(productData) {
    let anyProductPageOpen = false;

    // Populate content
    titleEl.textContent = productData.title;
    imgEl.src = productData.img;
    descEl.textContent = productData.description;
    colorEl.textContent = `Color: ${productData.color}`;
    sizeEl.textContent = `Size: ${productData.size}`;
    weightEl.textContent = `Weight: ${productData.weight}`;
    CartBtn.id = productData.addToCartBtn;

    // Show page
    tittle.classList.add("show");
    descEl.classList.add("show");
    titleEl.classList.add("show");
    colors.classList.add("show");
    productIMG.classList.add("show");
    productPage.classList.add("show");

    if (productPage.classList.contains("show")) {
      anyProductPageOpen = true;
    } else {
      anyProductPageOpen = false;
    }

    // Atualiza a navbar
    if (anyProductPageOpen) {
      ToggleProductPage();
      ToggleFooterShow();
    } else {
      CloseProductPage();
      RemoveFooterShow();
    }

    if (CartBtn) {
      CartBtn.onclick = () => {
        addItemToCart(productData); // adiciona o produto
        CloseProductPage(); // fecha página de produto
        ToggleCartPage(); // abre o carrinho
        ToggleFooterShow();
      };
    }
  }

  Object.values(products).forEach((product) => {
    if (product.btn) {
      product.btn.addEventListener("click", () => toggleProduct(product));
    }
  });

  if (backArrow3) {
    backArrow3.addEventListener("click", function () {
      CloseProductPage();
      scrollToSavedPositionWithDelay();
      RemoveFooterShow();
    });
  }

  if (cartPage && backArrowCart) {
    backArrowCart.addEventListener("click", () => {
      CloseCartPage();
      scrollToSavedPositionWithDelay();
    });
  }

  if (contact_btn && contact_page) {
    contact_btn.addEventListener("click", function () {
      ToggleContactPage();
      if (contact_page.classList.contains("show")) {
      } /*else {
      }*/
    });
  }

  //search
  const productTitles = Object.values(products).map((product) => product.title);
  const searchInput = document.getElementById("Search_inputID");
  const input = document.querySelector(".Lupa");

  input.addEventListener("awesomplete-selectcomplete", function () {
    input.value = "";
  });

  new Awesomplete(searchInput, {
    list: productTitles, // Lista que ele vai mostrar
    minChars: 1,
    maxItems: 5,
    autoFirst: true, // Deixa o primeiro item já pré-selecionado
  });

  searchInput.addEventListener("awesomplete-selectcomplete", function (e) {
    const selected = e.text.value.toLowerCase().trim();
    Object.values(products).forEach((product) => {
      if (product.title.toLowerCase() === selected) {
        toggleProduct(product);
        search_screen.classList.remove("show"); // fecha a tela de busca
      }
    });
  });

  input.addEventListener("awesomplete-selectcomplete", function () {
    input.value = "";
  });

  //mobile
  if (mobile_menu_icon && close_menu_icon && sidebar_container) {
    mobile_menu_icon.addEventListener("click", function () {
      mobile_menu_icon.classList.add("remove-show");
      close_menu_icon.classList.add("show");
      sidebar_container.classList.add("show");
      mobile_menu.classList.add("show");
      tittle.classList.add("show");
      side1.classList.add("show");
      side2.classList.add("show");
      side3.classList.add("show");
      side4.classList.add("show");
      side5.classList.add("show");
      side6.classList.add("show");
      side7.classList.add("show");
      pauseScroll();
    });
  }

  if (close_menu_icon && mobile_menu_icon && sidebar_container) {
    close_menu_icon.addEventListener("click", function () {
      mobile_menu_icon.classList.remove("remove-show");
      close_menu_icon.classList.remove("show");
      sidebar_container.classList.remove("show");
      mobile_menu.classList.remove("show");
      tittle.classList.remove("show");
      side1.classList.remove("show");
      side2.classList.remove("show");
      side3.classList.remove("show");
      side4.classList.remove("show");
      side5.classList.remove("show");
      side6.classList.remove("show");
      side7.classList.remove("show");
      living_list.classList.remove("show");
      dinning_list.classList.remove("show");
      bedroom_list.classList.remove("show");
      collections_list.classList.remove("show");
      visit_page_mobile.classList.remove("show");
      contact_page.classList.remove("show");
      tittle.classList.remove("show2");
      back_arrow.classList.remove("show");
      CloseCartPage();
      resumeScroll();
      RemoveFooterShow();
      RemoveCartVerify();
    });
  }

  if (back_arrow) {
    back_arrow.addEventListener("click", function () {
      living_list.classList.remove("show");
      dinning_list.classList.remove("show");
      bedroom_list.classList.remove("show");
      collections_list.classList.remove("show");
      visit_page_mobile.classList.remove("show");
      back_arrow.classList.remove("show");
    });
  }

  if (contact_btn_mbl && contact_page) {
    contact_btn_mbl.addEventListener("click", function () {
      contact_page.classList.add("show");
      back_arrow3.classList.add("show");
      tittle.classList.add("show2");
      sidebar_container.classList.remove("show");
      tittle.classList.remove("show");
    });
  }

  if (back_arrow3) {
    back_arrow3.addEventListener("click", function () {
      contact_page.classList.remove("show");
      sidebar_container.classList.add("show");
      tittle.classList.add("show");
      tittle.classList.remove("show2");
    });
  }

  //sidebar categs
  //living
  if (living_list && living_btn_side) {
    living_btn_side.addEventListener("click", function () {
      living_list.classList.add("show");
      back_arrow.classList.toggle("show");
    });
  }

  //dinning
  if (dinning_list && dinning_btn_side) {
    dinning_btn_side.addEventListener("click", function () {
      dinning_list.classList.toggle("show");
      back_arrow.classList.toggle("show");
    });
  }

  //bedroom
  if (bedroom_list && bedroom_btn_side) {
    bedroom_btn_side.addEventListener("click", function () {
      bedroom_list.classList.toggle("show");
      back_arrow.classList.toggle("show");
    });
  }

  //collections
  if (collections_list && collections_btn_side) {
    collections_btn_side.addEventListener("click", function () {
      collections_list.classList.toggle("show");
      back_arrow.classList.toggle("show");
    });
  }

  /*visit page*/
  if (visit_btn_side && visit_page_mobile) {
    visit_btn_side.addEventListener("click", function () {
      visit_page_mobile.classList.add("show");
      back_arrow2.classList.add("show");
      tittle.classList.add("show2");

      /*remove*/
      sidebar_container.classList.remove("show");
      tittle.classList.remove("show");
    });
  }

  if (back_arrow2) {
    back_arrow2.addEventListener("click", function () {
      visit_page_mobile.classList.remove("show");
      back_arrow2.classList.remove("show");
      sidebar_container.classList.add("show");
      tittle.classList.add("show");
      tittle.classList.remove("show2");
    });
  }

  /*Shopping bag*/
  if (cart_btn_side) {
    cart_btn_side.onclick = () => {
      ToggleFooterShow();
      ToggleSideCart();
    };
  }

  if (SideBackArrowCart) {
    SideBackArrowCart.addEventListener("click", function () {
      CloseSideCart();
    });
  }

  if (BuyingBtn) {
    BuyingBtn.onclick = () => {
      if (ItemsInCart.length <= 0) {
        ToggleCartVerify();
      } else {
        sendOrderToWhatsApp();
      }
    };
  }

  if (arrowToTop) {
    arrowToTop.addEventListener("click", () => {
      scrollToTopWithDelay();
    });
  }
});
