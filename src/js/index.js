import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

// import mobileNav from './modules/mobile-nav.js';
import tagline from "./modules/tagline.js";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper();
// mobileNav();
tagline();
