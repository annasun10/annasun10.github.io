// toggles the dropdown menu
function toggleDropdown(event) {
    let dropdown = event.currentTarget.nextElementSibling;
    let caret = event.currentTarget.querySelector(".caret");

    let isOpen = dropdown.classList.contains("show");

    if (isOpen) { // closes dropdown
        dropdown.classList.remove("show");
        caret.classList.remove("rotate");

        dropdown.style.maxHeight = "0";
        dropdown.style.opacity = "0";

        setTimeout(() => {
            dropdown.style.visibility = "hidden";
            
        }, 300);
    } else { // opens dropdown
        dropdown.style.display = "block";
        dropdown.style.visibility = "visible";
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        dropdown.style.opacity = "1";

        setTimeout(() => dropdown.classList.add("show"), 10);

        caret.classList.add("rotate");
    }
}

// close the dropdown if screen is clicked outside of it
function clickOutside(event) {
    document.querySelectorAll(".dropdown-text.show").forEach((dropdown) => {
        let button = dropdown.previousElementSibling;

        // closes dropdown if the click is outside
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
            button.querySelector(".caret").classList.remove("rotate");

            dropdown.style.maxHeight = "0";
            dropdown.style.opacity = "0";

            setTimeout(() => {
                dropdown.style.display = "none"; 
            }, 300);
        }
    });
}

// wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    // attaches click event to all dropdown buttons
    document.querySelectorAll(".dropdown-button").forEach((button) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); 
            toggleDropdown(event);
        });
    });

    // attach global click listener to detect outside clicks
    window.addEventListener("click", clickOutside);
});