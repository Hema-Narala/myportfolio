$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Python", "JavaScript","HTML","CSS","SQL"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

//to move container from left to right in home section
document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#home-content", { 
      x: 200,  // Moves from right (200px offset)
      opacity: 0, 
      duration: 1,  // Animation lasts 1 second
      ease: "power2.out" // Smooth easing effect
    });
  });
  

  //to zoom the image in about me section
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("my-image");

    // Apply initial styles using JavaScript (without modifying CSS)
    image.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
    image.style.transform = "scale(0.5)";
    image.style.opacity = "0";

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                image.style.transform = "scale(1)";
                image.style.opacity = "1";

                // Stop observing after the first appearance
                observer.unobserve(image);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(image);
});

  


//  to move up the about-info,my-skills-info,contact-info paragraph in about me section
document.addEventListener("DOMContentLoaded", function () {
    const elements = ["about-info", "contact-info", "myskills-info", "project-info", "certifications-info"]; // IDs of containers

    elements.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return; // Skip if the element is not found

        // Apply initial styles for smooth floating effect
        element.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        element.style.transform = "translateY(100px)"; // Start further down
        element.style.opacity = "0"; // Initially hidden

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.style.transform = "translateY(0)"; // Moves up smoothly
                    element.style.opacity = "1"; // Gradually appears

                    observer.unobserve(element); // Stop observing after first animation
                }
            });
        }, { threshold: 0.2 });

        observer.observe(element);
    });
});


// to add animations to the progress bars in my-skills section
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skills-content .right .line::before");

    function animateProgressBars() {
        const bars = document.querySelectorAll(".skills-content .right .line");
        bars.forEach((bar) => {
            const percentage = bar.classList.contains("html") ? "95%" :
                bar.classList.contains("css") ? "94%" :
                    bar.classList.contains("js") ? "89%" :
                        bar.classList.contains("python") ? "92%" :
                            bar.classList.contains("sqlite") ? "87%" : "0%";

            bar.style.setProperty("--progress", percentage);
            bar.classList.add("animate");
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.disconnect(); // Run animation once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".skills-content .right"));
});


