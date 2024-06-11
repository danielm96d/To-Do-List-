
let inputButton = document.querySelector('#input_button_top'); 
let inputButton2 = document.querySelector('#input_button_bottom'); 
const inputBar = document.querySelector('#input_bar');
let removeButton = document.querySelector('#remove_button_top');

// inputButtons are clicked
inputButton.addEventListener("click", addNewToDo);
inputButton2.addEventListener("click", addNewToDo);
removeButton.addEventListener('click', removeAllCheckedItems);

// let removeItem = document.querySelector('')
// console.log(document.querySelector('.remove'));

function addNewToDo() {
 
  console.log('func triggered');
  // the string of our seach bar 
  const newToDo = inputBar.value.trim()

  // if the search bar is falsy
  if (!newToDo) {
    //alert that you need to add something
    alert("You haven't added anything")
    return;
  }
  //create our item
  const newItem = document.createElement('li');
  newItem.innerHTML=`<input class="toDoItem" type="checkbox" name="start-here">${newToDo}<button class="remove">Remove</button>`;
  //Gets the list and adds new item
  document.querySelector('.listOfToDo').appendChild(newItem);

  let rmBtn = newItem.querySelector('.remove');
  console.log(rmBtn);
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




