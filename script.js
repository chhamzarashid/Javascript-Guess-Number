'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ('😂 correct number');
document.querySelector('.number').textContent =45;
document.querySelector('.score').textContent =45;
document.querySelector('.guess').value=23
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random()*20)+1;
let score= 20;
let highscore=0; 
let displayMessage = function (message){
    document.querySelector('.message').textContent= message;
}

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess=Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess)
        if (!guess){
            displayMessage('No Number');
        }
        else if(guess === secretNumber)
        {
            displayMessage('Correct Number');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            if(score >highscore)
            {
                highscore = score;
                document.querySelector('.highscore').textContent= highscore;
            }
        }
        else if ( guess!== secretNumber){
            if(score>1)
            {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
            }
        }
        else{
            
            displayMessage('Loose Game');
            document.querySelector('.score').textContent = 0;
        }
    }
)
document.querySelector('.again').addEventListener(
    'click', function(){
          score = 20;
          secretNumber = Math.trunc(Math.random()*20)+1;
          displayMessage('Start Guess Again');
          document.querySelector('.score').textContent= score;
          document.querySelector('.number').textContent= '?';
          document.querySelector('.guess').value= '';
          document.querySelector('body').style.backgroundColor='#222';
        }

)