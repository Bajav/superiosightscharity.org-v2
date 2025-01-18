var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  var swiperScrollbar = new Swiper(".mySwiperScrollbar", {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  const swiped = document.querySelectorAll(".swiper-slide");
  const start = document.getElementsByClassName("start");
  swiped.forEach(card => {
    card.addEventListener("click", () => {
      for (let i = 0; i < start.length; i++) {
        start[i].innerHTML = "You did it!";
      }
      console.log("Card swiped");
    });
  });