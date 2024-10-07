/* eslint-disable */
import "bootstrap";
import "./style.css";
import { suit, values } from "./cards";

const showCard = (randomSuit, randomValues) => {
  const card = document.querySelector("#card");
  card.innerHTML = `
    <div>${randomSuit}<div/>
    <div>${randomValues}<div/>
    <div>${randomSuit}<div/>`;
};

const generateRandomCard = () => {
  const randomSuit = suit[Math.floor(Math.random() * 4)];
  const randomValues = values[Math.floor(Math.random() * 13)];
  showCard(randomSuit, randomValues);
};

window.onload = function() {
  //write your code here

  generateRandomCard();

  document
    .querySelector("#btn-newCard")
    .addEventListener("click", () => generateRandomCard());
};
