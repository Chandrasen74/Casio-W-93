const lightBtn = document.getElementById("btn1");
const modeBtn = document.getElementById("btn2");
const alarmOr24HBtn = document.getElementById("btn3");
const light = document.getElementById("light");
const screen = document.getElementById("screen");
const Ecran = document.getElementById("Ecran");
//toggle for 12 or 24 hour format (true = 12H) (false = 24H)
// Initialize toggle variable to false
let twelveHour = true;
// Toggle function to flip state
function toggleState() {
  // Flip boolean value using ! operator
  twelveHour = !twelveHour;
  // Equivalent to:
  // if(twelveHour === true) {
  //   twelveHour = false;
  // } else {
  //   twelveHour = true;
  // }
}
function toggleTimeFormat() {
  alarmOr24HBtn.addEventListener("click", () => {
    toggleState();
    displayTime(twelveHour);
  });
}
toggleTimeFormat();
function getDay() {
  const date = new Date();
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}
const day = getDay();
console.log(day); // prints the current day of the week

// Returns the current day of the month
function getCurrentDay() {
  // Create a new Date object to get current time
  const now = new Date();

  // Use getDate() to extract just the day of month from Date object
  return now.getDate();
}

// Usage:
const today = getCurrentDay();
console.log(today);
function toggleScreenColor(){
  Ecran.style.fill="rgba(0,255,0,0.7";
  setTimeout(()=>{
    Ecran.style.fill="777"; 
  },3000);
}
function activateLight() {
  light.style.opacity = "1";
  setTimeout(() => {
    light.style.opacity = "0";
  }, 3000);
  toggleScreenColor();
}
function watchLight() {
  lightBtn.addEventListener("click", activateLight);
}
watchLight();
// Display current time in 12 or 24 hour format

function displayTime(use12Hour) {
  // Create Date object to get current time
  const currentDate = new Date();

  // Get hours, minutes, seconds
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  // Set AM/PM
  let ampm = "AM";

  // 12 hour format
  if (use12Hour) {
    ampm = "AM";

    if (hours >= 12) {
      ampm = "PM";
    }

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
  }
  // Add leading 0 to single digit values
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Construct time string
  let time = "";

  if (use12Hour) {
    // 12 hour format
    time = `<span id="format">${ampm}</span><span id="day-name">${day}</span><span id="day-date">${today}</span><p>${hours}:${minutes}:<small>${seconds}</small></p>`;
  } else {
    // 24 hour format
    time = `<span id="format">24H</span><span id="day-name">${day}</span><span id="day-date">${today}</span><p>${hours}:${minutes}:<small>${seconds}</small></p>`;
  }

  // Log time to console
  screen.innerHTML = `${time}`;
}

// Call function to display time
displayTime(twelveHour);
function updateTime() {
  setInterval(() => {
    displayTime(twelveHour);
  }, 500);
}
updateTime();

/*
const startButton = document.getElementById("startButton");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const secondInput = document.getElementById("secondInput");
const timerDisplay = document.getElementById("timerDisplay");
let countdownInterval;
let remainingTime;

function startTimer() {
  const hours = parseInt(hourInput.value) || 0;
  const minutes = parseInt(minuteInput.value) || 0;
  const seconds = parseInt(secondInput.value) || 0;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert("Please enter at least one value for hours, minutes, or seconds.");
    return;
  }

  const startTime = new Date().getTime();
  const endTime =
    startTime + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

  countdownInterval = setInterval(updateTimer, 1000);
  remainingTime = endTime - startTime;
  updateTimer();
}

function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    timerDisplay.textContent = "Time's up!";
    playAlertSound();
  } else {
    const hours = Math.floor(remainingTime / (60 * 60 * 1000));
    const minutes = Math.floor(
      (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
    );
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
    remainingTime -= 1000;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function playAlertSound() {
  const audio = new Audio(
    "https://assets.codepen.io/1179484/Casio+Hour+Chime.mp3"
  ); // Replace with your alert sound file
  const startAudio = setInterval(() => {
    audio.play();
  }, 1200);
}
startButton.addEventListener("click", startTimer);

function playAlertSound() {
  const audio = new Audio(
    "https://assets.codepen.io/1179484/Casio+Hour+Chime.mp3"
  ); // Replace with your alert sound file
  const startAudio = setInterval(audio.play,1000)
}

startButton.addEventListener("click", startTimer);
*/