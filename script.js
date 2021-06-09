'use strict';

const sampleData = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
const sampleGame = 0;
// sampleData.forEach(function (currentElement, i, arr) {
//   gameScore = +currentElement;
//   if (currentElement === 10) {
//   }
// });

// for ( let frame = 0; frame >= 10; frame++){
//     for(let ball =0; ball >= 2; ball++ ){

//     }

// }

const bowlingGame = {
  gameScore: [],
  finalScore: [],
  individualBalls: [],

  frameCalc: function (ball1, ball2) {
    let frameScore;
    if (ball1 === 10) {
      frameScore = 'Strike';
    } else if (ball1 + ball2 === 10) {
      frameScore = 'Spare';
    } else {
      frameScore = ball1 + ball2;
    }

    return frameScore;
  },

  famesScorePromt: function () {
    for (let frame = 1; frame <= 10; frame++) {
      console.log(frame);
      let ball1 = Number(prompt('Provide score for first ball'));
      let ball2 = 0;
      let ball3 = 0;
      if (10 > ball1) {
        ball2 = Number(prompt('Provide score for second ball'));
      }
      if (frame <= 9 && ball1 === 10) {
        this.individualBalls.push(ball1);
        this.gameScore.push(bowlingGame.frameCalc(ball1));
        console.log(`Playing frame ${frame}`);
      } else if (frame === 10 && ball1 === 10) {
        ball2 = Number(prompt('Provide score for second ball'));
        ball3 = Number(prompt('Provide score for the extra throw'));
        this.individualBalls.push(ball1, ball2, ball3);
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        this.gameScore.push(ball3);
        console.log(`Playing Special ${frame}`);
      } else {
        this.individualBalls.push(ball1, ball2);
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        console.log(`Playing 2 rozne ${frame}`);
      }
    }
  },

  badCalc: function (scoreArray) {
    let score = 0;
    let numbersArr = [...scoreArray];
    numbersArr.forEach(function (el, i, arr) {
      if (el === 'Strike' || el === 'Spare') {
        numbersArr[i] = 10;
      }
      console.log(numbersArr);
    });

    //------------- Forgot about the 'SPARE' case where I do actually need scores for single balls. ------------------
    scoreArray.forEach(function (el, i, arr) {
      if (el === 'Strike') {
        score = score + (10 + numbersArr[i + 1] + numbersArr[i + 2]);
      } else if (el === 'Spare') {
        score = score + (10 + numbersArr[i + 1]);
      } else {
        score = score + numbersArr[i];
      }
      console.log(score);
    });
    return score;
  },
  // TUTAJ PRACUJE TERAZ
  scoreCalc: function (individualBalls) {
    for (let i = 0; i < individualBalls.lenght; i++) {
      if (individualBalls[i] === 10) {
      }
    }
  },
};

bowlingGame.famesScorePromt();

console.log(bowlingGame.individualBalls);
console.log(bowlingGame.gameScore);
