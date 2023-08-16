//nav toggler

let navToggler =document.querySelector('.nav-toggler')
let menu = document.querySelector('.nav-menu')

navToggler.addEventListener('click',()=>{
    navToggler.classList.toggle('active')
    menu.classList.toggle('active')
})


// about-us

let reviews = document.querySelectorAll('.review-wrapper');
let currReviews = [0, 2];

let updateReviewSlider = (cards) => {
    cards.forEach((card_index) => {
        reviews[card_index].classList.add('active');
    });
};

let updateReviews = () => {
    currReviews.forEach((card_index, i) => {
        reviews[card_index].classList.remove('active');

        currReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;
    });

    setTimeout(() => {
        updateReviewSlider(currReviews);
    }, 250); // Delay removed
};

setInterval(() => {
    updateReviews();
}, 5000);

updateReviewSlider(currReviews); 



// faq

let faqs = [...document.querySelectorAll('.faq')]

faqs.map(faq =>{
    let ques =faq.querySelector('.question-box');

    ques.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })
})

// Animation
AOS.init();