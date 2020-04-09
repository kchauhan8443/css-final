
let button = document.getElementById('button');
let ul = document.getElementById('toDoList');
//use event handler property to trigger addToList when the button is created
button.onclick = addToList;


//function to add items to the to do list
function addToList(e) {
  e.preventDefault(); 
  let item = document.getElementById('toDo').value;
  let div = document.createElement('div');
  div.setAttribute("class", "list");
  let li = document.createElement('li');
  li.textContent = item;  
  let checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox'); 
  let button = document.createElement('button'); 
  button.innerHTML = "Delete";
  button.setAttribute("class", "delete");
  div.appendChild(li);
  li.appendChild(checkBox);
  div.appendChild(button);
  ul.appendChild(div); 
  //using event handler property on checkbox, listen for a change on the checkbox object inside the function in which checkbox is defined 
  li.onchange = checkItem;
  //using event handler property on button, listen for a click on the checkbox object inside the function in which checkbox is defined 
  button.onclick = deleteItem; 
}

//function to check the task as completed 
 function checkItem(e) {
   //we want the line-through to be on the list item, not the checkbox itself (where the event is happening). We need to used a property to help us get the 'closest li' <-- good hint right there

 let addedItem = e.target.closest('li');
   //get the parentnode of 
   let parentItem = addedItem.parentNode; 
   addedItem.classList.toggle('checked');
div.appendChild(button);
   parentItem.appendChild(addedItem);
}

//function to delete items 
 function deleteItem(e) {
    //need to find a way to navigate the dom to the parent li (check out week 4 - traverse the dom)
    let deleted = e.target.closest('div'); 
    //need to use a method to 'remove' this element once we target it 
    deleted.remove(); 
  }



