/*Dette er en TEST aka jeg leger - Skyum */

/* Opens the menu when the user clicks on it */
function myFunction() {
    document.getElementById("dropdownmenu").classList.toggle("show");
  }
  
  /* Closes when you click outside */
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown_button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }