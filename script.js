"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const body = document.querySelector("body");


const buttonStart = document.querySelector('button[data-action="start"]');

const buttonStop = document.querySelector('button[data-action="stop"]');

const colorRandom = () => {
    let random = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = colors[random];
};

let timer;
const startTimer = () => {
  buttonStart.disabled = true;
  timer = setInterval(colorRandom, 1000);
};

const stopTimer = () => {
  buttonStart.disabled = false;
  clearInterval(timer);
};

buttonStart.addEventListener("click", startTimer);

buttonStop.addEventListener("click", stopTimer);
