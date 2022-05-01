for (let i = 0; i < document.querySelectorAll(".song").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

function handleClick(){
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){

  switch (key) {
    case "w":
      let sound1 = new Audio('sounds/sound1.ogg');
      sound1.play();
      break;
      case "a":
      let sound2 = new Audio('sounds/sound2.ogg');
      sound2.play();
      break;
      case "s":
      let sound3 = new Audio('sounds/sound3.ogg');
      sound3.play();
      break;
      case "d":
      let sound4 = new Audio('sounds/sound4.ogg');
      sound4.play();
      break;
      case "j":
      let sound5 = new Audio('sounds/sound5.ogg');
      sound5.play();
      break;
      case "k":
      let sound6 = new Audio('sounds/sound3.ogg');
      sound6.play();
      break;
      case "l":
      let sound7 = new Audio('sounds/sound7.ogg');
      sound7.play();
      break;
      case "i":
      let sound8 = new Audio('sounds/sound8.ogg');
      sound8.play();
      break;
  
    default:console.log(buttonInnerHTML);
    
  }
}

function buttonAnimation(CurrentKey){
let activeButton =  document.querySelector("." + CurrentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}