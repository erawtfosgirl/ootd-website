/* Sticky Header*/
// Get the current page URL
const currentPageURL = window.location.href;
let header = document.querySelector(".site-header");


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
} else {
    header.classList.add("sticky");
}


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
let searchArea = document.querySelector('.search-area');
let exitBtn = document.querySelector('.exit-search');

searchBtn.addEventListener('click', () => {
    searchArea.classList.add('active-search-area');
})
exitBtn.addEventListener('click', () => {
    searchArea.classList.remove('active-search-area');
})

/* FAQ items*/

let questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        let response = question.nextElementSibling;
        let isActive = response.classList.contains('active');

        // Close all responses
        questions.forEach(item => {
            if (item !== question) {
                let otherResponse = item.nextElementSibling;
                otherResponse.classList.remove('active');
            }
        });

        // Toggle active class for the clicked item
        if (!isActive) {
            response.classList.add('active');
        } else {
            response.classList.remove('active');
        }

    })

})

