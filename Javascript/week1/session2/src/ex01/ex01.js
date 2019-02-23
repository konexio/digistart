function firstEvent() {
  alert("Hey tu viens d'appuyer sur le boutton")
}

function secondEvent() {
  var inputValue = document.getElementById('inputId').value
  var displayElement = document.getElementById('resId')
  console.log('La valeur a afficher =>',inputValue)

  displayElement.innerText = inputValue
}

function thirdEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:blue;');
}

function fourthEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:red;');
}
