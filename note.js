
let noteInput = document.querySelector("#note-input");
let myNote = document.querySelector("#my-note");

document.querySelector('#submit-note').disabled = true;

noteInput.onkeyup = () => {
   document.querySelector('#submit-note').disabled = false;
}

document.querySelector('#submit-note').addEventListener('click',showNote);

function showNote(e){
   e.preventDefault();
   var takeNote = noteInput.value;
   myNote.innerHTML == " "; 
   if(takeNote ===" "){
      alert("make sure the note feild is not empty");
    }else {
      if(takeNote != " "){
         myNote.innerHTML += '<div class="card bg-light m-4 p-3 col-md-3 " >' + '<p class="card-body">' + takeNote + '</p>' + '</div>' ;
         noteInput.value = " ";
      }else{
         myNote.innerHTML += '<div class="card bg-light m-4 p-3 col-md-3 " >' + '<p class="card-body">' + takeNote + '</p>' + '</div>' ;
         noteInput.value = " ";
      }
   }
}