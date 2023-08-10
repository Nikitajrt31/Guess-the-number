'use strict';
/*console.log(document.querySelector('.message').textContent); // in this method we need to pass in a selector i.e we are selecting an element //using
//textContent will show text Start guessing in inspect without adding extra codes.

//The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//DOM manipulation is when you use JavaScript to add, remove, and modify elements of a website.
document.querySelector('.message').textContent = 'Correct Number'; // We did DOM manipulation as we manipulated the text content.
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // for input (check in html) we will use value
console.log(document.querySelector('.guess').value); 
*/

//With an event listener we can wait for certain event to happen and then react to it , first need to select event where the event should happen.
//So when we will click on this CHECK BUTTON something should happen.

// we need to pass in the type of the event which is click over here and that's
//the first argument we pass in this function, so now as 2nd argument we need to pass a function value as an argument.

//function we used is Event Handler

//Usually whenever we get something from User interface for eg from an input field , it usually is a STRING hence we
//need to convert STRING to a number as we will compare UI number with ? number.

//When there is no guess , 1st we need to check whether there is actually a value.

//We should define secret number outside the Event handler coz we only want Secret number to be defined once, so only
//when we start the application. If we define inside handler function then on each click we would get new secret number.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  function displayMessage(message) {
    document.querySelector('.message').textContent = message;
  }

  //When it is not a guess eg falsy value or empty string
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number !!';
    displayMessage('No NUMBER XX');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number :)';
    displayMessage('Correct NUMBER');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Guess is different from secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Too High ' : 'Tow low';
      displayMessage(guess > secretNumber ? 'Too High ' : 'Tow low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
 */
//again class
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = 0;
});
