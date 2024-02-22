// Función para mostrar gradualmente los elementos al hacer scroll
  function showOnScroll() {
    const elementsToShow = document.querySelectorAll(".container2 .service-card, .wrapper .carrd, .carrus, #left, #right");
    elementsToShow.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 200) {
        element.classList.add("visible");
      }
    });
  }

  // Agregar evento de desplazamiento para llamar a la función showOnScroll
  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // Llamar a la función una vez al cargar la página para mostrar los elementos visibles inicialmente


  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          // Ajusta el punto de desplazamiento usando scrollMargin
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Desplazar al inicio del elemento (ajustado según scrollMargin)
            inline: 'nearest' // Asegurar que el elemento sea visible en el viewport
          });
        }
      });
    });
  });
  

  

  $(document).ready(function() {
    // Función para mostrar gradualmente los elementos al hacer scroll
    function showOnScroll() {
      const elementsToShow = $(".containerh .section");
      elementsToShow.each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 200) {
          $(this).addClass("visible");
        }
      });
    }
  
    // Agregar evento de desplazamiento para llamar a la función showOnScroll
    $(window).on("scroll", showOnScroll);
    showOnScroll(); // Llamar a la función una vez al cargar la página para mostrar los elementos visibles inicialmente
  
    // Animación de scroll al hacer clic en los enlaces del menú
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
      if (target.length) {
        // Ajusta el punto de desplazamiento usando scrollMargin
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  });
  $(document).ready(function() {
    // Función para mostrar gradualmente los elementos al hacer scroll
    function showOnScroll() {
      const elementsToShow = $(".paf1");
      elementsToShow.each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 200) {
          $(this).addClass("visible");
        }
      });
    }
  
    // Agregar evento de desplazamiento para llamar a la función showOnScroll
    $(window).on("scroll", showOnScroll);
    showOnScroll(); // Llamar a la función una vez al cargar la página para mostrar los elementos visibles inicialmente
  
    // Animación de scroll al hacer clic en los enlaces del menú
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
      if (target.length) {
        // Ajusta el punto de desplazamiento usando scrollMargin
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  });
    


