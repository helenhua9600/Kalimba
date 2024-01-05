

for (var i = 0; i < document.querySelectorAll(".keys").length; i++) {
  document.querySelectorAll(".keys")[i].addEventListener("click", handleClick);
  
}

function handleClick() {
  
  // find what note is played
  var classes = this.className; // always returns in format "keys [note]"

  var note = classes.substring(5);

  playNote(note);
} 

function playNote(notePressed) {
  
  switch (notePressed) {
    
    case "1":
      var audio = new Audio("sounds/1.mp3")
      audio.play();
      break;
    case "2":
        var audio = new Audio("sounds/2.mp3")
        audio.play();
        break;
    case "3":
      var audio = new Audio("sounds/3.mp3")
      audio.play();
      break;
    case "4":
      var audio = new Audio("sounds/4.mp3")
      audio.play();
      break;
    case "5":
      var audio = new Audio("sounds/5.mp3")
      audio.play();
      break;
    case "6":
      var audio = new Audio("sounds/6.mp3")
      audio.play();
      break;
    case "7":
      var audio = new Audio("sounds/7.mp3")
      audio.play();
      break;
    case "8":
      var audio = new Audio("sounds/8.mp3")
      audio.play();
      break;
    case "9":
      var audio = new Audio("sounds/9.mp3")
      audio.play();
      break;
    case "10":
        var audio = new Audio("sounds/10.mp3")
        audio.play();
        break;
    case "11":
      var audio = new Audio("sounds/11.mp3")
      audio.play();
      break;
    case "12":
      var audio = new Audio("sounds/12.mp3")
      audio.play();
      break;
    case "13":
      var audio = new Audio("sounds/13.mp3")
      audio.play();
      break;
    case "14":
      var audio = new Audio("sounds/14.mp3")
      audio.play();
      break;
    case "15":
      var audio = new Audio("sounds/15.mp3")
      audio.play();
      break;
    case "16":
      var audio = new Audio("sounds/16.mp3")
      audio.play();
      break; 
    case "17":
      var audio = new Audio("sounds/17.mp3")
      audio.play();
      break; 
    default: alert("error");
  }
  
}