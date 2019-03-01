 /* Une fonction qui affiche une alerte à chaque click sur un bouton */ 
function firstEvent() {
  
}

 /* Une fonction qui affiche les caractères entrés dans une balise input */ 
function secondEvent() {
  var inputValue = document.getElementById('inputId').value
  var displayElement = document.getElementById('resId')
  console.log('La valeur a afficher =>',inputValue)

  displayElement.innerText = inputValue
}

 /* Une fonction qui va changer la couleur d'un élément HTML à chaque entrée de la sourie dans cet élément */ 
function thirdEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:blue;');
}

/* Une fonction qui va changer la couleur d'un élément HTML à chaque sortie de la sourie dans cet élément */ 
function fourthEvent() {
  var square = document.getElementById('resOver')
  square.setAttribute("style", 'width:100px;height:100px;background-color:red;');
}
