
// const observer = new IntersectionObserver ((entries) => {
//     //Built in browser API
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//         //example of a callback function: a function that is appsed as an argument to another function.
//     });
// })

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

const data = [
    {firstName:"Wilson", lastName: "Chan", email: "wilson@gmail.com", message: "Hope this works!"},
];

const addData = (fName, lName, emailParam, messageParam) => {
    data.push({firstName: fName, lastName: lName, email: emailParam, message: messageParam});
}

let indexImage = 0;
const imageArr = [
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1604593042837-6GY50U84DMA06VIVW4BP/WCKM-0564.jpg?format=750w', 
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1604593064545-LA26MFZJ52EZ76EQ1P6W/WCKM-0560.jpg' ,
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388710371-3H3HHF31X20Q6LN8KDRX/WCKM-4-2.jpg?format=750w' ,
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388779811-2IPB8FL2DVYOXQH9HGAG/WCKM-4.jpg?format=2500w',
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1556597199650-BMJVREXZ7TZY2OT3HENO/WCKM-2584.jpg?format=2500w' ,
    'https://images.squarespace-cdn.com/content/v1/570084ed62cd94d3a2ac2196/1555388670850-335M3F06Z8460G9PZZCQ/WCKM-1-2.jpg?format=1500w' 
]

const showImage = () => {
const $imageDiv = $('.imgSlide');
  $imageDiv.empty();
  $imageDiv.append(`<img src="${imageArr[indexImage]}" class="imgSlide">`);
};

$(() => {
    //Contact page: submit button
    $('#submit').on('click', () => {
        const newFirstName = $('#firstName').val();
        const newLastName = $('#lastName').val();
        const newEmail = $('#email').val();
        const message = $('#message').val();
        //console.log(newFirstName, newLastName, newEmail, message);
        addData(newFirstName, newLastName, newEmail, message);
        console.log(data)
        $('.footer').append('Thank you! Talk to you soon!')
    })
    



    //carousel:
    const $imageDiv = $('<div>').css('position', 'relative');
    //next button:
    const $nextButton = $(".carousel-button.next");
    $nextButton.css('cursor', 'pointer');
    $nextButton.on('click', () => {
        // indexImage = (indexImage + 1) % imageArr.length;
        if (indexImage >= imageArr.length-1) {
                indexImage = 0;
            } else {
                    indexImage += 1;
                }
        showImage()
    })
    //previous button
    const $prevButton = $(".carousel-button.prev");
    $prevButton.css('cursor', 'pointer');
    $prevButton.on('click', () => { 
        //indexImage = (indexImage - 1 + imageArr.length) % imageArr.length;
       if (indexImage < 1 ) {
               indexImage = imageArr.length-1;
           } else {
                   indexImage -= 1;
               }
        showImage()
    })
    showImage();

    //Links:
    //Linkedin
    const $linkedIn = $("<a>").addClass("fa-brands fa-linkedin-in").attr("href", "https://www.linkedin.com/in/wilson-chan-pt-dpt-000a49210/")
    $(".footer").append($linkedIn);
    //Squarespace
    const $squarespace = $("<a>").addClass("fa-brands fa-squarespace").attr("href", "https://www.wilsonchanphotography.com/travel")
    $(".footer").append($squarespace);



    //Menu toggle and animation:
    const $menuButton = $(".menu")
    const $navBar = $(".links")
        $menuButton.on('click',() => {
            $menuButton.toggleClass("morph");
            $navBar.toggleClass("hidden");

        })

});

