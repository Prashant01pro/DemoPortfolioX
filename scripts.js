gsap.registerPlugin(ScrollTrigger);


gsap.to("#mygsapportfolio h4", {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: "#mygsapportfolio",
        scroller: "body",
        // markers:true,
        start: "top 0%",
        end: "top -100%",
        scrub: 5,
        pin: true
    }
})

function gsapAnimation1() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".featured-work",
            scroller: "body",
            start: "top 60%",
            end: "top -40%",
            // markers: true,
            scrub: 2
        }
    });

    tl.from(".workimg1", {
        x: -200,
        opacity: 0,
        duration: 4,
    }, "ram")
    tl.from(".workimg2", {
        x: 200,
        opacity: 0,
        duration: 4,
    }, "ram")
    tl.from(".workimg3", {
        x: -200,
        opacity: 0,
        duration: 4,
    }, "shyam")
    tl.from(".workimg4", {
        x: 200,
        opacity: 0,
        duration: 4,
    }, "shyam")
}
gsapAnimation1();
function gsapAnimation2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-section",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "top 75%",
            scrub: 3
        }
    });

    tl2.from(".contact-section", {
        opacity: 0,
        x: -200,
        duration: 2,
    })
}
gsapAnimation2();
function gsapAnimation3() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".map-container",
            scroller: "body",
            // markers: true,
            start: "top 80%",
            end: "top 100%",
            scrub: 4
        }
    });

    tl2.from(".map-container", {
        opacity: 0,
        x: 200,
        duration: 2
    })
}
gsapAnimation3();




window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav");
    if (window.scrollY > 50) {
        navbar.style.padding = "0px 20px";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.83)"; // Darker navbar
    } else {
        navbar.style.padding = "10px 40px";
        navbar.style.backgroundColor = "#000";
    }
});

document.getElementById("btn").addEventListener("click", () => {
    // Get input values
    const firstName = document.getElementById("firstname").value.trim();
    console.log(firstName);
    const lastName = document.getElementById("lastname").value.trim();
    console.log(lastName)

    const email = document.getElementById("email").value.trim();
    console.log(email)
    const message = document.getElementById("message").value.trim();
    console.log(message)

    // Validate inputs
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Please fill in all required fields!");
        return; // Stops function execution if validation fails
    } else {
        alert("Form submitted successfully!");

    }
    // You can now send the form data to a server using Fetch/AJAX if needed.
});


var menudiv = document.querySelector(".linkicons .bx-menu");
var menusidediv = document.querySelector(".sidediv ul i")
var tl = gsap.timeline();

tl.to(".sidediv", {
    right: 0,
    duration: 0.5
});

tl.from(".sidediv ul li a", {
    x: 150,
    duration: 0.5,
    stagger: 0.4,
    opacity: 0,
    delay: 0
})

tl.pause();

menudiv.addEventListener("click", () => {
    tl.play();
});

menusidediv.addEventListener("click", () => {
    tl.reverse();
});


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById('theme-switch');

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Listen for toggle changes
    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});



