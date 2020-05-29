
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
    let modalTitle = document.getElementById("modal-card-title");
    modalTitle.innerHTML = $(projectCard).find(".title").text();
}
