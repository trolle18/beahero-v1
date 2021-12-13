/* ---- NAV ---- */
  /* Mobile menu */

  /* When clicked, hide/show dropdown content */
  function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  
    /* Close  dropdown if clicked outside */
    window.onclick = function(event) {
      if (!event.target.matches('.fa')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  /* Testemonials slideshow */
    var slideIndex = 1;
    showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }



/*---- ABOUT ----*/

/* Timeline */
  function handler(entries) {
    for (const entry of entries) {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("transition");
      } else {
        entry.target.classList.remove("transition");        
      }
    }
  }

  const observer = new
  IntersectionObserver(handler, {
    threshold: 0.3,
  });

  const timelineElements =
  document.querySelectorAll(".timeline li");
  

  for (const element of timelineElements) {
    element.classList.add("fade-scale-in");
    observer.observe(element);
  }


