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
    for (let frame = 0; frame <= 10; frame++) {
      this.gameScore.push(
        bowlingGame.frameCalc(
          Number(prompt('Provide score for firstBall')),
          Number(prompt('Provide score for SecondBowl'))
        )
      );
      console.log(frame);
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
