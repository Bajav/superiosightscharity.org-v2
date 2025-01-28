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

    // gsapp
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".centerText h1", { opacity: 1,x:0, duration: 2 });
    gsap.to(".centerText p", { opacity: 1,y:0, duration: 3 });
    gsap.to(".nav-items ", { y:0, duration: 1 });
    gsap.to(".impact", {
      scrollTrigger: {
        trigger: ".home",
        start: "bottom 40%",
        end: "bottom 100%",
        toggleActions: "play none reverse none",
        // markers: true
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
    });

    function getDeviceDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log(`the width :: ${width}, height ::: ${height}`);
      return { width, height };
    }
    console.log(getDeviceDimensions());

    const rights = document.getElementById("rights");
    const date = new Date();
    const year = date.getFullYear();
    rights.textContent = `all rights are reserved by superior sights charity organization ${year}`; 

    const burger = document.getElementById("burger");
    const closeNav = document.getElementById("close");
    const nav = document.querySelectorAll(".nav-links");
    const navLi = document.getElementsByClassName("link");

    burger.addEventListener("click", (e) => {
      console.log("burger clicked");
      for (let i = 0; i < nav.length; i++) {
        nav[i].style.transform = "translateY(0%)";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    }); 
    for (let i = 0; i < navLi.length; i++) {
      navLi[i].addEventListener("click", (e) => {
        nav.forEach((navItem) => {
          navItem.style.transform = "translateY(-120%)";
        });
        document.body.style.overflow = "auto"; 
      });
    }
    closeNav.addEventListener("click", (e) => {
      // console.log("clicked");
      for (let i = 0; i < nav.length; i++) {
        nav[i].style.transform = "translateY(-100%)";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    });