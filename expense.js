
let nameItem = document.querySelector('#name-item');
let itemDate = document.querySelector('#item-date');
let amount = document.querySelector('#amount');
let addExpense = document.querySelector('#add-me');
let myExpense = document.querySelector('.add-up');
let indexValue = document.querySelector("#index-value");
let nameValue = document.querySelector("#name-value");
let dateValue = document.querySelector("#date-value");
let amountValue = document.querySelector("#amount-value");


addExpense.addEventListener('click',showExpense);

function showExpense(e){
   e.preventDefault();
   var expenseItem = nameItem.value;
   var expenseDate = itemDate.value;
   var expenseAmount = amount.value;
   
 
if(expenseItem =="" || expenseDate=="" || expenseAmount==""){
   alert("make sure all input area are filled");
   //  window.location.reload();
} else {
   if(expenseItem!="" && expenseDate!= "" && expenseAmount!=""){
      myExpense.innerHTML += '<tr class="nodey">' +'<td>'+'<p>'+'.'+'</p>'+'</td>'+ 
      '<td class="pt-2">' + expenseItem+'</td>'+ '<td class="pt-2">'+expenseDate+'</td>'
      +'<td class="pt-2">' + expenseAmount+'</td>'+'<td class="pt-2">'+
      '<button class="btn btn-outline-primary" id="del" onclick="handleDelete()" >'
      +'Delete'+'</button>'+'</td>'+ '</tr>';
      nameItem.value = " ",
     itemDate.value = " ";
       amount.value = " ";
   } else {
      myExpense.innerHTML += '<tr class="nodey">' +'<td>'+'<p>'+'.'+'</p>'+'</td>'+ 
      '<td class="pt-2">' + expenseItem+'</td>'+ '<td class="pt-2">'+expenseDate+'</td>'
      +'<td class="pt-2">' + expenseAmount+'</td>' + '<td class="pt-2">'+ 
      '<button class="btn btn-outline-primary" id="del" onclick="handleDelete()" >' 
      +'Delete'+'</button>'+'</td>'+ '</tr>';
      nameItem.value = " ",
      itemDate.value = " ";
        amount.value = " ";
   }
}

handleDelete = ()=>{
   let son =  document.querySelector('.nodey');
   let deleteIt = document.querySelector('#del');
       if(deleteIt.onclick === true){
          myExpense.deleteRow(son) === true;
       } else{
          myExpense.deleteRow(son) === false ;
       }
}

}

// function handleDelete(){
//   const element = handleDelete.target;
//   if(element.className === 'del'){
//    element.parentElement.remove();
 
// }
// }