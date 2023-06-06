
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

const data = [
    {firstName:"Wilson", lastName: "Chan", email: "wilson@gmail.com", message: "Hope this works!"},
];

const addData = (fName, lName, emailParam, messageParam) => {
    data.push({firstName: fName, lastName: lName, email: emailParam, message: messageParam});
}

$(() => {
    $('#submit').on('click', () => {
        const newFirstName = $('#firstName').val();
        const newLastName = $('#lastName').val();
        const newEmail = $('#email').val();
        const message = $('#message').val();
        //console.log(newFirstName, newLastName, newEmail, message);
        addData(newFirstName, newLastName, newEmail, message);
        console.log(data)
        //$('section').addClass('hidden');
        $('div.footer').append('Thank you! Talk to you soon!')
    })

    
});





//carousel??
    // let slideCounter =1;
    // showSlides(slideIndex);

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //     const slides=document.getElementsByClassName('carousel');
    //     const dots = document.getElementsByClassName('dot');
    //     if (n > slides.length) {slideIndex=1}
    //     if (n <1) {slideIndex = slide.length}
    //     for (i=0; i<slides.length; i++) {
    //         slides[i].getElementsByClassName.display = 'none';
    //     }
    //     for (i=0; i<slide.length; i++) {
    //         slides[i].getElementsByClassName.display = 'none';
    //     }
    //     for (i=0; i<dots.length; i++) {
    //         dots[i].clasName = dots[i].className.replace('active', "");
    //     }
    //     slides[slideIndex-1].style.display='block';
    //     dots[slideIndex-1].className += "active";
    // }