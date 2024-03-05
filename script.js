const participants = document.querySelector(".participants");
const btnLeft = document.getElementById("btnleft");
const btnRight = document.getElementById("btnright");
const participantsCounter = document.getElementById("participantsCounter");
let offset = 0;

btnRight.disabled = true;

btnLeft.addEventListener("click", function () {
  offset = offset + 394;
  participants.style.left = -offset + "px";
  if (offset >= 1176) {
    btnLeft.disabled = true;
  }
  if (offset > 0) {
    btnRight.disabled = false;
  }
  counter = parseInt(participantsCounter.innerText);
  counter++;
  participantsCounter.innerText = counter;
});
btnRight.addEventListener("click", function () {
  offset = offset - 394;
  participants.style.left = -offset + "px";

  if (offset <= 0) {
    btnRight.disabled = true;
  }
  if (offset < 1176) {
    btnLeft.disabled = false;
  }
  counter = parseInt(participantsCounter.innerText);
  counter--;
  participantsCounter.innerText = counter;
});

//////////////////////////

const participants2 = document.querySelector(".participants-mobile");
const btnLeft2 = document.getElementById("btnleft2");
const btnRight2 = document.getElementById("btnright2");
const participantsCounter2 = document.getElementById("participantsCounter2");
let offset2 = 0;

btnRight2.disabled = true;

btnLeft2.addEventListener("click", function () {
  offset2 = offset2 + 340;
  participants2.style.left = -offset2 + "px";
  if (offset2 >= 1700) {
    btnLeft2.disabled = true;
  }
  if (offset2 > 0) {
    btnRight2.disabled = false;
  }
  counter = parseInt(participantsCounter2.innerText);
  counter++;
  participantsCounter2.innerText = counter;
});
btnRight2.addEventListener("click", function () {
  offset2 = offset2 - 340;
  participants2.style.left = -offset2 + "px";

  if (offset2 <= 0) {
    btnRight2.disabled = true;
  }
  if (offset2 < 1700) {
    btnLeft2.disabled = false;
  }
  counter = parseInt(participantsCounter2.innerText);
  counter--;
  participantsCounter2.innerText = counter;
});

//////////////

const slide = document.querySelector(".slider-line_mobile");
const btnLeft3 = document.getElementById("btnleft3");
const btnRight3 = document.getElementById("btnright3");
const participantsCounter3 = document.getElementById("participantsCounter3");

let offset3 = 0;

btnRight3.disabled = true;

btnLeft3.addEventListener("click", function () {
  offset3 = offset3 + 336;
  slide.style.left = -offset3 + "px";
  if (offset3 >= 1344) {
    btnLeft3.disabled = true;
  }
  if (offset3 > 0) {
    btnRight3.disabled = false;
  }
  counter = parseInt(participantsCounter3.innerText);
  counter++;
  participantsCounter3.innerText = counter;
});
btnRight3.addEventListener("click", function () {
  offset3 = offset3 - 336;
  slide.style.left = -offset3 + "px";

  if (offset3 <= 0) {
    btnRight3.disabled = true;
  }
  if (offset3 < 1344) {
    btnLeft3.disabled = false;
  }
  counter = parseInt(participantsCounter3.innerText);
  counter--;
  participantsCounter3.innerText = counter;
});
