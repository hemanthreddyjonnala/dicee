function dice(){
  var randomNumber1 = Math.floor(Math.random()*6) + 1;

  var diceimage1 = 'images/dice' + randomNumber1 +'.png';

  var randomNumber2 = Math.floor(Math.random()*6) + 1;

  var diceimage2 = 'images/dice' + randomNumber2 +'.png';

  var image1 = document.querySelectorAll("img")[0];

  var image2 = document.querySelectorAll("img")[1];

  document.querySelectorAll("img")[0].setAttribute("src", diceimage1);

  document.querySelectorAll("img")[1].setAttribute("src", diceimage2);


  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
  }else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins"
  }else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Match Drawn"
  }
}
