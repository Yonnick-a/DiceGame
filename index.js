//generating random number and attaching a random dice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var imgSource = "images/" + randomDiceImg;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", imgSource);

// generating random number and attaching a random dice image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src", imgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Alex Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Yonnick Wins! xD";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw! but I still win :P";
}
