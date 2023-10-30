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