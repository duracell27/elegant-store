import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

// import mobileNav from './modules/mobile-nav.js';
import tagline from "./modules/tagline.js";
import timer from "./modules/timer.js";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    820:{
      slidesPerView: "auto",
  spaceBetween: 24,
    }
  }
});

swiper();
// mobileNav();
tagline();
timer();
