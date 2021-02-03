var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence(){
  var randomNumber = Math.random()*4;
  randomNumber = Math.floor(randomNumber);
  gamePattern.push(buttonColors[randomNumber]);
  playSound(buttonColors[randomNumber]);
  animatePress(buttonColors[randomNumber]);
  if(started){
    level++;
    $("h1").text("Level " + level);
  }
}

//nextSequence();

$("body").on("keydown", function(){
  if(!started){
    nextSequence();
    started = true;
    $("h1").text("Level " + level);
  }
});

$(".btn").click(function() {
  if(started){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
    console.log(gamePattern);
    animatePress(userChosenColor);
    setTimeout(function (){
      nextSequence();
      userClickedPattern = [];
    }, 1200);
  }
});

function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}

function animatePress(currentColor){

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentColor]){
    console.log("Success");
    return true;
  }else{
    console.log("failure");
    return false;
  }
}
