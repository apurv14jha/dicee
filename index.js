// Changing the first image to a Random Dice

var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var url1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", url1);

// Changing the second image to a Random Dice

var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
var url2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", url2);

// Analyzing the winner

var message = "Draw!";
if(randomNumber1>randomNumber2)
{
    message = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    message = "Player 2 wins!";
}

// Displaying the winner

document.querySelector("h1").innerHTML = message;


