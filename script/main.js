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

        ],
        "desc" : "",
        "link" : ""
    },

    "proj3" : {
        "name" : "",
        "images" : [

        ],
        "desc" : "",
        "link" : ""
    },

    "proj4" : {
        "name" : "",
        "images" : [

        ],
        "desc" : "",
        "link" : ""
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
        let projectCard =
            event.srcElement.parentElement.parentElement.parentElement;
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
    let projectOrder = projectCard.id;
    let projObj = projects[projectOrder];
    let imgCount = projObj["images"].length;
    let imgCounter = 0;
    // Title
    let modalTitle = document.getElementById("modal-card-title");
    modalTitle.innerHTML = projObj["name"]


    // Image
    let modalGallery = document.getElementById("modal-card-image");
    modalGallery.setAttribute("src", projObj["images"][imgCounter % imgCount]);

    let prevImg = document.getElementById("prevImage");
    prevImg.addEventListener("click", function(){
        imgCounter--;
        console.log(imgCounter)
        modalGallery.setAttribute("src", projObj["images"][imgCounter % imgCount]);
    });

    let nextImg = document.getElementById("nextImage");
    prevImg.addEventListener("click", function(){
        imgCounter++;
        modalGallery.setAttribute("src", projObj["images"][imgCounter % imgCount]);
    });


    // Description
    let modalDesc = document.getElementById("modal-card-desc");
    modalDesc.innerHTML = projObj["desc"];

    // Link modalView
    let modalViewButt = document.getElementById("modalView");
    modalViewButt.setAttribute("href", projObj["link"]);
    modalViewButt.setAttribute("target", "_blank");
}
