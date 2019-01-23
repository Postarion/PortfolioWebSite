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

// const playSound = audio => {
//   const clone = audio.cloneNode();
//   clone.play();
//   window.setTimeout(() => (clone.volume = 0.8), 400);
//   window.setTimeout(() => (clone.volume = 0.6), 800);
//   window.setTimeout(() => (clone.volume = 0.4), 1200);
//   window.setTimeout(() => (clone.volume = 0.2), 1600);
//   window.setTimeout(() => (clone.volume = 0), 2000);
// };

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8).bind(this), 400);
  setTimeout(() => (clone.volume = 0.6).bind(this), 800);
  setTimeout(() => (clone.volume = 0.4).bind(this), 1200);
  setTimeout(() => (clone.volume = 0.2).bind(this), 1600);
  setTimeout(() => (clone.volume = 0).bind(this), 2000);
};

Function.prototype.bind = function(parent){
  var f = this;
  var args = [];

  for (var a = 1; a < arguments.length; a++) {
      args[args.length] = arguments[a];
  };

  var temp = function() {
     return f.apply(parent, args);
  };

  return(temp);
};

//A4
const A4tab = document.querySelector(".A4");
const playA4 = () =>{
  playSound(A4);
  A4tab.classList.add("active");
  window.setTimeout(() => A4tab.classList.remove("active"), 200);
};
A4tab.addEventListener("click", playA4);

//Ab4
const Ab4tab = document.querySelector(".Ab4");
const playAb4 = () =>{
  playSound(Ab4);
  Ab4tab.classList.add("active");
  setTimeout(() => Ab4tab.classList.remove("active"), 200);
};
Ab4tab.addEventListener("click", playAb4);

//b4
const B4tab = document.querySelector(".B4");
const playB4 = () =>{
  playSound(B4);
  B4tab.classList.add("active");
  setTimeout(() => B4tab.classList.remove("active"), 200);
};
B4tab.addEventListener("click", playB4);

//Bb4
const Bb4tab = document.querySelector(".Bb4");
const playBb4 = () =>{
  playSound(Bb4);
  Bb4tab.classList.add("active");
  setTimeout(() => Bb4tab.classList.remove("active"), 200);
};
Bb4tab.addEventListener("click", playBb4);

//C4
const C4tab = document.querySelector(".C4");
const playC4 = () =>{
  playSound(C4);
  C4tab.classList.add("active");
  setTimeout(() => C4tab.classList.remove("active"), 200);
};
C4tab.addEventListener("click", playC4);

//C4
const C5tab = document.querySelector(".C5");
const playC5 = () =>{
  playSound(C5);
  C5tab.classList.add("active");
  setTimeout(() => C5tab.classList.remove("active"), 200);
};
C5tab.addEventListener("click", playC5);

//D4
const D4tab = document.querySelector(".D4");
const playD4 = () =>{
  playSound(D4);
  D4tab.classList.add("active");
  setTimeout(() => D4tab.classList.remove("active"), 200);
};
D4tab.addEventListener("click", playD4);

//D5
const D5tab = document.querySelector(".D5");
const playD5 = () =>{
  playSound(D5);
  D5tab.classList.add("active");
  setTimeout(() => D5tab.classList.remove("active"), 200);
};
D5tab.addEventListener("click", playD5);

//Db4
const Db4tab = document.querySelector(".Db4");
const playDb4 = () =>{
  playSound(Db4);
  Db4tab.classList.add("active");
  setTimeout(() => Db4tab.classList.remove("active"), 200);
};
Db4tab.addEventListener("click", playDb4);

//Db5
const Db5tab = document.querySelector(".Db5");
const playDb5 = () =>{
  playSound(Db5);
  Db5tab.classList.add("active");
  setTimeout(() => Db5tab.classList.remove("active"), 200);
};
Db5tab.addEventListener("click", playDb5);

//E4
const E4tab = document.querySelector(".E4");
const playE4 = () =>{
  playSound(E4);
  E4tab.classList.add("active");
  setTimeout(() => E4tab.classList.remove("active"), 200);
};
E4tab.addEventListener("click", playE4);

//E5
const E5tab = document.querySelector(".E5");
const playE5 = () =>{
  playSound(E5);
  E5tab.classList.add("active");
  setTimeout(() => E5tab.classList.remove("active"), 200);
};
E5tab.addEventListener("click", playE5);

//Eb4
const Eb4tab = document.querySelector(".Eb4");
const playEb4 = () =>{
  playSound(Eb4);
  Eb4tab.classList.add("active");
  setTimeout(() => Eb4tab.classList.remove("active"), 200);
};
Eb4tab.addEventListener("click", playEb4);

//Eb5
const Eb5tab = document.querySelector(".Eb5");
const playEb5 = () =>{
  playSound(Eb5);
  Eb5tab.classList.add("active");
  setTimeout(() => Eb5tab.classList.remove("active"), 200);
};
Eb5tab.addEventListener("click", playEb5);

//F4
const F4tab = document.querySelector(".F4");
const playF4 = () =>{
  playSound(F4);
  F4tab.classList.add("active");
  setTimeout(() => F4tab.classList.remove("active"), 200);
};
F4tab.addEventListener("click", playF4);

//G4
const G4tab = document.querySelector(".G4");
const playG4 = () =>{
  playSound(G4);
  G4tab.classList.add("active");
  setTimeout(() => G4tab.classList.remove("active"), 200);
};
G4tab.addEventListener("click", playG4);

//Gb4
const Gb4tab = document.querySelector(".Gb4");
const playGb4 = () =>{
  playSound(Gb4);
  Gb4tab.classList.add("active");
  setTimeout(() => Gb4tab.classList.remove("active"), 200);
};
Gb4tab.addEventListener("click", playGb4);


window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 65) return playC4();

  // Press W
  if (keyCode === 87) return playDb4();

  // Press S
  if (keyCode === 83) return playD4();

  // Press E
  if (keyCode === 69) return playEb4();

  // Press D
  if (keyCode === 68) return playE4();

  // Press F
  if (keyCode === 70) return playF4();

  // Press T
  if (keyCode === 84) return playGb4();

  // Press G
  if (keyCode === 71) return playG4();

  // Press Y
  if (keyCode === 89) return playAb4();

  // Press H
  if (keyCode === 72) return playA4();

  // Press U
  if (keyCode === 85) return playBb4();

  // Press J
  if (keyCode === 74) return playB4();

  // Press K
  if (keyCode === 75) return playC5();

  // Press L
  if (keyCode === 79) return playDb5();

  // Press O
  if (keyCode === 76) return playD5();

  // Press P
  if (keyCode === 80) return playEb5();

  // Press ;
  if (keyCode === 59) return playE5();
}); 