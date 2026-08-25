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
        backgroundImg.style.backgroundImage = "url('../assets/mission-light.jpg')";

    }

})
//End Dark Mode in About Page
