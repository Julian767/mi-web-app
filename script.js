document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
        });
    });
});
function toggleInfo(id) {
    let info = document.getElementById(id);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
function searchGuide() {
    const input = document.getElementById("search").value.toLowerCase();
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.style.display = section.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}
function checkCompatibility() {
    const cpu = document.getElementById("cpu").value;
    const motherboard = document.getElementById("motherboard").value;
    const result = document.getElementById("compatibility-result");

    result.innerText = cpu === motherboard ? "Compatible" : "No compatible";
}

window.onscroll = function () {
    document.getElementById("scrollTop").style.display = window.scrollY > 100 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function searchContent() {
    const input = document.getElementById("search").value.toLowerCase();
    const sections = document.querySelectorAll(".section, .component, .compatibility");

    sections.forEach(section => {
        section.style.display = section.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
});
function searchContent() {
    const input = document.getElementById("search").value.toLowerCase();
    const sections = document.querySelectorAll(".section, .component, .compatibility");

    sections.forEach(section => {
        section.style.display = section.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});





