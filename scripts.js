let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let scrollRevealActivated = false;

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 300
});

ScrollReveal().reveal('#heading1, #heading2, #heading3, #heading4, #heading5', { delay: 300, reset: false });
ScrollReveal().reveal('.home-text', { delay: 500, reset: false });
ScrollReveal().reveal('.social-icons', { delay: 700, reset: false });
ScrollReveal().reveal('#home-btn', { delay: 1000, reset: false });
ScrollReveal().reveal('.home-img', { delay: 500, origin: 'top', reset: false });
ScrollReveal().reveal('.aboutme-img', { delay: 300, origin: 'left', reset: false });
ScrollReveal().reveal('.text-box', { delay: 300, origin: 'right', reset: false });
ScrollReveal().reveal('#services-box1, #projects-box1', { delay: 200, reset: false });
ScrollReveal().reveal('#services-box2, #projects-box2', { delay: 400, reset: false });
ScrollReveal().reveal('#services-box3, #projects-box3', { delay: 600, reset: false });
ScrollReveal().reveal('.timeline-dot', { delay: 300, reset: false });
ScrollReveal().reveal('#timeline-content1', { delay: 200, origin: 'right', reset: false });
ScrollReveal().reveal('#timeline-content3', { delay: 300, origin: 'right', reset: false });
ScrollReveal().reveal('#timeline-content2', { delay: 200, origin: 'left', reset: false });
ScrollReveal().reveal('#timeline-content4', { delay: 300, origin: 'left', reset: false });
ScrollReveal().reveal('#text', { delay: 200, reset: false })
ScrollReveal().reveal('#email', { delay: 250, reset: false })
ScrollReveal().reveal('#number', { delay: 300, reset: false })
ScrollReveal().reveal('#subject', { delay: 300, reset: false })
ScrollReveal().reveal('#message', { delay: 400, reset: false })
ScrollReveal().reveal('#submit', { delay: 450, reset: false })
