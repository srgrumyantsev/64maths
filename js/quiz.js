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
  $("#q31").hide();
  $("#q32").hide();
  $("#q33").hide();
  $("#q34").hide();
  $("#q35").hide();
  $("#q36").hide();
  $("#q37").hide();
  $("#q38").hide();
  $("#q39").hide();
  $("#q40").hide();
  $("#q41").hide();
  $("#q42").hide();
  $("#q43").hide();
  $("#q44").hide();
  $("#q45").hide();
  $("#q46").hide();

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

  $("#q26option4").click(function() {
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
    score++;
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
  });

  $("#q30option4").click(function() {
    $("#q30option4").addClass("wrong");
    $("#q31").slideDown(1000);
    $("#q30").slideUp(500);
  });

  /*q31*/
  $("#submit_q31_button").click(function() {
    var ans = document.getElementById('q31ans').value;
    if (ans == '27') {
      score++;
      $("#q32").slideDown(1000);
      $("#q31").slideUp(500);
    } else {
      $("#q32").slideDown(1000);
      $("#q31").slideUp(500);
    }
  })

  /*q32*/

  $("#q32option1").click(function() {
    $("#q32option1").addClass("wrong");
    $("#q33").slideDown(1000);
    $("#q32").slideUp(500);
  });

  $("#q32option2").click(function() {
    $("#q32option2").addClass("right");
    score++;
    $("#q33").slideDown(1000);
    $("#q32").slideUp(500);
  });

  $("#q32option3").click(function() {
    $("#q32option3").addClass("wrong");
    $("#q33").slideDown(1000);
    $("#q32").slideUp(500);
  });

  $("#q32option4").click(function() {
    $("#q32option4").addClass("wrong");
    $("#q33").slideDown(1000);
    $("#q32").slideUp(500);
  });

  /*q33*/

  $("#q33option1").click(function() {
    $("#q33option1").addClass("wrong");
    $("#q34").slideDown(1000);
    $("#q33").slideUp(500);
  });

  $("#q33option2").click(function() {
    $("#q33option2").addClass("wrong");
    $("#q34").slideDown(1000);
    $("#q33").slideUp(500);
  });

  $("#q33option3").click(function() {
    $("#q33option3").addClass("right");
    score++;
    $("#q34").slideDown(1000);
    $("#q33").slideUp(500);
  });

  $("#q33option4").click(function() {
    $("#q33option4").addClass("wrong");
    $("#q34").slideDown(1000);
    $("#q33").slideUp(500);
  });

  /*q34*/
  $("#submit_q34_button").click(function() {
    var ans = document.getElementById('q34ans').value;
    if (ans == '0.0095') {
      score++;
      $("#q35").slideDown(1000);
      $("#q34").slideUp(500);
    } else {
      $("#q35").slideDown(1000);
      $("#q34").slideUp(500);
    }
  })

  /*q35*/

  $("#q35option1").click(function() {
    $("#q35option1").addClass("right");
    score++;
    $("#q36").slideDown(1000);
    $("#q35").slideUp(500);
  });

  $("#q35option2").click(function() {
    $("#q35option2").addClass("wrong");
    $("#q36").slideDown(1000);
    $("#q35").slideUp(500);
  });

  $("#q35option3").click(function() {
    $("#q35option3").addClass("wrong");
    $("#q36").slideDown(1000);
    $("#q35").slideUp(500);
  });

  $("#q35option4").click(function() {
    $("#q35option4").addClass("wrong");
    $("#q36").slideDown(1000);
    $("#q35").slideUp(500);
  });

  /*q36*/

  $("#q36option1").click(function() {
    $("#q36option1").addClass("wrong");
    $("#q37").slideDown(1000);
    $("#q36").slideUp(500);
  });

  $("#q36option2").click(function() {
    $("#q36option2").addClass("wrong");
    $("#q37").slideDown(1000);
    $("#q36").slideUp(500);
  });

  $("#q36option3").click(function() {
    $("#q36option3").addClass("right");
    score++;
    $("#q37").slideDown(1000);
    $("#q36").slideUp(500);
  });

  $("#q36option4").click(function() {
    $("#q36option4").addClass("wrong");
    $("#q37").slideDown(1000);
    $("#q36").slideUp(500);
  });

  /*q37*/

  $("#q37option1").click(function() {
    $("#q37option1").addClass("wrong");
    $("#q38").slideDown(1000);
    $("#q37").slideUp(500);
  });

  $("#q37option2").click(function() {
    $("#q37option2").addClass("wrong");
    $("#q38").slideDown(1000);
    $("#q37").slideUp(500);
  });

  $("#q37option3").click(function() {
    $("#q37option3").addClass("right");
    score++;
    $("#q38").slideDown(1000);
    $("#q37").slideUp(500);
  });

  $("#q37option4").click(function() {
    $("#q37option4").addClass("wrong");
    $("#q38").slideDown(1000);
    $("#q37").slideUp(500);
  });

  /*q38*/

  $("#q38option1").click(function() {
    $("#q38option1").addClass("wrong");
    $("#q39").slideDown(1000);
    $("#q38").slideUp(500);
  });

  $("#q38option2").click(function() {
    $("#q38option2").addClass("wrong");
    $("#q39").slideDown(1000);
    $("#q38").slideUp(500);
  });

  $("#q38option3").click(function() {
    $("#q38option3").addClass("wrong");
    $("#q39").slideDown(1000);
    $("#q38").slideUp(500);
  });

  $("#q38option4").click(function() {
    $("#q38option4").addClass("right");
    score++;
    $("#q39").slideDown(1000);
    $("#q38").slideUp(500);
  });

  /*q39*/

  $("#q39option1").click(function() {
    $("#q39option1").addClass("wrong");
    $("#q40").slideDown(1000);
    $("#q39").slideUp(500);
  });

  $("#q39option2").click(function() {
    $("#q39option2").addClass("right");
    score++;
    $("#q40").slideDown(1000);
    $("#q39").slideUp(500);
  });

  $("#q39option3").click(function() {
    $("#q39option3").addClass("wrong");
    $("#q40").slideDown(1000);
    $("#q39").slideUp(500);
  });

  $("#q39option4").click(function() {
    $("#q39option4").addClass("wrong");
    $("#q40").slideDown(1000);
    $("#q39").slideUp(500);
  });

  /*q40*/

  $("#q40option1").click(function() {
    $("#q40option1").addClass("wrong");
    $("#q41").slideDown(1000);
    $("#q40").slideUp(500);
  });

  $("#q40option2").click(function() {
    $("#q40option2").addClass("wrong");
    $("#q41").slideDown(1000);
    $("#q40").slideUp(500);
  });

  $("#q40option3").click(function() {
    $("#q40option3").addClass("right");
    score++;
    $("#q41").slideDown(1000);
    $("#q40").slideUp(500);
  });

  $("#q40option4").click(function() {
    $("#q40option4").addClass("wrong");
    $("#q41").slideDown(1000);
    $("#q40").slideUp(500);
  });

  /*q41*/

  $("#q41option1").click(function() {
    $("#q41option1").addClass("wrong");
    $("#q42").slideDown(1000);
    $("#q41").slideUp(500);
  });

  $("#q41option2").click(function() {
    $("#q41option2").addClass("wrong");
    $("#q42").slideDown(1000);
    $("#q41").slideUp(500);
  });

  $("#q41option3").click(function() {
    $("#q41option3").addClass("wrong");
    $("#q42").slideDown(1000);
    $("#q41").slideUp(500);
  });

  $("#q41option4").click(function() {
    $("#q41option4").addClass("right");
    score++;
    $("#q42").slideDown(1000);
    $("#q41").slideUp(500);
  });

  /*q42*/

  $("#q42option1").click(function() {
    $("#q42option1").addClass("wrong");
    $("#q43").slideDown(1000);
    $("#q42").slideUp(500);
  });

  $("#q42option2").click(function() {
    $("#q42option2").addClass("wrong");
    $("#q43").slideDown(1000);
    $("#q42").slideUp(500);
  });

  $("#q42option3").click(function() {
    $("#q42option3").addClass("right");
    score++;
    $("#q43").slideDown(1000);
    $("#q42").slideUp(500);
  });

  $("#q42option4").click(function() {
    $("#q42option4").addClass("wrong");
    $("#q43").slideDown(1000);
    $("#q42").slideUp(500);
  });

  /*q43*/

  $("#q43option1").click(function() {
    $("#q43option1").addClass("wrong");
    $("#q44").slideDown(1000);
    $("#q43").slideUp(500);
  });

  $("#q43option2").click(function() {
    $("#q43option2").addClass("wrong");
    $("#q44").slideDown(1000);
    $("#q43").slideUp(500);
  });

  $("#q43option3").click(function() {
    $("#q43option3").addClass("right");
    score++;
    $("#q44").slideDown(1000);
    $("#q43").slideUp(500);
  });

  $("#q43option4").click(function() {
    $("#q43option4").addClass("wrong");
    $("#q44").slideDown(1000);
    $("#q43").slideUp(500);
  });

  /*q44*/

  $("#q44option1").click(function() {
    $("#q44option1").addClass("wrong");
    $("#q45").slideDown(1000);
    $("#q44").slideUp(500);
  });

  $("#q44option2").click(function() {
    $("#q44option2").addClass("right");
    score++;
    $("#q45").slideDown(1000);
    $("#q44").slideUp(500);
  });

  $("#q44option3").click(function() {
    $("#q44option3").addClass("wrong");
    $("#q45").slideDown(1000);
    $("#q44").slideUp(500);
  });

  $("#q44option4").click(function() {
    $("#q44option4").addClass("wrong");
    $("#q45").slideDown(1000);
    $("#q44").slideUp(500);
  });

  /*q45*/

  $("#q45option1").click(function() {
    $("#q45option1").addClass("wrong");
    $("#q46").slideDown(1000);
    $("#q45").slideUp(500);
  });

  $("#q45option2").click(function() {
    $("#q45option2").addClass("wrong");
    $("#q46").slideDown(1000);
    $("#q45").slideUp(500);
  });

  $("#q45option3").click(function() {
    $("#q45option3").addClass("wrong");
    $("#q46").slideDown(1000);
    $("#q45").slideUp(500);
  });

  $("#q45option4").click(function() {
    $("#q45option4").addClass("right");
    score++;
    $("#q46").slideDown(1000);
    $("#q45").slideUp(500);
  });

  /*q46*/

  $("#q46option1").click(function() {
    $("#q46option1").addClass("right");
    score++;
    $("#q46").slideUp(500);
    var final_score = 100 + Math.round((score/46) * 100)
    localStorage.setItem('ged-score',final_score);
    window.location.replace('ged-test-result.html');
  });

  $("#q46option2").click(function() {
    $("#q46option2").addClass("wrong");
    $("#q46").slideUp(500);
    var final_score = 100 + Math.round((score/46) * 100)
    localStorage.setItem('ged-score',final_score);
    window.location.replace('ged-test-result.html');
  });

  $("#q46option3").click(function() {
    $("#q46option3").addClass("wrong");
    $("#q46").slideUp(500);
    var final_score = 100 + Math.round((score/46) * 100)
    localStorage.setItem('ged-score',final_score);
    window.location.replace('ged-test-result.html');
  });

  $("#q46option4").click(function() {
    $("#q46option4").addClass("wrong");
    $("#q46").slideUp(500);
    var final_score = 100 + Math.round((score/46) * 100)
    localStorage.setItem('ged-score',final_score);
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
