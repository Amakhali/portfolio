
let todo = document.querySelector("#my-activity"); 
let myList = document.querySelector("#list");
 
document.querySelector("#add-activity").disabled = true;

todo.onkeyup = () => {
   document.querySelector("#add-activity").disabled = false;
}

document.querySelector("#add-activity").addEventListener('click',showList);

function showList(e){
      e.preventDefault();
      var list = todo.value;
      var newTodo = document.createElement("li");
      var newItem = myList.appendChild(newTodo);
      if( list === " " || list===null){
         // alert("Add an activity before Add-activity is clicked");
        document.querySelector('#add-activity').disabled = true;
        } else {
         if ( list !=""){
      var acheive =  newItem.innerHTML = list + ' ' + ' ' + 
      '<button class="btn btn-outline-primary m-2 " id="doneit" onclick="handledone()">'
       + 'Done' + '</button>';
      acheive;
         todo.value = " ";
         document.querySelector("#add-activity").disabled = true;
      } else {
      var acheive =  newItem.innerHTML.append(list + ' ' + ' ' + 
      '<button class="btn btn-outline-primary m-2 " id="doneit" onclick="handledone()">'
       + 'Done' + '</button>');
         acheive;
         todo.value = "";
         document.querySelector("#add-activity").disabled = true;
      } 
    }
    
     handledone = ()=> {
      document.querySelector('#doneit').style.backgroundColor = 'green';
      }
}
// function handledone() {
//    document.querySelector("#doneit").style.display = 'green';
// }



// // acheive.addEventListener('click',acheived);

//  function acheived (e){
//     e.preventDefault();
//    acheive .style.color = 'green'
// }

//  var hurray = document.querySelectorAll("#doneit").forEach(acheive=>{
//    acheive.addEventListener('click',()=>{
//       Button.style.backgroundColor = "green"
//    })
//  }) 

