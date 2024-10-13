/* eslint-disable */
import "bootstrap";
import "./style.css";
import { suit, values } from "./cards";

const showCard = (randomSuit, randomValues) => {
  const card = document.querySelector("#card");
  let styleSuit = "";
  if (randomSuit == "♥" || randomSuit == "♦") {
    styleSuit = "redSuit";
  }
  card.innerHTML = `
    <div class= '${
      randomSuit == "♥" || randomSuit == "♦" ? "redSuit" : "" // opcion como se usa en react
    } stylesSuites '>${randomSuit}</div>
    <div class = "styleValue">${randomValues}</div>
    <div class= '${styleSuit} stylesSuites suitBottom' >${randomSuit}</div>
    `;
};

const generateRandomCard = () => {
  const randomSuit = suit[Math.floor(Math.random() * 4)];
  const randomValues = values[Math.floor(Math.random() * 13)];
  showCard(randomSuit, randomValues);
};

const generateCardByTime = () => {
  setInterval(() => {
    generateRandomCard();
  }, 10000);
};
//esto se ejecuta cuando se carga el dom
window.onload = function() {
  //write your code here

  generateRandomCard();

  document
    .querySelector("#btn-newCard")
    .addEventListener("click", () => generateRandomCard());

  generateCardByTime();
};

function resizeFigure() {
  const myHeigth = document.getElementById("heigth").value;
  const myWidth = document.getElementById("width").value;

  const card = document.getElementById("card");

  if (myHeigth) {
    card.style.height = myHeigth + "px";
  }
  if (myWidth) {
    card.style.width = myWidth + "px";
  }
}

document.getElementById("heigth").addEventListener("input", resizeFigure);
document.getElementById("width").addEventListener("input", resizeFigure);
