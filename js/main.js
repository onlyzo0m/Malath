//Start Dark Mode in About Page
let mode = document.querySelector("#themeBtn");
let navbar = document.querySelector("#navbar");
let paragraph = document.querySelector(".text");
let landingImg = document.querySelector("#landing-img");
let backgroundImg = document.querySelector("#description");


mode.addEventListener("click" , function(){
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-white")

    navbar.classList.toggle("bg-dark")
    navbar.classList.toggle("bg-light")

    navbar.classList.toggle("navbar-dark")
    navbar.classList.toggle("navbar-light")

    paragraph.classList.toggle("text-white");
    paragraph.classList.toggle("text-muted");




    if(document.body.classList.contains("bg-dark")){
        // dark
        mode.classList.remove("bi-moon");
        mode.classList.add("bi-sun");
        landingImg.src = "./assets/landing-dark.jpg";
        backgroundImg.style.backgroundImage = "url('../assets/mission-dark.jpg')";


    }
    else{
        mode.classList.remove("bi-sun");
        mode.classList.add("bi-moon");
        landingImg.src = "./assets/landing-light.jpg";
        backgroundImg.style.backgroundImage = "url('../assets/mission-dark.jpg')";

    }

})

//End Dark Mode in About Page


// start js add book

let darkModeBtn = document.querySelector("#themeBtn");


let card = document.querySelectorAll(".card");
let links= document.querySelectorAll(".text-muted")
let inputs = document.querySelectorAll(".form-control, .form-select");

darkModeBtn.addEventListener("click", function () {

    card.forEach(function (card) {

        card.classList.toggle("bg-dark");
        card.classList.toggle("text-white");

    });


    if (document.body.classList.contains("bg-dark")) {

        links.forEach(function (link) {
            link.classList.remove("text-muted");
            link.classList.add("text-light");
        });

    } else {

        links.forEach(function (link) {
            link.classList.remove("text-light");
            link.classList.add("text-muted");
        });

};
});







// vanilla js to count textarea

let textarea = document.querySelector("#bookDescription");
let count = document.querySelector("#charCount");

textarea.addEventListener("input", function () {
  count.textContent = textarea.value.length;
});

// end js add book

