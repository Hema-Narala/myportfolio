document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Get the navbar element
        let navbar = document.querySelector(".navbar");

        // Sticky navbar logic
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Get the scroll-up button
        let scrollUpBtn = document.querySelector(".scroll-up-btn");

        // Show or hide scroll-up button based on scroll position
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // Add click event to scroll-up button
    document.querySelector(".scroll-up-btn").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Enables smooth scrolling
        });
    });
    document.querySelectorAll(".navbar .menu li a").forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            // Applying smooth scrolling behavior when clicking menu items
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    // Select the menu button and menu
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".navbar .menu");
    const menuIcon = document.querySelector(".menu-btn i");

    // Add a click event listener to the menu button
    menuBtn.addEventListener("click", function() {
        // Toggle the "active" class on the menu
        menu.classList.toggle("active");

        // Toggle the "active" class on the menu icon (to change the icon)
        menuIcon.classList.toggle("active");
    });


});


$(document).ready(function() {
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

//to move container from right to left in home section
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


