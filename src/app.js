/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoum = ["My", "This", "That", "A"];
  let subject = [
    "Superman",
    "Gotzilla",
    "girl of my dream",
    "dog",
    "doctor",
    "cleaner"
  ];
  let action = [
    "took my",
    "eat my",
    "lost my",
    "threw away my",
    "killed my",
    "crashed my"
  ];
  let possesion = [
    "condons",
    "life",
    "misserable existence",
    "emotions",
    "motivations"
  ];
  let where = [
    "on the beach",
    "in my home",
    "while I was flying",
    "in the middle of nowhere"
  ];

  let proIndex = Math.floor(Math.random() * pronoum.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possesion.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoum[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possesion[posIndex] +
    " " +
    where[wheIndex]
  );
};
