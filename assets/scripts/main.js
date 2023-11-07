/* Sticky Header*/

let header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 250) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/* Sidebar Menu */

let hamburger = document.querySelector('.hamburger');
let exit = document.querySelector('.exit');
let sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
})
exit.addEventListener('click', () => {
    sidebar.classList.remove('active');
})