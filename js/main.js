//Start About Page

//Start Stats

let section = document.querySelector(".counter-section");
let counters = document.querySelectorAll(".counter");

let observer = new IntersectionObserver(function(entries) {

    if (entries[0].isIntersecting) {

        counters.forEach(function(counter) {

            let target = Number(counter.getAttribute("data-target"));
            let count = 0;

            let timer = setInterval(function() {

                count++;

                counter.innerHTML = count + "+";

                if (count >= target) {
                    clearInterval(timer);
                }

            }, 30);

        });

        observer.disconnect();
    }
});

observer.observe(section);

//End Stats


//Start Dark Mode in About Page
let mode = document.querySelector("#themeBtn");
let navbar = document.querySelector("#navbar");
let paragraph = document.querySelectorAll(".paragraph");
let landingImg = document.querySelector("#landing-img");
let backgroundImg = document.querySelector("#mission");
let stats = document.querySelector("#stats");
let stat = document.querySelectorAll(".stat");
let image = document.querySelector("#last-section");
let footer = document.querySelector("#footer");


mode.addEventListener("click" , function(){
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-white")

    navbar.classList.toggle("bg-dark")
    navbar.classList.toggle("bg-light")

    navbar.classList.toggle("navbar-dark")
    navbar.classList.toggle("navbar-light")

    footer.classList.toggle("bg-section");
    footer.classList.toggle("bg-dark");

    stats.classList.toggle("bg-section");
    stats.classList.toggle("bg-green");

    if(document.body.classList.contains("bg-dark")){
        // dark
        mode.classList.remove("bi-moon");
        mode.classList.add("bi-sun");
        landingImg.src = "./assets/landing-dark.png";
        backgroundImg.style.backgroundImage = "url('../assets/mission-dark.jpg')";
        image.src = "./assets/chair-dark.jpg";

        paragraph.forEach(function(p) {
            p.classList.remove("text-muted");
            p.classList.add("text-white");
        });
        stat.forEach(function(item) {
            item.classList.remove("text-green");
            item.classList.add("text-white");
        });
        
    }
    else{
        mode.classList.remove("bi-sun");
        mode.classList.add("bi-moon");
        landingImg.src = "./assets/landing-light.png";
        backgroundImg.style.backgroundImage = "url('../assets/mission-light.jpg')";
        image.src = "./assets/chair-light.jpg";

        paragraph.forEach(function(p) {
            p.classList.remove("text-white");
            p.classList.add("text-muted");
        });
        stat.forEach(function(item) {
            item.classList.remove("text-white");
            item.classList.add("text-green");
        });
        
    }

})
//End Dark Mode in About Page

//End About Page
