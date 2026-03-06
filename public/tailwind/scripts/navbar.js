function showMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.hasAttribute("open")) {
        dropdownMenu.removeAttribute("open");
    } else {
        dropdownMenu.setAttribute("open", "");
    }
}

function showMobileMenu() {
    const dropdownMenu = document.getElementById("mobile-dropdown-menu");
    if (dropdownMenu.hasAttribute("open")) {
        dropdownMenu.removeAttribute("open");
    } else {
        dropdownMenu.setAttribute("open", "");
    }
}

function showMobileNav() {
    const dropdownMenu = document.getElementById("mobile-nav");
    if (dropdownMenu.hasAttribute("open")) {
        dropdownMenu.removeAttribute("open");
    } else {
        dropdownMenu.setAttribute("open", "");
    }
}
