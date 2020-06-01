const projects ={
    "proj1" : {
        "name" : "Sort-and-Shuffle",
        "images" : [
            "media/proj1/bubble.gif",
            "media/proj1/merge.gif",
            "media/proj1/insertion.gif",
            "media/proj1/selection.gif"
        ],
        "desc" : "A Python program that visualize different sorting algorithms, and shuffling algorithm. Visualized with PyQt.",
        "link" : "https://github.com/Spoonzio/Sort-and-Shuffle"
    },

    "proj2" : {
        "name" : "RecipeWeb",
        "images" : [
            "media/proj2/homepage.gif",
            "media/proj2/search.gif",
            "media/proj2/recipe.png",
            "media/proj2/login.png",
            "media/proj2/saved.png"
        ],
        "desc" : "A web app with a local search engine for dishes and drinks recipes, include an account system to save recipes.",
        "link" : "https://github.com/Spoonzio/RecipeWeb"
    },

    "proj3" : {
        "name" : "Under Construction",
        "images" : [
            "media/proj3/cover.gif"
        ],
        "desc" : "My summer project!",
        "link" : ""
    },

    "proj4" : {
        "name" : "LiveMood",
        "images" : [
            "media/proj4/landing.gif",
            "media/proj4/dashboard.png",
            "media/proj4/survey.png",
            "media/proj4/group.png",
            "media/proj4/suggest.png"
        ],
        "desc" : "A web application, made to track the user's mood, receive activity suggestions based on their mood. It is a group project for the 5-week CST course COMP 2800, at BCIT."
            + "<br><br>" + "I was involved in the core data handling, from and to, between database and various other features / pages, eg: charts, suggestions and surveys.",
        "link" : "https://github.com/RADeveloping/COMP-2800-Team-BBY-09-LiveMood"
    }
};

$(document).ready(function () {
    // Navbar toggle
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Open modal
    $(".card-image").click(function () {
        // Toggle the "is-active" class for modal
        $("#projectModal").addClass("is-active");

        // Form modal
        let projectCard = event.srcElement;
        makemodal(projectCard);
    });

    // Close modal
    $(".delete").click(function () {
        // Toggle the "is-active" class for modal
        $("#projectModal").removeClass("is-active");
    });

    // Close modal
    $(".modal-background").click(function () {
        // Toggle the "is-active" class for modal
        $("#projectModal").removeClass("is-active");
    });
});

// Build modal
function makemodal(projectCard) {
    console.log(projectCard)

    let projectOrder = projectCard.getAttribute("data-project"); ;
    let projObj = projects[projectOrder];
    let imgCount = projObj["images"].length;
    let imgCounter = 0;
    // Title
    let modalTitle = document.getElementById("modal-card-title");
    modalTitle.innerHTML = projObj["name"]


    // Image
    let modalGallery = document.getElementById("modal-card-image");
    modalGallery.setAttribute("src", projObj["images"][mod(imgCounter, imgCount)]);

    let prevImg = document.getElementById("prevImage");
    prevImg.addEventListener("click", function(){
        imgCounter--;
        console.log(imgCounter +"%"+ imgCount +"=" + (mod(imgCounter, imgCount)))
        modalGallery.setAttribute("src", projObj["images"][mod(imgCounter, imgCount)]);
    });

    let nextImg = document.getElementById("nextImage");
    nextImg.addEventListener("click", function(){
        imgCounter++;
        console.log(imgCounter +"%"+ imgCount +"=" + (mod(imgCounter, imgCount)))
        modalGallery.setAttribute("src", projObj["images"][mod(imgCounter, imgCount)]);
    });


    // Description
    let modalDesc = document.getElementById("modal-card-desc");
    modalDesc.innerHTML = projObj["desc"];

    // Link modalView
    let modalViewButt = document.getElementById("modalView");
    modalViewButt.setAttribute("href", projObj["link"]);
    modalViewButt.setAttribute("target", "_blank");


}

// Modular function using (%) remainder operator.
function mod(n, m) {
    return ((n % m) + m) % m;
}


