//number of drums

var numberOfDrums = document.querySelectorAll(".drum").length;



//add event listener (click) to drums

for (var i = 0; i < numberOfDrums; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {

        //listener function to be trigerred

        var buttonClicked = this.innerHTML;

        makeSound(buttonClicked);

        buttonAnimation(buttonClicked);
        
    });
}



//add event listener (keydown) to full document

document.addEventListener("keydown" , function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});



//switch case for different sounds as per key

function makeSound(key) {

    switch (key) {
      case "l":
        var tom1 = new Audio("sounds/tom1.mp3");
        tom1.play();
        break;
  
      case "k":
        var tom2 = new Audio("sounds/tom2.mp3");
        tom2.play();
        break;
  
      case "j":
        var tom3 = new Audio('sounds/tom3.mp3');
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio('sounds/tom4.mp3');
        tom4.play();
        break;
  
      case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "a":
        var kick = new Audio('sounds/kickbass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }



  //adding animation function

  function buttonAnimation (key) {

    var activeButton = document.querySelector("." + key); //locate

    activeButton.classList.add("pressed");  //add class as per animation

    setTimeout(function () {
      activeButton.classList.remove("pressed");  //remove class after a delay as per animation
    } , 100);
  }