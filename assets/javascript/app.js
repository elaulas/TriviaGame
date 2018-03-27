$(document).ready(function reset() {
  var number = 31;
  var interval;
  var answerList = ["Forrest Gump", "Star Wars", "Tommy Boy", "Apollo 13", "The Godfather", "A Few Good Men", "Wizard of Oz", "Scarface", "The Princess Bride", "A Christmas Story"];
  var answer;
  var userAnswer;
  var wins = 0;
  var losses = 0;
  var notAnswered = 0;
  var answerRight;
  var answerWrong;
  var picture;
  
  hidden();
  start();
  function hidden() {
    $(".questionOne").hide();
    $(".questionTwo").hide();
    $(".questionThree").hide();
    $(".questionFour").hide();
    $(".questionFive").hide();
    $(".questionSix").hide();
    $(".questionSeven").hide();
    $(".questionEight").hide();
    $(".questionNine").hide();
    $(".questionTen").hide();
    $(".answerRight").hide();
    $(".answerWrong").hide();
    $(".startOver").hide();
    $('.timesUp').hide();
  }

  function start() {
    $('.subTitle').hide();
    $(".start").text("START");
    $(".start").click(function() {
      $(this).hide();
      timer();
      questionOne();
    });
  }

  function questionOne() {
    wins = 0;
    losses = 0;
    notAnswered = 0;
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionOne").show();
    answer = answerList[0];

    $(".questionOne").on("click", function() {
      userAnswer = $(this).text();
      console.log(answer);
      console.log(userAnswer);

      if (userAnswer === answer) {
        wins++;
        $(".questionOne").hide();
        correct();
      } else {
        losses++;
        $(".questionOne").hide();
        incorrect();
      }
    });
  }

  function questionTwo() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionTwo").show();
    answer = answerList[1];
    number = 31;
    $(".questionTwo").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionTwo").hide();
        correct();
      } else {
        losses++;
        $(".questionTwo").hide();
        incorrect();
      }
    });
  }

  function questionThree() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionThree").show();
    answer = answerList[2];
    number = 31;
    $(".questionThree").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionThree").hide();
        correct();
      } else {
        losses++;
        $(".questionThree").hide();
        incorrect();
      }
    });
  }
  function questionFour() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionFour").show();
    answer = answerList[3];
    number = 31;
    $(".questionFour").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionFour").hide();
        correct();
      } else {
        losses++;
        $(".questionFour").hide();
        incorrect();
      }
    });
  }
  function questionFive() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionFive").show();
    answer = answerList[4];
    number = 31;
    $(".questionFive").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionFive").hide();
        correct();
      } else {
        losses++;
        $(".questionFive").hide();
        incorrect();
      }
    });
  }
  function questionSix() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionSix").show();
    answer = answerList[5];
    number = 31;
    $(".questionSix").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionSix").hide();
        correct();
      } else {
        losses++;
        $(".questionSix").hide();
        incorrect();
      }
    });
  }
  function questionSeven() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionSeven").show();
    answer = answerList[6];
    number = 31;
    $(".questionSeven").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionSeven").hide();
        correct();
      } else {
        losses++;
        $(".questionSeven").hide();
        incorrect();
      }
    });
  }
  function questionEight() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionEight").show();
    answer = answerList[7];
    number = 31;
    $(".questionEight").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionEight").hide();
        correct();
      } else {
        losses++;
        $(".questionEight").hide();
        incorrect();
      }
    });
  }
  function questionNine() {
    $('.subTitle').show();
    hidden();
    $("#timer").show();
    $(".questionNine").show();
    answer = answerList[8];
    number = 31;
    $(".questionNine").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionNine").hide();
        correct();
      } else {
        losses++;
        $(".questionNine").hide();
        incorrect();
      }
    });
  }
  function questionTen() {
    hidden();
    $('.subTitle').show();
    $("#timer").show();
    $(".questionTen").show();
    answer = answerList[9];
    number = 31;
    $(".questionTen").on("click", function() {
      userAnswer = $(this).text();
      if (userAnswer === answer) {
        wins++;
        $(".questionTen").hide();
        correct();
      } else {
        losses++;
        $(".questionTen").hide();
        incorrect();
      }
    });
  }

  function correct() {
    $('.subTitle').hide();
    $("#timer").hide();
    $(".answerRight").show();
    answerRight = $(".answerRight");
    answerRight.text("YOU GOT IT!!!");
    answerRight.append("<p>" + answer + " is the correct answer!" + "</p>");
    answerRight.append("<img>");
    $("img").attr("src", "assets/images/" + answer + ".gif");
    $("img").attr("attr", answer);
    setTimeout(fiveSeconds, 1000 * 4);
  }
  function incorrect() {
    $('.subTitle').hide();
    $("#timer").hide();
    $(".answerWrong").show();
    answerWrong = $(".answerWrong");
    answerWrong.text("So close, but not close enough!");
    answerWrong.append("<p>" + answer + " is the correct answer!" + "</p>");
    answerWrong.append("<img>");
    $("img").attr("src", "assets/images/" + answer + ".gif");
    $("img").attr("attr", answer);
    setTimeout(fiveSeconds, 1000 * 4);
  }
  function results() {
    hidden();
    $('.results').show();
    $('.startOver').show()
    $('.correctAnswers').text('Correct answers: ' + wins);
    $('.incorrectAnswers').text('Incorrect answers: ' + losses);
    $('.unanswered').text('Unanswered: ' + notAnswered);
    $('.startOver').on('click', function() {
      $('.results').hide();
      questionOne();
    })
  }

  function fiveSeconds() {
    if (answer === answerList[0]) {
      questionTwo();
    } else if (answer === answerList[1]) {
      questionThree();
    } else if (answer === answerList[2]) {
      questionFour();
    } else if (answer === answerList[3]) {
      questionFive();
    } else if (answer === answerList[4]) {
      questionSix();
    } else if (answer === answerList[5]) {
      questionSeven();
    } else if (answer === answerList[6]) {
      questionEight();
    } else if (answer === answerList[7]) {
      questionNine();
    } else if (answer === answerList[8]) {
      questionTen();
    }else if (answer === answerList[9]) {
      results();
    }
 
  }

  function timer() {
    number = 31;
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#timer").html("<h3>Time Remaining: " + number + " Seconds</h3>");
    if (number === 0){
      notAnswered++;
      hidden();
      $('.timesUp').show();
      incorrect();

    }
  }


});
