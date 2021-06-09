'use strict';

const sampleData = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
const gameScore = 0;
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
      let ball1 = Number(prompt('Provide score for first ball'));
      let ball2 = 0;
      if (10 > ball1) {
        ball2 = Number(prompt('Provide score for second ball'));
      }
      if (frame <= 9 && ball1 === 10) {
        this.gameScore.push(bowlingGame.frameCalc(ball1));
        console.log(`Playing frame ${frame}`);
      } else if (frame === 10 && ball1 === 10) {
        ball2 = Number(prompt('Provide score for second ball'));
        let ball3 = Number(prompt('Provide score for the extra throw'));
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        this.gameScore.push(bowlingGame.frameCalc(ball3));
        console.log(`Playing Special ${frame}`);
      } else {
        this.gameScore.push(bowlingGame.frameCalc(ball1, ball2));
        console.log(`Playing 2 rozne ${frame}`);
      }
    }
  },

  famesScoreArr: function () {
    for (let frame = 0; frame > 10; frame++) {
      bowlingGame.frameCalc();
    }
  },
};

bowlingGame.famesScorePromt();

console.log(bowlingGame.gameScore);
