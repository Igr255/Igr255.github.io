
// used for hamburger menu
function displayNavMenu() {
  var navMenu = document.getElementById("navigation");

  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

// changes color of selected sections in top menu so user can see the section they selected last
$(document).ready(function() {
  var $li = $('#navigation li').click(function() {
    // removes selected class frrom all "li" elements everytime "li" is clicked
    $li.removeClass('selected');
    // sets selected class only to the clicked li
    $(this).addClass('selected');

    // hides the menu when one of its buttons is clicked
    if ($( document ).width() <= 1200) {
      document.getElementById("navigation").style.display = "none";
    }

  })
});

// making menu visible after webpage is stretched back to full width and burger menu set navigation to "none"
// also closes burger menu every time width is adjusted
$(document).ready(function() {
    $(window).resize(function() {
         if ($( document ).width() > 1200) {
        	 document.getElementById("navigation").style.display = "block";
         }
         else {
         	 document.getElementById("navigation").style.display = "none";
         }
    })
});