# CLI Quiz App on World Economics

This is first project created in Neo G camp, LevelZero to understand programming constructs in Javascript.

The Quiz App is created on World Economics. 

## Features


- Welcomes user by taking username as input

- Bonus feature: Displays game guidelines and rules for navigating through different levels if user wants to review them using readline.sync(keyINYN)

- Keeps score of a right or wrong answer

- Displays current score on each question's answer based on correctness

- Bonus feature: On reaching a certain score, promotes user to appropriate level

- Bonus feature: Displays initial scoreboard and updates and displays updated scoreboard after the game, if user beats the high score

- Bonus feature: This CLI App is not that boring, chalk library has been used to beautify the UI for the game

- Bonus feature: In order to select an option, a user can select lowercase, uppercase or numeric value for same option and it will be accepted as an answer, example 'a', 'A' and '1' , all are correct usages

### Scoring system for levels

1. In Beginner Level, On a right answer, user will earn 2 points and on a wrong answer user will lose 1 point.
2. In Novice Level, On a right answer, user will earn 3 points and on a wrong answer user will lose 1 point.
3. In Competent Level, On a right answer, user will earn 4 points and on a wrong answer user will lose 2 point.


### Promotion system for levels

- There are 4 questions each in beginner, novice and competent level.

- If a user earns 6 points in beginner level, he is promoted to competent directly, if he scores less than 6 but atleast 4, user is promoted to novice. If user earns less than 4, game is over after four questions in beginner level.

- If a user earns 10 points in novice level, he is promoted to competent, if he scores less than 10 ,game is over at novice level.

- If a user earns 18 points in competent level, he is awarded a star badge at end of the game, else only game score is displayed.

## Learnings

- creating objects in javascript 
- javascript basic syntax
- Learned javascript readline-sync
- usage of chalk library


## URL for App


This CLI App was created using Repl.

URL - https://replit.com/@radhika2104/quizapp?v=1?embed=1&output=1

Note: repl.run is now deprecated. To run the app, click on run after opening the URL.

