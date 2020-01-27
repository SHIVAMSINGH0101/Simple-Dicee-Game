var randomNumber = Math.floor(Math.random()*6) + 1; // to get a random no. betn 1 and 6

var randomDiceImage = "dice" + randomNumber + ".png";// name of dice images i.e. dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // to get the image source i.e. images/dice1.png images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // to get first image element

image1.setAttribute("src", randomImageSource); // set its link to other random image

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber)
{
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "It's a Draw "
}
