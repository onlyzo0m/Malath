//Start About Page

//Start Stats

let counters = document.querySelectorAll(".counter");

let section = document.querySelector(".counter-section");

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
let backgroundImg = document.querySelector("#description");
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
    stats.classList.toggle("bg-success");

    if(document.body.classList.contains("bg-dark")){
        // dark
        mode.classList.remove("bi-moon");
        mode.classList.add("bi-sun");
        landingImg.src = "./assets/landing-dark.jpg";
        backgroundImg.style.backgroundImage = "url('../assets/mission-dark.jpg')";
        image.src = "./assets/last-section.jpg";

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
        landingImg.src = "./assets/landing-light.jpg";
        backgroundImg.style.backgroundImage = "url('../assets/mission-light.jpg')";
        image.src = "./assets/quote.jpg";

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

// start js add book

let darkModeBtn = document.querySelector("#themeBtn");
let card = document.querySelectorAll(".card");
let links= document.querySelectorAll(".text-muted")


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

