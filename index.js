
//Get variable assignment
const addItemBtns = document.querySelectorAll('.addItemBtn'); 
const removeCheckedItemsBtn = document.querySelectorAll('.removeCheckedItemsBtn');
const unassignedRemoveBtns = document.querySelectorAll('.remove');
// console.log(unassignedRemoveBtns);

//EventListener Assignements
addItemBtns.forEach((item) => {
  item.addEventListener("click", addNewToDo);
});
removeCheckedItemsBtn.forEach((item) => {
  // console.log('assigned');
  item.addEventListener("click", removeAllCheckedItems);
});
unassignedRemoveBtns.forEach((item) => {
  // console.log('assigned');
  item.addEventListener("click", removeItem);
});


function addNewToDo() {
  console.log('func triggered');
  //variable Assignment:
  const inputBar = document.querySelector('#input_bar');
  const newToDo = inputBar.value.trim()

  // if the search bar is falsy
  if (!newToDo) {
    //alert that you need to add something
    alert("You haven't added anything")
    return;
  }

  //create our item
  const newItem = document.createElement('li');
  newItem.innerHTML=`<input class="toDoItem" type="checkbox" name="start-here"><label>${newToDo}</label><button class="remove">Remove</button>`;
  
  //adds new item to the overall list
  document.querySelector('.listOfToDo').appendChild(newItem);
  
  //add event listener to the added item
  let rmBtn = newItem.querySelector('.remove');
  rmBtn.addEventListener('click', removeItem);

  inputBar.value = '';
}



//Remove Item function
function removeAllCheckedItems(){
  console.log('remove started');
  //Array of all checkBoxes
  let listOfToDo = document.querySelectorAll('.listOfToDo li');
  
  listOfToDo.forEach(
    (arrItem) => {
      let isChecked = arrItem.querySelector('input[type="checkbox"]').checked;
      // let isChecked = arrItem;
      if(isChecked ){
        arrItem.parentNode.removeChild(arrItem);
      }
    }
  )};


  //remove items by use of the buttons next to them
function removeItem(){
  // let isChecked = item.querySelector('input[type="checkbox"]').checked;
  console.log('Remove Item Started');
  console.log(this);
  this.parentNode.parentNode.removeChild(this.parentNode);
}




