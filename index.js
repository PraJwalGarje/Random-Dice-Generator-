var player1 = prompt("Player 1's Name");
var player2 = prompt("Player 2's Name");

document.querySelector(".name1").innerHTML = player1; 
document.querySelector(".name2").innerHTML = player2; 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 


document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png"); 
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) { 
    document.querySelector("h1").innerHTML 
                    = ("Player 1 Wins!");
} 

else if (randomNumber1 < randomNumber2) { 
    document.querySelector("h1").innerHTML 
                    = ("Player 2 Wins!");
} 

else { 
    document.querySelector("h1").innerHTML = "Draw!"; 
}









