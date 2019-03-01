 /* Une function qui affiche une alert a chaque click */ 
function firstEvent() {
  
}

 /* Une function qui affiche touts les caractere mis */ 
function secondEvent() {
  var inputValue = document.getElementById('inputId').value
  var displayElement = document.getElementById('resId')
  console.log('La valeur a afficher =>',inputValue)

  displayElement.innerText = inputValue
}

 /* Une function qui affiche une alert */ 
function thirdEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:blue;');
}

function fourthEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:red;');
}
