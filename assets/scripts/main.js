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
        let firstIcon = item.firstElementChild;
        let secondIcon = item.lastElementChild;
        console.log(firstIcon);
        firstIcon.classList.toggle('hidden');
        secondIcon.classList.toggle('hidden');
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


/*Filter Shop Menu*/

// let shopfilterbtn = document.querySelector('.shopfilter-btn');
// let closefiltermenu = document.querySelector('.closefiltermenu');
// let filtermenu = document.querySelector('.filter-menu');
// let overlay = document.querySelector('.overlay');

// shopfilterbtn.addEventListener('click', () => {
//     filtermenu.classList.add('active');
//     overlay.style.display = 'block';
// })
// closefiltermenu.addEventListener('click', () => {
//     filtermenu.classList.remove('active');
//     overlay.style.display = 'none';
// })

/*Price Range*/

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});



const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientHeight;

    document.querySelector('.img-showcase').style.transform = `translateY(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

