document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navMenu = document.querySelector(".nav-header__right");

  
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

 
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", (e) => {
            if (!link.parentElement.classList.contains("menu-item--has-children")) {
                burgerMenu.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    
    document.querySelectorAll(".menu-item--has-children").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

             
            document.querySelectorAll(".menu-item--has-children").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

             
            item.classList.toggle("active");
        });
    });

     
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
            burgerMenu.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

let currentSlide = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            testimonials.forEach((t, i) => {
                t.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            showSlide(currentSlide);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }

        function setSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }