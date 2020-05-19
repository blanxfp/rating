const stars = document.querySelectorAll('.element');
const rating = document.querySelector('.rating');


function fillPrevious(event) {
    if(!rating.classList.contains('fixed')) {
        stars.forEach(star => {
            star.classList.remove('show');
        });
        let elem = event.currentTarget;
        elem.classList.add('show');
        // Setup siblings array and get the first sibling
        var sibling = elem.previousElementSibling;
    
    
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                sibling.classList.add('show');
            } else {
                sibling.classList.remove('show');
            }
            sibling = sibling.previousElementSibling
        }
    }
    
}

function fillPreviousFixed(event) {
    rating.classList.add('fixed');
}

stars.forEach(star => {
    star.addEventListener('mouseover', fillPrevious);
});

rating.addEventListener('mouseleave', function(){
    if(!rating.classList.contains('fixed')) {
        stars.forEach(star => {
            star.classList.remove('show');
        });
    }
});

document.addEventListener('click', function(event) {
    if(event.currentTarget != rating &&  rating.classList.contains('fixed')) {
        stars.forEach(star => {
            star.classList.remove('show');
        });
        rating.classList.remove('fixed');
    }
}, true);

stars.forEach(star => {
    star.addEventListener('click', fillPreviousFixed);
});