// toggles dropdown visibility
function toggleDropdown() {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// closes dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        let dropdowns = document.getElementsByClassName("dropdown-text");

        
    }
} 