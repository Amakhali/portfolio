
const options = document.querySelector('.options').children;
const answerTrackerContainer = document.querySelector('.answer-tracker');
const questionNumberSpan = document.querySelector('.question-num-value');
const totalQuestion = document.querySelector('.total-question');
const correctAnswerSpan = document.querySelector('.correct-answers');
const totalQuestion2 = document.querySelector('.total-question2');
const percentage = document.querySelector('.percentage');
const question = document.querySelector('.question');
const op1 = document.querySelector('.option1');
const op2 = document.querySelector('.option2');
const op3 = document.querySelector('.option3');
const op4 = document.querySelector('.option4');
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;
//questions and answer and options

const questions = [
   {
      q:'How do you call a function named "myFuntion"?',
      options:['myFuntion()', 'call myFuntion()','call funtion myFuntion()','all of the above'],
      answer:0
   },
   {
      q:'How to write an IF statement in JavaScript?',
      options:['if (i==5 then)', 'if(i ==5)','if i = 5','if i = 5 then '],
      answer:1
   },
   {
      q:'How does a FOR LOOP start?',
      options:['for (1 = 0; i<=5)', 'for(i<=5; i=0)','for i = 1 to 5','for (1=0; i<=5; i++)'],
      answer:3
   },
   {
      q:'How do you declare a javascript variable?',
      options:['variable carName', 'var carName','v carName','none of these'],
      answer:1
   },
   {
      q:'Which operator is used to assign a value to a variable?',
      options:['-', '=','+','*'],
      answer:1
   }
]
//set question and option and question number
totalQuestion.innerHTML=questions.length;
function load(){
   questionNumberSpan.innerHTML = index+1;
   question.innerHTML =  questions[questionIndex].q;
   op1.innerHTML = questions[questionIndex].options[0];
   op2.innerHTML = questions[questionIndex].options[1];
   op3.innerHTML = questions[questionIndex].options[2];
   op4.innerHTML = questions[questionIndex].options[3];
   index++;
 }
 
 function check(element) {
    if(element.id==questions[questionIndex].answer){
       element.classList.add('correct');
       updateAnswerTracker('correct')
       score++;
      } else {
         element.classList.add('wrong');
         updateAnswerTracker('wrong')
      }
      disabledOptions();
   }
   function disabledOptions() {
      for(let i=0; i < options.length; i++){
         options[i].classList.add('disabled');
         if(options[i].id==questions[questionIndex].answer){
            options[i].classList.add('correct');
         }
      }
   }
   function enableOptions(){
      for(let i = 0; i < options.length; i++) 
      options[i].classList.remove('disabled','correct','wrong');
   }
   
   function validate(){
      if(!options[0].classList.contains('disabled')){
         alert('please select one option');
      } else {
         randomQuestion();
         enableOptions();
      }
   }
   function next() {
      validate();
   }
   
   /* function timer() {
      // e.preventDefault();
      setInterval(randomQuestion(), 3000);
      // validate();
      // randomQuestion();
    }*/
   
   function randomQuestion() {
      let randomNumber=Math.floor(Math.random() * questions.length);
      let hitDuplicate = 0;
      if(index==questions.length){
         quizOver();
      }
      else {
         if(myArray.length > 0){
            for(let b = 0; b < myArray.length; b++){
               if(myArray[b]==randomNumber){
                  hitDuplicate=1;
                  break;
               }
            }
            if(hitDuplicate == 1){
               randomQuestion();
            }
            else{
               questionIndex = randomNumber;
               load();
               myArr.push(questionIndex);
            }
         }
         if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
         }
         myArray.push(randomNumber);
      } 
 }

function answerTracker() {
   for(let i = 0; i < questions.length; i++){
      const div=document.createElement("div")
      answerTrackerContainer.appendChild(div);
   }
}
function updateAnswerTracker(classnam){
   answerTrackerContainer.children[index-1].classList.add(classnam);
}

function quizOver(){
   document.querySelector('.quiz-over').style.display = 'flex';
   correctAnswerSpan.innerHTML=score;
   totalQuestion2.innerHTML = questions.length;
   percentage.innerHTML=(score / questions.length) * 100 + '%';
   // document.querySelector('.quiz-over').classList.add('show');
}

// alert((score / questions.length) * 100 + '%');
function tryAgain() {
   window.location.reload();
}

startNow = document.querySelector('.start-now');
startNow.addEventListener('click', (e) =>{
   e.preventDefault();
  document.querySelector('.start-over').style.display = 'none';
  //load();
})

 window.onload=function(){
   randomQuestion();
   answerTracker();
 }
