import { getParam } from "./util.js";

let timerElement = document.getElementById('timer');

let startTime = getParam('sec');
let mins = getParam('min');
let color = getParam('color');
let isBlink = getParam('blink');
let isHide = getParam('hide');

if (color !== null) {
  document.body.style.setProperty('color', `#${color}`, 'important');
}
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
  } else {
    if (isBlink !== 'false') {
      startBlinking();
    }
    if (isHide == 'true') {
      timerElement.hidden = true
    }
  } 
}

function startBlinking() {
  setInterval(() => {
    timerElement.style.visibility = (timerElement.style.visibility === 'hidden' ? '' : 'hidden');
  }, 500);
}

updateTimer();