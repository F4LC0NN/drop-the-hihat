/*
--------------------------------------
  Events Handlers
--------------------------------------
*/

// Link each audio file to each pad by selecting the keycode
function playSound(event) {
  const audio = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  if (!audio) return; // Stops the function all together
  audio.currentTime = 0; // Resets the audio to start
  audio.play(); // Play the audio file
}

// Activate a pad animation whenever a key is pressed
function togglePressedButtonAnimation(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (key === null) return;
  key.classList.add("toggleAnimation");
  console.log(event.keyCode);
  activatePads(event);
}

// Activate a pad animation whenever a key is released
function toggleReleasedButtonAnimation(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (key === null) return;
  key.classList.remove("toggleAnimation");
  deactivePads(event);
}

// Create an event whenever a key is pressed
window.addEventListener("keydown", (event) => {
  playSound(event);
  togglePressedButtonAnimation(event);
});

// Create an event whenever a key is released
window.addEventListener("keyup", (event) => {
  toggleReleasedButtonAnimation(event);
});

/*
--------------------------------------
  UI Setup
--------------------------------------
*/

// Choose a random color from a list of four colors
function chooseRandomColor() {
  let array = ['#9B04D0','#6304DC','#1E005C','#ffffff' ]
  let random = array[Math.floor(Math.random() * array.length)];
  return random;
}

// Select each pad by their id to change their background
function getElements() {
  const one = document.getElementById('one');
  const two = document.getElementById('two');
  const three = document.getElementById('three');
  const four = document.getElementById('four');
  const five = document.getElementById('five');
  const six = document.getElementById('six');
  const seven = document.getElementById('seven');
  const eight = document.getElementById('eight');
  const nine = document.getElementById('nine');
  const ten = document.getElementById('ten');
  const eleven = document.getElementById('eleven');
  const twelve = document.getElementById('twelve');
}

// Change each pad's background when a key is pressed
function activatePads(event) {
  getElements();
  const toggleOne = () => one.style.backgroundColor = chooseRandomColor();
  const toggleTwo = () => two.style.backgroundColor = chooseRandomColor();
  const toggleThree = () => three.style.backgroundColor = chooseRandomColor();
  const toggleFour = () => four.style.backgroundColor = chooseRandomColor();
  const toggleFive = () => five.style.backgroundColor = chooseRandomColor();
  const toggleSix = () => six.style.backgroundColor = chooseRandomColor();
  const toggleSeven = () => seven.style.backgroundColor = chooseRandomColor();
  const toggleEight = () => eight.style.backgroundColor = chooseRandomColor();
  const toggleNine = () => nine.style.backgroundColor = chooseRandomColor();
  const toggleTen = () => ten.style.backgroundColor = chooseRandomColor();
  const toggleEleven = () => eleven.style.backgroundColor = chooseRandomColor();
  const toggleTwelve = () => twelve.style.backgroundColor = chooseRandomColor();

  switch (true) {
    case (event.keyCode === 49):
      toggleOne();
      break;
    case (event.keyCode === 50):
      toggleTwo();
      break;
    case (event.keyCode === 51):
      toggleThree();
      break;
    case (event.keyCode === 52):
      toggleFour();
      break;
    case (event.keyCode === 65):
      toggleFive();
      break;
    case (event.keyCode === 90):
      toggleSix();
      break;
    case (event.keyCode === 69):
      toggleSeven();
      break;
    case (event.keyCode === 82):
      toggleEight();
      break;
    case (event.keyCode === 81):
      toggleNine();
      break;
    case (event.keyCode === 83):
      toggleTen();
      break;
    case (event.keyCode === 68):
      toggleEleven();
      break;
    case (event.keyCode === 70):
      toggleTwelve();
      break;
  }
}

// Change each pad's background when a key is released
function deactivePads(event) {
  getElements();
  let transparent = 'rgba(255, 255, 255, 0.1)'
  const unToggleOne = () => one.style.backgroundColor = transparent;
  const unToggleTwo = () => two.style.backgroundColor = transparent;
  const unToggleThree = () => three.style.backgroundColor = transparent;
  const unToggleFour = () => four.style.backgroundColor = transparent;
  const unToggleFive = () => five.style.backgroundColor = transparent;
  const unToggleSix = () => six.style.backgroundColor = transparent;
  const unToggleSeven = () => seven.style.backgroundColor = transparent;
  const unToggleEight = () => eight.style.backgroundColor = transparent;
  const unToggleNine = () => nine.style.backgroundColor = transparent;
  const unToggleTen = () => ten.style.backgroundColor = transparent;
  const unToggleEleven = () => eleven.style.backgroundColor = transparent;
  const unToggleTwelve = () => twelve.style.backgroundColor = transparent;

  switch (true) {
    case (event.keyCode === 49):
      unToggleOne();
      break;
    case (event.keyCode === 50):
      unToggleTwo();
      break;
    case (event.keyCode === 51):
      unToggleThree();
      break;
    case (event.keyCode === 52):
      unToggleFour();
      break;
    case (event.keyCode === 65):
      unToggleFive();
      break;
    case (event.keyCode === 90):
      unToggleSix();
      break;
    case (event.keyCode === 69):
      unToggleSeven();
      break;
    case (event.keyCode === 82):
      unToggleEight();
      break;
    case (event.keyCode === 81):
      unToggleNine();
      break;
    case (event.keyCode === 83):
      unToggleTen();
      break;
    case (event.keyCode === 68):
      unToggleEleven();
      break;
    case (event.keyCode === 70):
      unToggleTwelve();
      break;
  }
}

