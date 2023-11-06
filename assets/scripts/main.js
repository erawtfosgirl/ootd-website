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
let sidebarmenu = document.querySelector('.sidebarmenu');

hamburger.addEventListener('click', () => {
    let isActive = sidebarmenu.classList.contains('active');

    if (!isActive) {
        sidebarmenu.classList.add('active');
    } else {
        sidebarmenu.classList.remove('active');
    }
})