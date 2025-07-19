const navToggle = document.querySelector(".nav_toggle");
const navMenus = document.querySelector(".nav_menus");

const sunIcon = document.querySelector(".light");
const moonIcon = document.querySelector(".dark");
const bodyThemeMode = document.querySelector("body");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_menus .nav_link a");

// /////////////////////  scroll active link /////////////////// //
const activeNavLink = () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 72;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeNavLink);

window.addEventListener("load", activeNavLink);
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenus.classList.contains("mobile_menu")) {
      navMenus.classList.remove("mobile_menu");
    }
  });
});

// /////////////////////  swiper slider /////////////////// //
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  autoplay: true,
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// /////////////////////  nav toggle /////////////////// //

navToggle.addEventListener("click", () => {
  navMenus.classList.toggle("mobile_menu");
});

// /////////////////////  dark mode /////////////////// //
sunIcon.addEventListener("click", () => {
  bodyThemeMode.classList.remove("darkmode");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
});

moonIcon.addEventListener("click", () => {
  bodyThemeMode.classList.add("darkmode");
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
});

// /////////////////////  scroll reveal /////////////////// //

ScrollReveal().reveal(".reveal", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: false,
});
