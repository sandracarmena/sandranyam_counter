/*creation of the counter section */
const section = document.createElement("section");

/*creation of the first divCounter with the text number*/
const divCounter = document.createElement("divCounter");

section.appendChild(divCounter);
var p = document.createElement("p");
p.innerHTML = "00";
divCounter.appendChild(p);

/*creating a div with the four main buttons*/

const divCalculator = document.createElement("divCalculator");
section.appendChild(divCalculator);

let buttonPlus = document.createElement("button");
buttonPlus.innerHTML = "+";
buttonPlus.className = "button";

let buttonMoins = document.createElement("button");
buttonMoins.innerHTML = "-";
buttonMoins.className = "button";

let PlusDix = document.createElement("button");
PlusDix.innerHTML = "+10";
PlusDix.className = "button";

let MoinsDix = document.createElement("button");
MoinsDix.innerHTML = "-10";
MoinsDix.className = "button";

divCalculator.appendChild(buttonPlus);
divCalculator.appendChild(buttonMoins);
divCalculator.appendChild(PlusDix);
divCalculator.appendChild(MoinsDix);

/*creation of the second div with reset and games buttons*/

const divButton2 = document.createElement("divButton2");
section.appendChild(divButton2);

let buttonReset = document.createElement("button");
buttonReset.innerHTML = "Reset";
buttonReset.className = "button2";
divButton2.appendChild(buttonReset);

let buttonGames = document.createElement("button");
buttonGames.innerHTML = "N° Games";
buttonGames.className = "button2";
divButton2.appendChild(buttonGames);

/*creation of the third div with the text inside*/

const divText = document.createElement("divText");
section.appendChild(divText);

let paragraph = document.createElement("text");
paragraph.innerHTML = "You played 0 times";
divText.appendChild(paragraph);

document.body.appendChild(section);

/*Creating the functions for calculations*/

let count = 0;
let result = 1;
let gamesPlayed = 0;

function calc1() {
  p.innerHTML = parseInt(p.innerHTML) + 1;
  count = count + 1;
  paragraph.innerHTML = `You clicked ${result++} times`;
}

function calc2() {
  p.innerHTML = parseInt(p.innerHTML) - 1;
  count = count - 1;
  paragraph.innerHTML = `You clicked ${result++} times`;
}
function calc3() {
  p.innerHTML = parseInt(p.innerHTML) + 10;
  count = count + 10;
  paragraph.innerHTML = `You clicked ${result++} times`;
}
function calc4() {
  p.innerHTML = parseInt(p.innerHTML) - 10;
  count = count - 10;
  paragraph.innerHTML = `You clicked ${result++} times`;
}
function calc5() {
  if (count !== 0) {
    gamesPlayed += 1;
    buttonGames.innerHTML = `N° Games: ${gamesPlayed}`;
  }
  p.innerHTML = 0;
  result = 1;
  count = 0;
  paragraph.innerHTML = `You played 0 times`;
}

/*adding event on ours buttons*/

buttonPlus.addEventListener("click", () => {
  calc1();
});
buttonMoins.addEventListener("click", () => {
  calc2();
});
PlusDix.addEventListener("click", () => {
  calc3();
});

MoinsDix.addEventListener("click", () => {
  calc4();
});

buttonReset.addEventListener("click", () => {
  calc5();
});
