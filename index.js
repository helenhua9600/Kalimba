// listener for keyboard key presses in the entire doc
document.addEventListener("keydown", handleKeyboardPress);

// listener for mouse clicks on all kalimba keys
for (var i = 0; i < document.querySelectorAll(".keys").length; i++) {
  document.querySelectorAll(".keys")[i].addEventListener("click", handleClick);
}

function handleClick() {
  
  // find what note is played
  var classes = this.className; // always returns in format "keys [note]"

  var note = classes.substring(5,6);

  playNote(note);
} 

function handleKeyboardPress(buttonPressed) {
  // alert(buttonPressed.key);
  playNote(buttonPressed.key);
}

function playNote(notePressed) {
  
  switch (notePressed) {
    
    case "1":
      var audio = new Audio("sounds/1.mp3");
      audio.play();
      break;
    case "2":
    case "q":
        var audio = new Audio("sounds/2.mp3");
        audio.play();
        break;
    case "3":
    case "a":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;
    case "4":
    case "z":  
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;
    case "5":
    case "x":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;
    case "6":
    case "c":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
    case "7":
    case "v":
      var audio = new Audio("sounds/7.mp3");
      audio.play();
      break;
    case "8":
    case "b":
      var audio = new Audio("sounds/8.mp3");
      audio.play();
      break;
    case "9":
    case " ":
      var audio = new Audio("sounds/9.mp3");
      audio.play();
      break;
    case "10":
    case "n":
        var audio = new Audio("sounds/10.mp3");
        audio.play();
        break;
    case "11":
    case "m":
      var audio = new Audio("sounds/11.mp3");
      audio.play();
      break;
    case "12":
    case "\,":
      var audio = new Audio("sounds/12.mp3");
      audio.play();
      break;
    case "13":
    case "\.":
      var audio = new Audio("sounds/13.mp3");
      audio.play();
      break;
    case "14":
    case "\/":
      var audio = new Audio("sounds/14.mp3");
      audio.play();
      break;
    case "15":
    case "\'":
      var audio = new Audio("sounds/15.mp3");
      audio.play();
      break;
    case "16":
    case "\]":
      var audio = new Audio("sounds/16.mp3");
      audio.play();
      break; 
    case "17":
    case "\\":
      var audio = new Audio("sounds/17.mp3");
      audio.play();
      break; 
    default: console.log("error");
  }
  
}