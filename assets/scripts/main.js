/* Sticky Header*/
// Get the current page URL
const currentPageURL = window.location.href;
console.log(currentPageURL);

let header = document.querySelector(".site-header");



// Function to change header color based on URL
function changeHeaderColor() {
    // Check the URL and change header color accordingly
    if (currentPageURL.includes('index')) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 250) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    } else if (currentPageURL.includes('about')) {
        header.classList.add("sticky");
    }
}

// Call the function when the page loads
window.onload = changeHeaderColor;


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

/* Wishlist Icon */

let allwishlist = document.querySelectorAll('.wishlist');
allwishlist.forEach(item => {
    item.addEventListener('click', () => {
        let path = item.firstElementChild.firstElementChild;
        let isActive = path.classList.contains('active');
        if (!isActive) {
            path.classList.add('active');
        } else {
            path.classList.remove('active');
        }

    })
})

/* Open Search Section */

let searchBtn = document.querySelector('.search');
let searchSection = document.querySelector('.search-section');
let exitBtn = document.querySelector('.exit-search');

searchBtn.addEventListener('click', () => {
    searchSection.classList.add('active-search-section');
})
exitBtn.addEventListener('click', () => {
    searchSection.classList.remove('active-search-section');
})




