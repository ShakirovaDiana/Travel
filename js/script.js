const slides = document.querySelectorAll('.destinations__slide'),
      dots = document.querySelectorAll('.destinations__slider-dot'),
      parentOfDots = document.querySelector('.destinations__slider-counter');


      function hideSlides (){
        slides.forEach(item => item.style.display = 'none');


        dots.forEach(dot => dot.classList.remove('destinations__slider-dot_active'));
      }


      function showslides(index = 1){
        slides[index].style.display ='block';


        dots[index].classList.add('destinations__slider-dot_active');
      }

      hideSlides();
      showslides();



      parentOfDots.addEventListener('click', (event) => {
        const target = event.target;
        dots.forEach((item, i) =>{
          if(target === item){
            hideSlides();
            showslides(i);
          }
        });

      });

      //Burger
          const menu = document.querySelector('.navbar-item'),
    menuItem = document.querySelectorAll('.navbar-item__elem'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar-item_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navbar-item_active');
        });
    });