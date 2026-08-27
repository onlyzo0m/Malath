//Start About Page

//Start Stats

let section = document.querySelector(".counter-section");
let counters = document.querySelectorAll(".counter");

if(section){

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

}

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


if(mode){

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
        //light
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
}

//End Dark Mode in About Page

//End About Page

//explore dark mode

document.addEventListener("DOMContentLoaded", function () {
    // 1. Target Filter Buttons & Sections
    const filterButtons = document.querySelectorAll(".btn-filter");
    const sections = {
    english: document.getElementById("englishBooks"),
    school: document.getElementById("schoolBooks"),
    novels: document.getElementById("novelBooks")
    };

    // 2. Click Handling Logic
    filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const selectedFilter = this.getAttribute("data-filter");

        // Remove 'active' class from all buttons and add to the clicked one
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        // Toggle visibility based on selected filter
        if (selectedFilter === "all") {
        Object.values(sections).forEach(sec => sec && sec.classList.remove("d-none"));
        } else {
        Object.keys(sections).forEach(key => {
            if (sections[key]) {
        if (key === selectedFilter) {
                sections[key].classList.remove("d-none");
            } else {
                sections[key].classList.add("d-none");
            }
            }
        });
            }
            });
        });
    });


//end dark mode explore page



// start js add book

//let darkModeBtn = document.querySelector("#themeBtn");
let darkModeBtn =document.querySelector("#themeBtn");
let card = document.querySelectorAll(".card");
let links= document.querySelectorAll(".text-muted")

if(darkModeBtn){
darkModeBtn.addEventListener("click", function () {

        if(document.body.classList.contains("bg-dark")){
        // dark
        mode.classList.remove("bi-moon");
        mode.classList.add("bi-sun");
        
    }
    else{
        mode.classList.remove("bi-sun");
        mode.classList.add("bi-moon");
    
        
    }

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

}





// vanilla js to count textarea

let textarea = document.querySelector("#bookDescription");
let count = document.querySelector("#charCount");

textarea.addEventListener("input", function () {
  count.textContent = textarea.value.length;
});

// end js add book

