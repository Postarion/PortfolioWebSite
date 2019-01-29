const A4 = new Audio("sound/A4.mp3");
const Ab4 = new Audio("sound/Ab4.mp3");
const B4 = new Audio("sound/B4.mp3");
const Bb4 = new Audio("sound/Bb4.mp3");
const C4 = new Audio("sound/C4.mp3");
const C5 = new Audio("sound/C5.mp3");
const D4 = new Audio("sound/D4.mp3");
const D5 = new Audio("sound/D5.mp3");
const Db4 = new Audio("sound/Db4.mp3");
const Db5 = new Audio("sound/Db5.mp3");
const E4 = new Audio("sound/E4.mp3");
const E5 = new Audio("sound/E5.mp3");
const Eb4 = new Audio("sound/Eb4.mp3");
const Eb5 = new Audio("sound/Eb5.mp3");
const F4 = new Audio("sound/F4.mp3");
const G4 = new Audio("sound/G4.mp3");
const Gb4 = new Audio("sound/Gb4.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

function tabCreator(name, posDiv) {
  const tab = document.querySelector(`${posDiv}`);
  const play = () =>{
    playSound(name);
    tab.classList.add("active");
    window.setTimeout(() => tab.classList.remove("active"), 200);
  };
return tab.addEventListener("click", play);
};

function play(name, posDiv){
  const tab = document.querySelector(`${posDiv}`);
  playSound(name);
  tab.classList.add("active");
  window.setTimeout(() => tab.classList.remove("active"), 200);
};

tabCreator(A4,'.A4');
tabCreator(Ab4,'.Ab4');
tabCreator(B4,'.B4');
tabCreator(Bb4,'.Bb4');
tabCreator(C4,'.C4');
tabCreator(C5,'.C5');
tabCreator(D4,'.D4');
tabCreator(D5,'.D5');
tabCreator(Db4,'.Db4');
tabCreator(Db5,'.Db5');
tabCreator(E4,'.E4');
tabCreator(E5,'.E5');
tabCreator(Eb4,'.Eb4');
tabCreator(Eb5,'.Eb5');
tabCreator(F4,'.F4');
tabCreator(G4,'.G4');
tabCreator(Gb4,'.Gb4');

window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 65) return play(C4, '.C4');

  // Press W
  if (keyCode === 87) return play(Db4, '.Db4');

  // Press S
  if (keyCode === 83) return play(D4, '.D4');

  // Press E
  if (keyCode === 69) return play(Eb4, '.Eb4');

  // Press D
  if (keyCode === 68) return play(E4, '.E4');

  // Press F
  if (keyCode === 70) return play(F4, '.F4');

  // Press T
  if (keyCode === 84) return play(Gb4, '.Gb4');

  // Press G
  if (keyCode === 71) return play(G4, '.G4');

  // Press Y
  if (keyCode === 89) return play(Ab4, '.Ab4');

  // Press H
  if (keyCode === 72) return play(A4, '.A4');

  // Press U
  if (keyCode === 85) return play(Bb4, '.Bb4');

  // Press J
  if (keyCode === 74) return play(B4, '.B4');

  // Press K
  if (keyCode === 75) return play(C5, '.C5');

  // Press L
  if (keyCode === 79) return play(Db5, '.Db5');

  // Press O
  if (keyCode === 76) return play(D5, '.D5');

  // Press P
  if (keyCode === 80) return play(Eb5, '.Eb5');

  // Press ;
  if (keyCode === 59) return play(E5, '.E5');
}); 