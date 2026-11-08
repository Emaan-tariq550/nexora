
// =====================================
// NEXORA — JAVASCRIPT
// =====================================


// 1. Select navigation elements

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


// 2. Mobile hamburger menu

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change hamburger icon

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    // Render updated icon

    if (window.lucide) {
        lucide.createIcons();
    }

});


// 3. Close mobile menu when a link is clicked

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }

    });

});


// 4. Close menu when clicking outside

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }

    }

});


// 5. Update active navigation link

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navItems.forEach((link) => {
            link.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// 6. Automatically update footer year

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// 7. Render Lucide icons

if (window.lucide) {
    lucide.createIcons();
}
