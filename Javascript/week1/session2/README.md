# Session 2

Cours

Thèmes traités
Introduction aux événements (moins de 10 minutes)
Livecoding/Exemples
Exemple très succinct des événements JavaScript

(Exemple de OpenClassroom)

Index.html

<div id="capt1">
    <span id="capt2">Cliquez-moi pour la phase de capture.</span>
</div>

<div id="boul1">
    <span id="boul2">Cliquez-moi pour la phase de bouillonnement.</span>
</div>

<script src=”./index.js”></script>


Index.js

 var capt1 = document.getElementById('capt1'),
        capt2 = document.getElementById('capt2'),
        boul1 = document.getElementById('boul1'),
        boul2 = document.getElementById('boul2');
  
    capt1.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, true);
  
    capt2.addEventListener('click', function() {
        alert("L'événement du span vient de se déclencher.");
    }, true);
  
    boul1.addEventListener('click', function() {
        alert("L'événement du div vient de se déclencher.");
    }, false);
  
    boul2.addEventListener('click', function() {
        alert("L'événement du span vient de se déclencher.");
    }, false);




Notion
Montrer comment fonctionnent les événements et ce qu’on peut faire grâce aux événements JavaScript


Exercice 1

Nom
Mini calculatrice  (+,-,*,/)
Description
Le but de cet exercice:  comprendre les événements et les fonctions en reprenant l’exercice de la dernière séance.

Enoncé:

Dans cet exercice vous allez devoir créer votre première calculatrice 
qui pourra additionner, soustraire, multiplier et diviser des nombres entiers.
Pour ce faire, vous aurez besoin d’une fonction par type d’opération et une fonction pour afficher ce résultat.
Pour vous aider à débuter, vous pouvez suivre l’exemple ci-joint:

index.html

<html>
  <head>
    <meta charset="utf-8">
    <title>Event in js</title>
  </head>
  <body>


    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
      <div style=" isplay: flex; flex-direction: colomun; justify-content: space-between;border-style: dotted; width: 250px; padding: 10">
        <input type="number" id='PrefixAdd'/>
        <strong>+</strong>
        <input id='SufixAdd'/>
        <button onclick="add()">ADD</button>
        <h4>Le resultat de mon addtion</h4>
        <p id='addRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixSub'/>
        <strong>-</strong>
        <input id='SufixSub'/>
        <button onclick="sub()">SUB</button>
        <h4>Le resultat de ma soustraction</h4>
        <p id='subRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixMul'/>
        <strong>*</strong>
        <input id='SufixMul'/>
        <button onclick="mul()">MUL</button>
        <h4>Le resultat de ma multiplication</h4>
        <p id='mulRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixDiv'/>
        <strong>/</strong>
        <input id='SufixDiv'/>
        <button onclick="div()">DIV</button>
        <h4>Le resultat de ma division</h4>
        <p id='divRes'>0</p>
      </div>
    </div>
  <script src=”index.js”></script>
  </body>
</html>





Index.js


 function add() {
    var total = 0
    var Sufix = document.getElementById('PrefixAdd').value
    var prefix = document.getElementById('SufixAdd').value
    var resId = 'addRes'

    total = parseInt(Sufix, 10) + parseInt(prefix, 10)

    return displayRes(resId, total)
  }

  // function sub() {
  //   ...
  // }
  // function mul() {
  //   ...
  // }
  // function div() {
  //   ...
  // }

  function displayRes(resId, total) {
    var element = document.getElementById(resId)

    element.innerHTML  = total
    return
  }






Pour rendre l’exercice abordable, on donne l’html et le proto de chaque fonction. Ainsi ils ne se focaliseront que sur la partie importante de l’exercice, à savoir: les événements et les calcules.


Notion
Fonction
Evénements
Utilisation d’une fonction du JS parseInt()
Durée
30 - 45 minutes



Exercice 2

Nom
Validation de formulaire
Description
Commencer par leur montrer cet exemple de validation de formulaire : https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js

Puis leur montrer comment vérifier que leur input de la calculatrice soit valide ou non, avec une fonction de vérification qui déclenche une alerte.

function isValidNbr () {
...
}

Finir par un exercice où l’ on doit faire un formulaire avec 4 input 

Email:
funcion isValidEmail () {...}

Numéro: 
function isValidNbr () {...}

Mot de passe
function passwordEqual () {...}

Vérification de mot passe
function passwordEqual () {...}

Enoncé:

Dans cet exercice vous allez devoir ajouter des fonctions de validation a votre formulaire 
Pour ce faire, vous aurez besoin d’une fonction par type d’input et une fonction pour vérifier le submit.
résultat : 










index.html 

<!DOCTYPE html>
<html>
<head>
  <script src=”index.js”></script>
</head>
<body>

  <form name="myForm"  onsubmit="validateForm(event)">
    Email: <input type="email" name="email">
    Nombre: <input type="number" name="nbr">
    Mot de passe: <input type="password" name="psw">
    Verification de mot de passe: <input type="password" name="psw1">
    <input type="submit" value="Submit">
  </form>

