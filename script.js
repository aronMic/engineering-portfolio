
// MOBILE NAVIGATION

// Select the HTML elements
const menuButton = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");
const navigationLinks = document.querySelectorAll(".menu-links a");

// Open or close the mobile menu
function toggleMenu() {
    const isOpen = menuLinks.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);

    // Tell screen readers whether the menu is open
    menuButton.setAttribute("aria-expanded", isOpen);
}

// Close the mobile menu
function closeMenu() {
    menuLinks.classList.remove("open");
    menuButton.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
}

// EVENT LISTENERS


// Toggle the menu when the hamburger is clicked
menuButton.addEventListener("click", toggleMenu);

// Close the menu after selecting a navigation link
navigationLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});

// Close the menu when clicking outside
document.addEventListener("click", function(event) {
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (!hamburgerMenu.contains(event.target)) {
        closeMenu();
    }
});

// Close the menu when Escape is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

// Close the menu when switching to desktop view
window.addEventListener("resize", function() {
    if (window.innerWidth > 1200) {
        closeMenu();
    }
});
