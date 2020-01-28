//IIFE so that this is a private execution
(function ()
{
  function Question(question, answers, correctAnswer)
  {
    //this is the context of the Question constructor, so when we pass in variables it is stored
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function(){
    //log question
    console.log(this.question);
    //go through and display answers
    for(let i = 0 ; i < this.answers.length; i ++ ){
      console.log(i + ': ' + this.answers[i])
    }
  };
  Question.prototype.checkAnswer = function(ans, callback) {
    let sc;
    if (ans === this.correctAnswer) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');
      sc = callback(false);
    }

    this.displayScore(sc);
  };
  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
  };

  let q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  let q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  let q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'],
    2);

  let questions = [q1, q2, q3];
/*  //MAth floor to get a rounded number, Math random * length to get index of question.
  let randomQuestion = Math.floor(Math.random() * questions.length);
  questions[randomQuestion].displayQuestion();

  //prompt the user for an answer using the index to select. Parseint to convert string to number
  let answer = parseInt(prompt('Please select the correct answer.'));
  questions[randomQuestion].checkAnswer(answer);*/

  function score() {
    let sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }
  let keepScore = score();

  function nextQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    questions[randomQuestion].displayQuestion();
    let answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
      questions[randomQuestion].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
