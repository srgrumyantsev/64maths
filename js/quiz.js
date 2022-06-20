$(document).ready(function () {
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#q5").hide();
  var score = 0;

/* q1 */
  $("#q1option1").click(function () {
    $("#q1option1").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#q1option2").click(function () {
    $("#q1option2").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#q1option3").click(function () {
    $("#q1option3").addClass("right");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
    score++;
  });
  $("#q1option4").click(function () {
    $("#q1option4").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });

/*q2*/
  $("#q2option1").click(function () {
    $("#21option1").addClass("wrong");
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option2").click(function () {
    $("#q2option2").addClass("right");
    score++;
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option3").click(function () {
    $("#q2option3").addClass("wrong");
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option4").click(function () {
    $("#q2option4").addClass("wrong");
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });

/* DROPDOWN
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

  */

  /*old q3
  $("#submit_q3_button").click (function(){
    var ans = document.getElementById('q3ans').value;
    if (ans == '37.503'){
      score++;
      localStorage.setItem('ged-score',score);
      window.location.replace('ged-test-result.html');
    } else {
      localStorage.setItem('ged-score',score);
      window.location.replace('ged-test-result.html');
    }
  })
  */

/*q3 */
  $("#submit_q3_button").click (function(){
    var ans = document.getElementById('q3ans').value;
    if (ans == '37.503'){
      score++;
      $("#q4").slideDown(1000);
      $("#q3").slideUp(500);
    } else {
      $("#q4").slideDown(1000);
      $("#q3").slideUp(500);
    }
  })

  /*q4 */
    $("#q4option1").click(function () {
      $("#q4option1").addClass("wrong");
      $("#q5").slideDown(1000);
      $("#q4").slideUp(500);
    });
    $("#q4option2").click(function () {
      $("#q4option2").addClass("wrong");
      $("#q5").slideDown(1000);
      $("#q4").slideUp(500);
    });
    $("#q4option3").click(function () {
      $("#q4option3").addClass("right");
      $("#q5").slideDown(1000);
      $("#q4").slideUp(500);
      score++;
    });
    $("#q4option4").click(function () {
      $("#q4option4").addClass("wrong");
      $("#q5").slideDown(1000);
      $("#q4").slideUp(500);
    });

  /*q5 */
  $("#q5option1").click(function () {
    $("#q5option1").addClass("wrong");
    localStorage.setItem('ged-score',score);
    window.location.replace('ged-test-result.html');
  });

  $("#q5option2").click(function () {
    $("#54option2").addClass("wrong");
    localStorage.setItem('ged-score',score);
    window.location.replace('ged-test-result.html');

  });

  $("#q5option3").click(function () {
    $("#q5option3").addClass("wrong");
    localStorage.setItem('ged-score',score);
    window.location.replace('ged-test-result.html');

  });

  $("#q5option4").click(function () {
    $("#q5option4").addClass("right");
    score++;
    localStorage.setItem('ged-score',score);
    window.location.replace('ged-test-result.html');
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
