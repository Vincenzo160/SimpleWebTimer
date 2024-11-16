import { getParam } from "./util.js";

let timerElement = document.getElementById('timer');

let startTime = getParam('sec');
let mins = getParam('min');
let isBlink = getParam('blink');
console.log(isBlink);

if (startTime === null && mins !== null) {
  startTime = mins * 60;
} else if (startTime === null) {
  startTime = 60;
}
console.log(startTime);

function updateTimer() {
  let hours = Math.floor(startTime / 3600);
  let minutes = Math.floor((startTime % 3600) / 60);
  let seconds = startTime % 60;
  let timeString = '';

  if (hours > 0) {
    timeString += `${hours}:`;
  }

  timeString += `${minutes < 10 && hours > 0 ? '0' : ''}${minutes}:`;
  timeString += `${seconds < 10 ? '0' : ''}${seconds}`;

  timerElement.textContent = timeString;

  if (startTime > 0) {
    startTime--;
    setTimeout(updateTimer, 1000);
  } else if (isBlink !== 'false') {
    startBlinking();
    
  }
}

function startBlinking() {
  setInterval(() => {
    timerElement.style.visibility = (timerElement.style.visibility === 'hidden' ? '' : 'hidden');
  }, 500);
}

updateTimer();