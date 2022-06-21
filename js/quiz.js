$(document).ready(function() {
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#q5").hide();
  $("#q6").hide();
  $("#q7").hide();
  $("#q8").hide();
  $("#q9").hide();
  $("#q10").hide();
  $("#q11").hide();
  $("#q12").hide();
  $("#q13").hide();
  $("#q14").hide();
  $("#q15").hide();
  $("#q16").hide();
  $("#q17").hide();
  $("#q18").hide();
  $("#q19").hide();
  $("#q20").hide();
  $("#q21").hide();
  $("#q22").hide();
  $("#q23").hide();
  $("#q24").hide();
  $("#q25").hide();
  $("#q26").hide();
  $("#q27").hide();
  $("#q28").hide();
  $("#q29").hide();
  $("#q30").hide();

  var score = 0;

  /* q1 */
  $("#q1option1").click(function() {
    $("#q1option1").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#q1option2").click(function() {
    $("#q1option2").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });
  $("#q1option3").click(function() {
    $("#q1option3").addClass("right");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
    score++;
  });
  $("#q1option4").click(function() {
    $("#q1option4").addClass("wrong");
    $("#q2").slideDown(1000);
    $("#q1").slideUp(500);
  });

  /*q2*/
  $("#q2option1").click(function() {
    $("#21option1").addClass("wrong");
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option2").click(function() {
    $("#q2option2").addClass("right");
    score++;
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option3").click(function() {
    $("#q2option3").addClass("wrong");
    $("#q3").slideDown(1000);
    $("#q2").slideUp(500);
  });
  $("#q2option4").click(function() {
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
  $("#submit_q3_button").click(function() {
    var ans = document.getElementById('q3ans').value;
    if (ans == '37.503') {
      score++;
      $("#q4").slideDown(1000);
      $("#q3").slideUp(500);
    } else {
      $("#q4").slideDown(1000);
      $("#q3").slideUp(500);
    }
  })

  /*q4 */
  $("#q4option1").click(function() {
    $("#q4option1").addClass("wrong");
    $("#q5").slideDown(1000);
    $("#q4").slideUp(500);
  });
  $("#q4option2").click(function() {
    $("#q4option2").addClass("wrong");
    $("#q5").slideDown(1000);
    $("#q4").slideUp(500);
  });
  $("#q4option3").click(function() {
    $("#q4option3").addClass("right");
    $("#q5").slideDown(1000);
    $("#q4").slideUp(500);
    score++;
  });
  $("#q4option4").click(function() {
    $("#q4option4").addClass("wrong");
    $("#q5").slideDown(1000);
    $("#q4").slideUp(500);
  });

  /*q5 */
  $("#q5option1").click(function() {
    $("#q5option1").addClass("wrong");
    $("#q6").slideDown(1000);
    $("#q5").slideUp(500);
  });

  $("#q5option2").click(function() {
    $("#54option2").addClass("wrong");
    $("#q6").slideDown(1000);
    $("#q5").slideUp(500);
  });

  $("#q5option3").click(function() {
    $("#q5option3").addClass("wrong");
    $("#q6").slideDown(1000);
    $("#q5").slideUp(500);
  });

  $("#q5option4").click(function() {
    $("#q5option4").addClass("right");
    $("#q6").slideDown(1000);
    $("#q5").slideUp(500);
    score++;
  });

  /*q6 */
  $("#q6option1").click(function() {
    $("#q6option1").addClass("right");
    score++;
    $("#q7").slideDown(1000);
    $("#q6").slideUp(500);
  });

  $("#q6option2").click(function() {
    $("#q6option2").addClass("wrong");
    $("#q7").slideDown(1000);
    $("#q6").slideUp(500);
  });

  $("#q6option3").click(function() {
    $("#q6option3").addClass("wrong");
    $("#q7").slideDown(1000);
    $("#q6").slideUp(500);
  });

  $("#q6option4").click(function() {
    $("#q6option4").addClass("wrong");
    $("#q7").slideDown(1000);
    $("#q6").slideUp(500);
  });

  /*q7 */
  $("#q7option1").click(function() {
    $("#q7option1").addClass("wrong");
    score++;
    $("#q8").slideDown(1000);
    $("#q7").slideUp(500);
  });

  $("#q7option2").click(function() {
    $("#q7option2").addClass("wrong");
    $("#q8").slideDown(1000);
    $("#q7").slideUp(500);
  });

  $("#q7option3").click(function() {
    $("#q7option3").addClass("wrong");
    $("#q8").slideDown(1000);
    $("#q7").slideUp(500);
  });

  $("#q7option4").click(function() {
    $("#q7option4").addClass("right");
    score++;
    $("#q8").slideDown(1000);
    $("#q7").slideUp(500);
  });

  /*q8 */
  $("#q8option1").click(function() {
    $("#q8option1").addClass("wrong");
    $("#q9").slideDown(1000);
    $("#q8").slideUp(500);
  });

  $("#q8option2").click(function() {
    $("#q8option2").addClass("right");
    score++;
    $("#q9").slideDown(1000);
    $("#q8").slideUp(500);
  });

  $("#q8option3").click(function() {
    $("#q8option3").addClass("wrong");
    $("#q9").slideDown(1000);
    $("#q8").slideUp(500);
  });

  $("#q8option4").click(function() {
    $("#q8option4").addClass("right");
    score++;
    $("#q9").slideDown(1000);
    $("#q8").slideUp(500);
  });

  /*q9 */
  $("#q9option1").click(function() {
    $("#q9option1").addClass("right");
    score++;
    $("#q10").slideDown(1000);
    $("#q9").slideUp(500);
  });

  $("#q9option2").click(function() {
    $("#q9option2").addClass("wrong");
    $("#q10").slideDown(1000);
    $("#q9").slideUp(500);
  });

  $("#q9option3").click(function() {
    $("#q9option3").addClass("wrong");
    $("#q10").slideDown(1000);
    $("#q9").slideUp(500);
  });

  $("#q9option4").click(function() {
    $("#q9option4").addClass("right");
    score++;
    $("#q10").slideDown(1000);
    $("#q9").slideUp(500);
  });

  /*q10 */
  $("#q10option1").click(function() {
    $("#q10option1").addClass("wrong");
    $("#q11").slideDown(1000);
    $("#q10").slideUp(500);
  });

  $("#q10option2").click(function() {
    $("#q10option2").addClass("wrong");
    $("#q11").slideDown(1000);
    $("#q10").slideUp(500);
  });

  $("#q10option3").click(function() {
    $("#q10option3").addClass("right");
    score++;
    $("#q11").slideDown(1000);
    $("#q10").slideUp(500);
  });

  $("#q10option4").click(function() {
    $("#q10option4").addClass("wrong");
    $("#q11").slideDown(1000);
    $("#q10").slideUp(500);
  });

  /*q11*/
  $("#submit_q11_button").click(function() {
    var ans = document.getElementById('q11ans').value;
    if (ans == '10') {
      score++;
      $("#q12").slideDown(1000);
      $("#q11").slideUp(500);
    } else {
      $("#q12").slideDown(1000);
      $("#q11").slideUp(500);
    }
  })

  /*q12 */
  $("#q12option1").click(function() {
    $("#q12option1").addClass("wrong");
    $("#q13").slideDown(1000);
    $("#q12").slideUp(500);
  });

  $("#q12option2").click(function() {
    $("#q12option2").addClass("wrong");
    $("#q13").slideDown(1000);
    $("#q12").slideUp(500);
  });

  $("#q12option3").click(function() {
    $("#q12option3").addClass("right");
    score++;
    $("#q13").slideDown(1000);
    $("#q12").slideUp(500);
  });

  $("#q12option4").click(function() {
    $("#q12option4").addClass("wrong");
    $("#q13").slideDown(1000);
    $("#q12").slideUp(500);
  });

  /*q13 */
  $("#q13option1").click(function() {
    score++;
    $("#q14").slideDown(1000);
    $("#q13").slideUp(500);
  });
  $("#q13option2").click(function() {
    $("#q14").slideDown(1000);
    $("#q13").slideUp(500);
  });

  /*q14 */
  $("#submit_q14_button").click(function() {
    var ans = document.getElementById('q14ans').value;
    if (ans == '0.005634') {
      score++;
      $("#q15").slideDown(1000);
      $("#q14").slideUp(500);
    } else {
      $("#q15").slideDown(1000);
      $("#q14").slideUp(500);
    }
  })

  /*q15*/

  $("#q15option1").click(function() {
    $("#q15option1").addClass("wrong");
    $("#q16").slideDown(1000);
    $("#q15").slideUp(500);
  });

  $("#q15option2").click(function() {
    $("#q15option2").addClass("right");
    score++;
    $("#q16").slideDown(1000);
    $("#q15").slideUp(500);
  });

  $("#q15option3").click(function() {
    $("#q15option3").addClass("wrong");
    $("#q16").slideDown(1000);
    $("#q15").slideUp(500);
  });

  $("#q15option4").click(function() {
    $("#q15option4").addClass("wrong");
    $("#q16").slideDown(1000);
    $("#q15").slideUp(500);
  });

  /*q16*/

  $("#q16option1").click(function() {
    $("#q16option1").addClass("wrong");
    $("#q17").slideDown(1000);
    $("#q16").slideUp(500);
  });

  $("#q16option2").click(function() {
    $("#q16option2").addClass("wrong");
    $("#q17").slideDown(1000);
    $("#q16").slideUp(500);
  });

  $("#q16option3").click(function() {
    $("#q16option3").addClass("wrong");
    $("#q17").slideDown(1000);
    $("#q16").slideUp(500);
  });

  $("#q16option4").click(function() {
    $("#q16option4").addClass("right");
    score++;
    $("#q17").slideDown(1000);
    $("#q16").slideUp(500);
  });

  /*q17*/

  $("#q17option1").click(function() {
    $("#q17option1").addClass("wrong");
    $("#q18").slideDown(1000);
    $("#q17").slideUp(500);
  });

  $("#q17option2").click(function() {
    $("#q17option2").addClass("wrong");
    $("#q18").slideDown(1000);
    $("#q17").slideUp(500);
  });

  $("#q17option3").click(function() {
    $("#q17option3").addClass("wrong");
    $("#q18").slideDown(1000);
    $("#q17").slideUp(500);
  });

  $("#q17option4").click(function() {
    $("#q17option4").addClass("right");
    score++;
    $("#q18").slideDown(1000);
    $("#q17").slideUp(500);
  });

  /*q18*/

  $("#q18option1").click(function() {
    $("#q18option1").addClass("wrong");
    $("#q19").slideDown(1000);
    $("#q18").slideUp(500);
  });

  $("#q18option2").click(function() {
    $("#q18option2").addClass("wrong");
    $("#q19").slideDown(1000);
    $("#q18").slideUp(500);
  });

  $("#q18option3").click(function() {
    $("#q18option3").addClass("right");
    score++;
    $("#q19").slideDown(1000);
    $("#q18").slideUp(500);
  });

  $("#q18option4").click(function() {
    $("#q18option4").addClass("wrong");
    $("#q19").slideDown(1000);
    $("#q18").slideUp(500);
  });

  /*q19 */
  $("#submit_q19_button").click(function() {
    var ans = document.getElementById('q19ans').value;
    if (ans == '-10') {
      score++;
      $("#q20").slideDown(1000);
      $("#q19").slideUp(500);
    } else {
      $("#q20").slideDown(1000);
      $("#q19").slideUp(500);
    }
  })

  /*q20*/

  $("#q20option1").click(function() {
    $("#q20option1").addClass("wrong");
    $("#q21").slideDown(1000);
    $("#q20").slideUp(500);
  });

  $("#q20option2").click(function() {
    $("#q20option2").addClass("wrong");
    $("#q21").slideDown(1000);
    $("#q20").slideUp(500);
  });

  $("#q20option3").click(function() {
    $("#q20option3").addClass("wrong");
    $("#q21").slideDown(1000);
    $("#q20").slideUp(500);
  });

  $("#q20option4").click(function() {
    $("#q20option4").addClass("right");
    score++;
    $("#q21").slideDown(1000);
    $("#q20").slideUp(500);
  });

  /*q21*/

  $("#q21option1").click(function() {
    $("#q21option1").addClass("wrong");
    $("#q22").slideDown(1000);
    $("#q21").slideUp(500);
  });

  $("#q21option2").click(function() {
    $("#q21option2").addClass("wrong");
    $("#q22").slideDown(1000);
    $("#q21").slideUp(500);
  });

  $("#q21option3").click(function() {
    $("#q21option3").addClass("wrong");
    $("#q22").slideDown(1000);
    $("#q21").slideUp(500);
  });

  $("#q21option4").click(function() {
    $("#q21option4").addClass("right");
    score++;
    $("#q22").slideDown(1000);
    $("#q21").slideUp(500);
  });

  /*q22*/

  $("#q22option1").click(function() {
    $("#q22option1").addClass("right");
    score++
    $("#q23").slideDown(1000);
    $("#q22").slideUp(500);
  });

  $("#q22option2").click(function() {
    $("#q22option2").addClass("wrong");
    $("#q23").slideDown(1000);
    $("#q22").slideUp(500);
  });

  $("#q22option3").click(function() {
    $("#q22option3").addClass("wrong");
    $("#q23").slideDown(1000);
    $("#q22").slideUp(500);
  });

  $("#q22option4").click(function() {
    $("#q22option4").addClass("wrong");
    $("#q23").slideDown(1000);
    $("#q22").slideUp(500);
  });

  /*q23*/

  $("#q23option1").click(function() {
    $("#q23option1").addClass("wrong");
    $("#q24").slideDown(1000);
    $("#q23").slideUp(500);
  });

  $("#q23option2").click(function() {
    $("#q23option2").addClass("wrong");
    $("#q24").slideDown(1000);
    $("#q23").slideUp(500);
  });

  $("#q23option3").click(function() {
    $("#q23option3").addClass("wrong");
    $("#q24").slideDown(1000);
    $("#q23").slideUp(500);
  });

  $("#q23option4").click(function() {
    $("#q23option4").addClass("right");
    score++
    $("#q24").slideDown(1000);
    $("#q23").slideUp(500);
  });

  /*q24*/

  $("#q24option1").click(function() {
    $("#q24option1").addClass("wrong");
    $("#q25").slideDown(1000);
    $("#q24").slideUp(500);
  });

  $("#q24option2").click(function() {
    $("#q24option2").addClass("right");
    score++;
    $("#q25").slideDown(1000);
    $("#q24").slideUp(500);
  });

  $("#q24option3").click(function() {
    $("#q24option3").addClass("wrong");
    $("#q25").slideDown(1000);
    $("#q24").slideUp(500);
  });

  $("#q24option4").click(function() {
    $("#q24option4").addClass("wrong");
    $("#q25").slideDown(1000);
    $("#q24").slideUp(500);
  });

  /*q25*/

  $("#q25option1").click(function() {
    $("#q25option1").addClass("wrong");
    $("#q26").slideDown(1000);
    $("#q25").slideUp(500);
  });

  $("#q25option2").click(function() {
    $("#q25option2").addClass("right");
    score++;
    $("#q26").slideDown(1000);
    $("#q25").slideUp(500);
  });

  $("#q25option3").click(function() {
    $("#q25option3").addClass("wrong");
    $("#q26").slideDown(1000);
    $("#q25").slideUp(500);
  });

  $("#q25option4").click(function() {
    $("#q25option4").addClass("wrong");
    $("#q26").slideDown(1000);
    $("#q25").slideUp(500);
  });

  /*q26*/

  $("#q26option1").click(function() {
    $("#q26option1").addClass("wrong");
    $("#q27").slideDown(1000);
    $("#q26").slideUp(500);
  });

  $("#q26option2").click(function() {
    $("#q26option2").addClass("wrong");
    $("#q27").slideDown(1000);
    $("#q26").slideUp(500);
  });

  $("#q26option3").click(function() {
    $("#q26option3").addClass("right");
    score++;
    $("#q27").slideDown(1000);
    $("#q26").slideUp(500);
  });

  $("#q25option4").click(function() {
    $("#q26option4").addClass("wrong");
    $("#q27").slideDown(1000);
    $("#q26").slideUp(500);
  });

  /*q27*/

  $("#q27option1").click(function() {
    $("#q27option1").addClass("right");
    score++;
    $("#q28").slideDown(1000);
    $("#q27").slideUp(500);
  });

  $("#q27option2").click(function() {
    $("#q27option2").addClass("wrong");
    $("#q28").slideDown(1000);
    $("#q27").slideUp(500);
  });

  $("#q27option3").click(function() {
    $("#q27option3").addClass("wrong");
    $("#q28").slideDown(1000);
    $("#q27").slideUp(500);
  });

  $("#q27option4").click(function() {
    $("#q27option4").addClass("wrong");
    $("#q28").slideDown(1000);
    $("#q27").slideUp(500);
  });

  /*q28*/
  $("#q28option1").click(function() {
    $("#q28option1").addClass("wrong");
    $("#q29").slideDown(1000);
    $("#q28").slideUp(500);
  });

  $("#q28option2").click(function() {
    $("#q28option2").addClass("right");
    score++;
    $("#q29").slideDown(1000);
    $("#q28").slideUp(500);
  });

  /*q29*/

  $("#q29option1").click(function() {
    $("#q29option1").addClass("right");
    score++;
    $("#q30").slideDown(1000);
    $("#q29").slideUp(500);
  });

  $("#q29option2").click(function() {
    $("#q29option2").addClass("wrong");
    $("#q30").slideDown(1000);
    $("#q29").slideUp(500);
  });

  $("#q29option3").click(function() {
    $("#q29option3").addClass("wrong");
    $("#q30").slideDown(1000);
    $("#q29").slideUp(500);
  });

  $("#q29option4").click(function() {
    $("#q29option4").addClass("wrong");
    $("#q30").slideDown(1000);
    $("#q29").slideUp(500);
  });

  /*q30*/

  $("#q30option1").click(function() {
    $("#q30option1").addClass("wrong");
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
  });

  $("#q30option2").click(function() {
    $("#q30option2").addClass("wrong");
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
  });

  $("#q30option3").click(function() {
    $("#q30option3").addClass("right");
    score++
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
  });

  $("#q30option4").click(function() {
    $("#q30option4").addClass("wrong");
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
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