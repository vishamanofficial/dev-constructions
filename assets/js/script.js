let menu_close_btn = document.querySelector(".menu-close-btn");
let menu_open_btn = document.querySelector(".menu-open");
let mobile_nav_box = document.querySelector(".side-menu");
let menu_items = document.querySelectorAll(".side-menu ul li a");

// Function to close the menu
function closeMenu() {
    mobile_nav_box.classList.remove("open");
}

// Open menu when the menu button is clicked
menu_open_btn.addEventListener('click', function() {
    mobile_nav_box.classList.add("open");
});

// Close menu when the close button is clicked
menu_close_btn.addEventListener('click', closeMenu);

// Close menu when any menu item is clicked
menu_items.forEach(function(item) {
    item.addEventListener('click', closeMenu);
});
