var numberOfDrumBtns = document.querySelectorAll(".buttons").length;

for (var i=0; i<numberOfDrumBtns; i++) {

    document.querySelectorAll(".buttons")[i].addEventListener("click", function (){
        

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {

        case "A":
            var sound1 = new Audio ("sounds/sound1.mp3");
    sound1.play();
    break;
    
    case "E":

        var sound2 = new Audio ("sounds/sound2.mp3");
        sound2.play();
break;

case "I":

        var sound3 = new Audio ("sounds/sound3.mp3");
        sound3.play();
break;

case "B":

        var sound4 = new Audio ("sounds/sound4.mp3");
        sound4.play();
break;

case "F":

        var sound5 = new Audio ("sounds/sound5.mp3");
        sound5.play();
break;

case "J":

        var sound6 = new Audio ("sounds/sound6.mp3");
        sound6.play();
break;

case "C":

        var sound7 = new Audio ("sounds/sound7.mp3");
        sound7.play();
break;

case "G":

        var sound8 = new Audio ("sounds/sound8.mp3");
        sound8.play();
break;

case "K":

        var sound9 = new Audio ("sounds/sound9.mp3");
        sound9.play();
break;

case "D":

        var sound8 = new Audio ("sounds/sound8.mp3");
        sound8.play();
break;

default: console.log(buttonInnerHTML);

    }

    });   

    

}