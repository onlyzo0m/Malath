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

//explore dark mode
<script>
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
</script>

//end dark mode explore page