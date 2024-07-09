/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomExcuse(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateExcuse() {
    let excuse = `${randomExcuse(who)} ${randomExcuse(action)} ${randomExcuse(
      what
    )} ${randomExcuse(when)}`;
    return excuse;
  }

  document
    .getElementById("generate-excuse-button")
    .addEventListener("click", function() {
      document.getElementById("excuse").innerHTML = generateExcuse();
    });

  console.log("Hello Rigo from the console!");
};
