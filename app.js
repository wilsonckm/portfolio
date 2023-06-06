
const observer = new IntersectionObserver ((entries) => {
    //Built in browser API
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        //example of a callback function: a function that is appsed as an argument to another function.
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$(() => {
    let slideCounter =1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides=document.getElementsByClassName('carousel');
        const dots = document.getElementsByClassName('dot');
        if (n > slides.length) {slideIndex=1}
        if (n <1) {slideIndex = slide.length}
        for (i=0; i<slides.length; i++) {
            slides[i].getElementsByClassName.display = 'none';
        }
        for (i=0; i<slide.length; i++) {
            slides[i].getElementsByClassName.display = 'none';
        }
        for (i=0; i<dots.length; i++) {
            dots[i].clasName = dots[i].className.replace('active', "");
        }
        slides[slideIndex-1].style.display='block';
        dots[slideIndex-1].className += "active";
    }

});



