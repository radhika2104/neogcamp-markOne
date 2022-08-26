
var readlineSync = require('readline-sync');
var username = readlineSync.question('Please enter your name: ');
console.log('Welcome, ' + username.charAt(0).toUpperCase() + username.substr(1) + '!');
console.log('Topic for this trivia game is '+ 'World Economics'+ '!')
console.log('');
console.log('Game Guidelines:');
console.log('');
console.log('To exit the quiz game, press Ctrl+C again');
console.log('');
console.log('Enter "a","b" or "c" to select any option and press Enter.');
console.log('');
console.log('In Beginner Level, On a right answer, you will earn 2 points and on a wrong answer you will lose 1 point.');
console.log('In Novice Level, On a right answer, you will earn 3 points and on a wrong answer you will lose 1 point.');
console.log('In Competent Level, On a right answer, you will earn 4 points and on a wrong answer you will lose 2 point.');
console.log('');

var player = {
  name: 'Ruchika',
  score: 3
}

var HighScores = [player]

function printScoreBoard(){
  console.log('')
  console.log('Scoreboard: ');
  console.log(HighScores[0].name + ' : ' + HighScores[0].score);
  console.log('')
}

printScoreBoard()

console.log(`Let\'s see if you can beat the highest score ${player.score}. All the best!`);
console.log('');

var questionOne = {
  question: 'Qs. What is world reserve currency? \n a. USD \n b. Yen \n c. Euro \n ',
  answer: 'a'
}

var questionTwo = {
  question: 'Qs. A recession is negative economic growth for how many quarters? \n a. Two \n b. Three \n c. Four \n ',
  answer: 'a'
}

var questionThree = {
  question: 'Qs. Which country is biggest exporter in the world? \n a. China \n b. Bangladesh \n c. India \n ',
  answer: 'a'
}

var questionFour = {
  question: 'Qs. Which was the first country to print paper money? \n a. India \n b. USA \n c. China \n ',
  answer: 'c'
}

var questionFive = {
  question: 'Qs. Which one of the following causes the condition in which prices increase rapidly as a currency loses its value? \n a. stagflation \n b. hyper inflation \n c. stealth inflation \n ',
  answer: 'b'
}

var questionSix = {
  question: 'Qs. Euro is the official currency of how many countries, as of Aug 2022? \n a. 15 \n b. 23 \n c. 19 \n ',
  answer: 'c'
}

var questionSeven = {
  question: 'Qs. Which is the first country to make bitcoin a legal tender? \n a. Mexico \n b. Central African Republic \n c. El Savador \n ',
  answer: 'c'
}

var questionEight = {
  question: 'Qs. Who is considered father of austrian school of economics? \n a. Carl Menger \n b. Adam Smith  \n c. Milton Friedman \n ',
  answer: 'a'
}

var questionNine = {
  question: 'Qs. When did the economic crisis of Sri Lanka start? \n a. 2012 \n b. 2019 \n c. 2022 \n ',
  answer: 'b'
}

var questionTen = {
  question: 'Qs. Private ownership of the means of production is a feature of which type of economy? \n a. socialist \n b. capitalist \n c. mixed \n ',
  answer: 'b'
}

var questionEleven = {
  question: '1. The task force of blue economy for sustainable development is a collaboration between India and which country? \n a. Switzerland \n b. France \n c. Norway \n ',
  answer: 'c'
}

var questionTwelve = {
  question: '1. A country is said to be in a debt trap if - \n a. It has to abide by the conditionalities imposed by the International Monetary Fund \n b. It has to borrow to make interest payments on outstanding loans \n c. The World Bank charges a very high rate of interest on outstanding & new loans \n ',
  answer: 'b'
}

var Level0 = [
  questionOne, questionTwo, questionThree, questionFour
]

var Level1 = [
  questionFive, questionSix, questionSeven, questionEight,
]

var Level2 = [
  questionNine, questionTen, questionEleven, questionTwelve
]



var gameScore = 0;

  