</body>
</html>






index.js 

   function isValidNbr (nbr) {

      if (isNaN(nbr)) {
        return false
      }
      return true
    }
    function isValidEmail (email) {

      if (email === '') {
        return false
      }
      return true
    }
    function passwordEqual (psw, psw1) {

      if (psw !== psw1) {
        return false
      }
      return true
    }

    function validateForm(event) {
      event.preventDefault();

      var email = document.forms["myForm"]["email"].value;
      var nbr = document.forms["myForm"]["nbr"].value;
      var psw = document.forms["myForm"]["psw"].value;
      var psw1 = document.forms["myForm"]["psw1"].value;


      var validEmail = isValidEmail(email)
      var validNbr = isValidNbr(nbr)
      var validPasswor = passwordEqual(psw, psw1)

      if (validNbr === false) {
        alert("Ce n\'est pas nombre valide");
        return false;
      }


      if (validEmail === false) {
        alert("Email ne peut pas etre vide");
        return false;
      }

      if (validPasswor === false) {
        alert("Les deux mots de passe doivent etre identiques");
        return false;
      }


      alert("SUPER !!!😁😁😁😁😁😁😁😁");

      return true

    }







 


Notion
Utilisation du formulaire html.
Première utilisation très simple d’une condition.
Utilisation d’une ou plusieurs fonctions du JavaScript(isNaN, toString...).
Durée
1 heure



















Exercice 3/4

Nom
Validation de formulaire
Description
Commencer par leur montrer cet exemple de l’attribut “onchange” ou “onkeydown” ou “onkeyup”.

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown


Enoncé:

Dans cet exercice vous allez devoir ajouter les événements “onchange” et “onkeydown a vos “input” pour rendre votre formulaire plus dynamique, en ré-utilisant vos fonctions précédentes.

Exemple: 

function isValidNbr (nbr) {
      var nbrElement = document.getElementById('nbrId')

      if (isNaN(nbrElement.value)) {
        nbrElement.setAttribute("style", "border: 1px solid red");

        return false
      }
      nbrElement.setAttribute("style", "border: 1px solid black");

      return true
    }


Résultat: 


index.html



<!DOCTYPE html>
<html>
<head>
  <script src=”index.js”></script>
</head>
<body>
  <form name="myForm" onchange="test()" onsubmit="validateForm(event)">
    Email: <input onkeydown="isValidEmail()" type="email" name="email" id="emailId">
    Nombre: <input onkeydown="isValidNbr()" type="number" name="nbr" id="nbrId">
    Mot de passe: <input  type="password" name="psw" id="pswId">
    Verification de mot de passe: <input type="password" onkeyup="passwordEqual()" name="psw1" id="psw1Id">
    <input disabled="true" type="submit" value="Submit" id="submitId">
  </form>

</body>
</html>

 index.js







 function isValidNbr (nbr) {
      var nbrElement = document.getElementById('nbrId')

      if (isNaN(nbrElement.value)) {
        nbrElement.setAttribute("style", "border: 1px solid red");

        return false
      }
      nbrElement.setAttribute("style", "border: 1px solid black");

      return true
    }

    function isValidEmail (email) {

      var emailElement = document.getElementById('emailId')

      if (emailElement.value === '') {
        emailElement.setAttribute("style", "border: 1px solid red");
        return false
      }
      emailElement.setAttribute("style", "border: 1px solid black");
      return true
    }

    function passwordEqual (psw, psw1) {
      var pswElement = document.getElementById('pswId')
      var psw1Element = document.getElementById('psw1Id')

      if (pswElement.value !== psw1Element.value) {
        pswElement.setAttribute("style", "border: 1px solid red");
        psw1Element.setAttribute("style", "border: 1px solid red");

        return false
      }
      pswElement.setAttribute("style", "border: 1px solid black");
      psw1Element.setAttribute("style", "border: 1px solid black");
      return true
    }

    function test () {

      var email = document.forms["myForm"]["email"].value;
      var nbr = document.forms["myForm"]["nbr"].value;
      var psw = document.forms["myForm"]["psw"].value;
      var psw1 = document.forms["myForm"]["psw1"].value;
      var submitElem = document.getElementById('submitId')

      var validEmail = isValidEmail(email)
      var validNbr = isValidNbr(nbr)
      var validPasswor = passwordEqual(psw, psw1)

      if (validNbr === true && validEmail === true && validPasswor === true) {
        submitElem.removeAttribute("disabled");
        return
      }
      submitElem.setAttribute("disabled", "true");

      return

    }
    function validateForm(event) {
      event.preventDefault();
      alert("SUPER !!!😁😁😁😁😁😁😁😁");

      return 

    }









Notion
Utilisation onchange et onkeydown ou onkeyup.
Changement du style css live .
Utilisation d’une ou plusieurs fonctions du JavaScript(isNaN, toString...).
Durée
40-50 minutes.


