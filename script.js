let bars = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let hiddinNav = document.querySelector('.hiidin_nav');
let nav = document.querySelector('nav');

bars.addEventListener('click' , () =>{
    hiddinNav.classList.toggle('Show_menu');
    menu.classList.toggle('menu_show');
    nav.classList.toggle('nav_bg_color');
});