function playLevelTwo(questionArray) {
  console.log('Level 2 (Competent): ');
  console.log('');
  for (var i = 0; i < questionArray.length; i++) {
    var input = readlineSync.question(questionArray[i].question);
    if (input === questionArray[i].answer) {
      gameScore += 4
      console.log('You are right! Your new score is ' + gameScore)
    }
    else {
      gameScore -= 2
      console.log('Oops! You are wrong. Your new score is ' + gameScore)
    }
    console.log('');
  }
  
  if (gameScore >= 18) {
    console.log('Wow! You are a star.');
    console.log('Your score is ' + gameScore);
  } else {
    console.log('Game Over!');
    console.log('Your score is ' + gameScore);
  }
  if (gameScore >= HighScores[0].score) {
    HighScores[0].name = username
    HighScores[0].score = gameScore
    console.log('You just made a new High Score!')
    console.log('\n Updating ScoreBoard...\n')
    printScoreBoard()
    }
}

function playLevelOne(questionArray) {
  console.log('Level 1 (Novice): ');
  console.log('');
  LevelTwo = null;
  for (var i = 0; i < questionArray.length; i++) {
    if (gameScore >= 10) {
      console.log("Bravo!! You have been promoted to Competent!");
      console.log();
      console.log();
      LevelTwo = true;
      break;
    }
    else {
      var input = readlineSync.question(questionArray[i].question);
      if (input === questionArray[i].answer) {
        gameScore += 3
        console.log('You are right! Your new score is ' + gameScore)
      }
      else {
        gameScore -= 1
        console.log('Oops! You are wrong. Your new score is ' + gameScore)
      }
    }
    console.log('');
  }
  if (LevelTwo === true) {
    playLevelTwo(Level2);
  } else {
    console.log('Your game score is: ' + gameScore)
    if (gameScore >= HighScores[0].score) {
      HighScores[0].name = username
      HighScores[0].score = gameScore
      console.log('You just made a new High Score!')
      console.log('\n Updating ScoreBoard...\n')
      printScoreBoard()
    }
    console.log('Game Over! You were just one LEVEL away from highest. Try again!');
    
  }
}

function game(Level0) {
  console.log('Level 0 (Beginner): ');
  console.log('');
  LevelOne = null;
  LevelTwo = null;

  for (var i = 0; i < Level0.length; i++) {
    if (gameScore >= 4 && LevelOne !== true) {
      console.log("Bravo!! You have been promoted to Novice!");
      console.log();
      
      LevelOne = true;
      console.log("See if you can answer more to directly play Competent!")
      console.log();
      var input = readlineSync.question(Level0[i].question);
      if (input === Level0[i].answer) {
        gameScore += 2
        console.log('You are right! Your new score is ' + gameScore)
      } else {
        gameScore -= 1
        console.log('Oops! You are wrong. Your new score is ' + gameScore)
      }
    }
    else if (gameScore >= 6) {
      console.log("Wohoo!! You just skipped a level. You have been promoted to Competent!");
      LevelTwo = true;
      console.log();
      console.log();
      break;
    }
    else{
      var input = readlineSync.question(Level0[i].question);
      if (input === Level0[i].answer) {
        gameScore += 2
        console.log('You are right! Your new score is ' + gameScore)
      } else {
        gameScore -= 1
        console.log('Oops! You are wrong. Your new score is ' + gameScore)
      }
    }
    
    console.log('');
  }
  // check if LevelOne is True or LevelTwo
  if (LevelTwo == true) {
    playLevelTwo(Level2);
  }
  else if ((LevelOne === true && LevelTwo !== true) || (gameScore >= 4)) {
    console.log('You have qualified for LEVEL 1...')
    playLevelOne(Level1);
  } 
  else {
    console.log('Your game score is: ' + gameScore)
    if (gameScore >= HighScores[0].score) {
      HighScores[0].name = username
      HighScores[0].score = gameScore
      console.log('You just made a new High Score! Send us a screenshot to update the high score.')
      console.log('\n Updating ScoreBoard...\n')
      printScoreBoard()
    }
    console.log('Game Over! Try better next time for higher levels!')
    
  }

}

game(Level0)