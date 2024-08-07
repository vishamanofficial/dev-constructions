let menu_close_btn = document.querySelector(".menu-close-btn");
let menu_open_btn = document.querySelector(".menu-open");
let mobile_nav_box = document.querySelector(".side-menu");
menu_open_btn.addEventListener('click', function() {
    mobile_nav_box.classList.add("open");
    
})
menu_close_btn.addEventListener('click' , function(){
    mobile_nav_box.classList.remove("open");
})


