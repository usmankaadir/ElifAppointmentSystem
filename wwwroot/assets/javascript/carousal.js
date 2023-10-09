$(document).ready(function () {
  $(".owl-6").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 5,
      },
      1310: {
        items: 6,
      },
    },
    dots: false,
    autoplay: false,
    animateOut: "fadeOut", // Use fadeOut for smooth transition
    animateIn: "fadeIn", // Use fadeIn for smooth transition
    smartSpeed: 1500,
  });

  $(".owl-4").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
    dots: false,
    autoplay: false,
    animateOut: "fadeOut", // Use fadeOut for smooth transition
    animateIn: "fadeIn", // Use fadeIn for smooth transition
    smartSpeed: 1500,
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust this value as needed for your desired slide transition speed
    autoplayHoverPause: true,
    dots: false,
    mouseDrag: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    smartSpeed: 1500,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 5,
      },
      1024: {
        items: 6,
      },
      1000: {
        items: 6,
      },
    },
  });

  const mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    speed: 3000, // Set the animation speed in milliseconds
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
