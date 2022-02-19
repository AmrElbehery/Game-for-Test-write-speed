let wordplace = document.querySelector(".word-place");
let input = document.getElementById("input");
let btn = document.querySelector(".btn");
let aboutu = document.querySelector(".about-u");
let intime = document.querySelector(".intime");
let score = document.querySelector(".score");
let All = document.querySelector(".from");

const Aray = [
  "hello",
  "code",
  "Town",
  "country",
  "programing",
  "javascript",
  "Php",
  "Html",
  "database",
  "Come",
];

i = 0;

All.innerHTML = Aray.length;

input.onpaste = () => {
  return false;
};

btn.onclick = () => {
  btn.remove();
  input.focus();
  start();
};

function start() {
  let play = setInterval(() => {
    intime.innerHTML--;

    if (intime.innerHTML === "0") {
      clearInterval(play);
      if (score.innerHTML == Aray.length) {
        aboutu.innerHTML = `Winner : Your score is ${score.innerHTML}  from ${Aray.length} <br> Reload to start again.`;
      } else {
        aboutu.innerHTML = `Loser : Your score is ${score.innerHTML} from ${Aray.length} <br> Reload to start again.`;
      }
    }
  }, 1000);

  let words = setInterval(() => {
    wordplace.innerHTML = Aray[i];
    if (wordplace.innerHTML.toLowerCase() === input.value.toLowerCase()) {
      i++;
      score.innerHTML = i;

      setTimeout(() => {
        input.value = "";
      }, 500);
    }
    if (intime.innerHTML === "0" || i > Aray.length - 1) {
      clearInterval(words);
    }
  }, 500);
}

