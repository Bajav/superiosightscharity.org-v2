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
  var mySwiperGallery = new Swiper(".mySwiperGallery", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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

  document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      });
    });