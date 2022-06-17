$(document).ready(function () {
  $("#q2").hide();
  $("#q3").hide();
  var score = 0;

  $("#11option").click(function () {
    $("#11option").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#12option").click(function () {
    $("#12option").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#13option").click(function () {
    $("#13option").addClass("right");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
    score++;
  });
  $("#14option").click(function () {
    $("#14option").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });

  $("#211option").click(function () {
    score++;
  });

  $("#221option").click(function () {

    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
    score++;
  });
  $("#222option").click(function () {

    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#223option").click(function () {

    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#224option").click(function () {

    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });


  $("#q3text").click(function() {
    var ans = document.getElementById('q3text').value
    if (ans == 'yes') {
      score++;
      localStorage.setItem('ged-score', score);
      window.location.replace("ged-test-result.html");
    }
    else {
      localStorage.setItem('ged-score', score);
      window.location.replace("ged-test-result.html");
    }
  });

});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
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
