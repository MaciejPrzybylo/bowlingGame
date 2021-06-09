'use strict';

const bowlingGame = {
  gameScore: [],
  finalScore: 0,
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
        console.log(`Frame: ${frame}`);
      } else if (frame === 10 && ball1 === 10) {
        ball2 = Number(prompt('Provide score for second ball'));
        ball3 = Number(prompt('Provide score for the extra throw'));
        this.individualBalls.push(ball1, ball2, ball3);
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        this.gameScore.push(ball3);
        console.log(`Extra ball ${frame}`);
      } else {
        this.individualBalls.push(ball1, ball2);
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        console.log(`Frame: ${frame}`);
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
        score = score + (10 + numbersArr[i + 2]);
      } else {
        score = score + numbersArr[i];
      }
      console.log(score);
    });
    return score;
  },

  scoreCalc: function (individualBalls) {
    let result = 0;
    individualBalls.forEach(function (scores, i, arr) {
      if (scores === 10) {
        result += arr[i + 1];
        result += arr[i + 2];
        console.log(result);
      } else if (scores + arr[i + 1] === 10) {
        result += arr[i + 2];
        console.log(result);
      }
      result += scores;
      console.log(result);
    });
    return result;
  },
};
bowlingGame.famesScorePromt();

console.log(bowlingGame.individualBalls);
console.log(bowlingGame.gameScore);
console.log(bowlingGame.scoreCalc(bowlingGame.individualBalls));
