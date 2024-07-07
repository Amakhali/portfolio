
let inputCounter = document.querySelector('#input-count');
let outputCounter = document.querySelector('#output-count');   
let numberCount = document.querySelector('.numberCount');
let vowelSmall = ['a','e','i','o','u'];

document.querySelector('#count').disabled = true;
inputCounter.onkeyup = () => {
 document.querySelector('#count').disabled= false;
}

 document.querySelector('#count').addEventListener('click',countWord);

function countVowels(str){
   let count = 0;
   for(let letter of str.toLowerCase()){
      if(vowelSmall.includes(letter)){
         count++;
      }
   }
   return count
}

function countWord(e){
   e.preventDefault();
  var  toCount = inputCounter.value;
      if(toCount === " "){
         alert("input feild can not be empty");
      } else{
         if(toCount !=" "){
            numberCount.innerText = countVowels(toCount);
            inputCounter.value = " ";
         } else{
            numberCount.innerText = countVowels(toCount); 
            inputCounter.value = "  ";
         }
      }
   
}
