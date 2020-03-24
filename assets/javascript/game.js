//generate random number for user => userNum
//generate random number for all gems
//allow buttons to be clicked
//allow userNum to change from gem clicks
//userNum = 0 from gem clicks, add to wins
//gem clikcs > userNum, add to losses
//generates new userNum

//wait for html document to load

//generates random number for user
var userNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);

$(".randomNumber").text(userNum);
console.log(userNum);

//random math generated between 1 and 12 for Gems
var redGemNumber = Math.floor(Math.random() * 12) + 1;
var purpleGemNumber = Math.floor(Math.random() * 12) + 1;
var pinkGemNumber = Math.floor(Math.random() * 12) + 1;
var orangeGemNumber = Math.floor(Math.random() * 12) + 1;

var Wins = 0;
var Losses = 0;
var TotalScore = 0;

$(".wins").html(Wins);
$(".losses").html(Losses);

$(".redGem").on("click", function() {
  TotalScore = TotalScore + redGemNumber;
  console.log(TotalScore);
  $(".yourTotalScore").text(TotalScore);

  if (TotalScore === userNum){
    winner();
  }
  else if (TotalScore > userNum){
    loser();
  }
});

$(".purpleGem").on("click", function() {
    TotalScore = TotalScore + purpleGemNumber;
    console.log(TotalScore);
    $(".yourTotalScore").text(TotalScore);
  
    if (TotalScore === userNum){
      winner();
    }
    else if (TotalScore > userNum){
      loser();
    }
  });

  $(".pinkGem").on("click", function() {
    TotalScore = TotalScore + pinkGemNumber;
    console.log(TotalScore);
    $(".yourTotalScore").text(TotalScore);
  
    if (TotalScore === userNum){
      winner();
    }
    else if (TotalScore > userNum){
      loser();
    }
  });

  $(".orangeGem").on("click", function() {
    TotalScore = TotalScore + orangeGemNumber;
    console.log(TotalScore);
    $(".yourTotalScore").text(TotalScore);
  
    if (TotalScore === userNum){
      winner();
    }
    else if (TotalScore > userNum){
      loser();
    }
  });

function winner(){
    Wins++;
    $(".wins").html(Wins);
    reset();
}

function loser(){
    Losses++;
    $(".losses").html(Losses);
    reset();
}



function reset(){

var userNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
$(".randomNumber").text(userNum);
console.log(userNum);

var redGemNumber = Math.floor(Math.random() * 12) + 1;
var purpleGemNumber = Math.floor(Math.random() * 12) + 1;
var pinkGemNumber = Math.floor(Math.random() * 12) + 1;
var orangeGemNumber = Math.floor(Math.random() * 12) + 1;

TotalScore = 0;
}


