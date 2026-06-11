console.log("Portfolio Loaded");

/* =========================
   SMOOTH SCROLL NAVIGATION
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // allow external links (GitHub, resume etc.)
        if (!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0px 5px 20px rgba(0,0,0,.3)";
    } else {
        nav.style.boxShadow = "none";
    }

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

/* =========================
   TYPING EFFECT
========================= */

const text = [
    "Flutter Developer",
    "UI/UX Designer",
    "Firebase Developer"
];

let count = 0;
let index = 0;

function typeEffect() {

    let currentText = text[count];

    let letter = currentText.slice(0, ++index);

    const typingEl = document.getElementById("typing");

    if (typingEl) {
        typingEl.textContent = letter;
    }

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        if (count === text.length) count = 0;

        setTimeout(typeEffect, 1200);

    } else {

        setTimeout(typeEffect, 100);
    }
}

typeEffect();

/* =========================
   IMAGE GALLERY (PROJECT DEMO)
========================= */

let images = {
   1: [
    "project1-1.png",
    "project1-2.png",
    "project1-3.png"
],
2: [
    "project2-1.png",
    "project2-2.png",
    "project2-3.png",
    "project2-4.png"
],
3: [
    "project3-1.png",
    "project3-2.png",
    "project3-3.png",
    "project3-4.png"
]
};

let currentProject = 1;
let currentIndex = 0;

/* OPEN GALLERY */

function openGallery(project) {

    currentProject = project;
    currentIndex = 0;

    const modal = document.getElementById("modal");
    const img = document.getElementById("modalImg");

    if (modal && img) {
        modal.style.display = "flex";
        img.src = images[project][0];
    }
}

/* NEXT IMAGE */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images[currentProject].length) {
        currentIndex = 0;
    }

    document.getElementById("modalImg").src =
        images[currentProject][currentIndex];
}

/* PREV IMAGE */

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images[currentProject].length - 1;
    }

    document.getElementById("modalImg").src =
        images[currentProject][currentIndex];
}

/* CLOSE MODAL */

function closeModal() {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.style.display = "none";
    }
}

/* =========================
   CLOSE MODAL ON OUTSIDE CLICK
========================= */

window.addEventListener("click", function (e) {

    const modal = document.getElementById("modal");

    if (e.target === modal) {
        modal.style.display = "none";
    }

});