"use strict";
let text = document.querySelector(".typewritten").textContent;
let maxNumberIterations = text.length;
let iterator;
const musicSpace = document.querySelector("#typespace");
const musicLetters = document.querySelector("#typekey1");

document.querySelector(".starttypewriter").addEventListener("click", init);

document.querySelector(".typewritten").innerHTML = "";
function init() {
  iterator = 0;
  document.querySelector(".typewritten").innerHTML = "";
  loop();
}

function loop() {
  if (iterator < maxNumberIterations) {
    document.querySelector(".typewritten").innerHTML += text.charAt(iterator);
    if (text.charAt(iterator) === " ") {
      musicSpace.play();
    } else {
      musicLetters.play();
    }
    iterator++;
    setTimeout(loop, 500);
  } else {
    setTimeout(init, 3000);
  }
}
