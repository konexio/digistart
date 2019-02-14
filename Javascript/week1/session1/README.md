# Session 1: Introduction au Javascript

[Instructions pour les professeurs](./teachers.md)

## Thèmes abordés

- Functions
- Variables
- Document
- Selectors
- eventListener

## 💡 Resources externes

w3schools: [https://www.w3schools.com/]
exemple de CV: [http://www.georgecohen.co.uk/index]
Pour les champs html et leurs propriétés:
Input: https://www.w3schools.com/tags/tag_input.asp
Button: https://www.w3schools.com/tags/tag_button.asp

Pour la récupération d’un élément: 
https://www.w3schools.com/jsref/met_document_getelementbyid.asp

Pour inclure du javascript dans du html:  
https://www.w3schools.com/js/js_whereto.asp


## Livecoding/Exemples

Livecoding:

On va parler de l’utilisation de javascript dans un html et des différentes façons de le faire : [5 minutes]

https://www.w3schools.com/js/js_whereto.asp

Ensuite, dans un fichier html on va faire un exercice d’addition avec deux champs et un bouton.
Dans un fichier javascript on va montrer ce que c’est que “document”, comment récupérer un élément par son id, comment attacher un listener à un bouton, et comment afficher l’addition des contenus des deux champs. 

[20 minutes] On partira des deux fichiers html et javascript vides pour arriver au résultat suivant en expliquant tout au passage (document, une variable, une fonction et ses argument, un objet et ses attributs)

Index.html contient : 
<!DOCTYPE html>
<html>
 <head>
   <script src="./script.js"></script>
 </head>
 <body>
   <h3>Addition</h3>

   <input id="first" type="number" value=0 />
   +
   <input id="second" type="number" value=5 />

   <button id="btn" type="button" onclick="handleClick()">Résultat</button>
 </body>
</html>

Et script.js contient:

function handleClick(){
 // alert('On a cliqué'); // première démo avant de passer au reste
 var firstField = document.getElementById('first');
 var firstFieldValue = firstField.value;
 var secondField = document.getElementById('second');
 var secondFieldValue = secondField.value;
 var resultat = parseInt(firstFieldValue) + parseInt(secondFieldValue);
  alert(resultat);       
}

Remarque: pour la partie html, ce serait idéal de faire intervenir les apprenants le maximum possible, afin de réviser ce qu’on a vu ensemble, même si ça risque de rallonger l’introduction.

## Exercice 1


Thèmes traités:

Révision html
Inclure un fichier js externe
Document et une de ses méthodes (getElementById)
Les fonctions et comment ajouter une fonction comme un listener
Alert et parseInt


Nom: Addition
Description: Dans cet exercice nous allons apprendre à récupérer les contenus de deux champs dans la page et les additionner pour en afficher les résultats.

L’énoncé comporte des instructions:
Dans le dossier session 1 :
Créer un fichier index.html avec les balises html, head et body
Créer un fichier js avec une fonction handleClick qui fait un alert(‘hello world’)
Inclure le fichier script.js dans le html (voir: https://www.w3schools.com/js/js_whereto.asp)
Ajouter deux inputs et un bouton à la page html:
Ajouter une balise input avec un id “input1” et une deuxième balise input avec un id “input2”. Les deux inputs ont un attribut “value” qui a une valeur 0.
Ajouter un une balise button avec un id “btn”.
Voir (Input: https://www.w3schools.com/tags/tag_input.asp et Button: https://www.w3schools.com/tags/tag_button.asp)
Rafraîchir pour voir le résultat
Ajouter l’attribut onclick à la balise button avec comme valeur le nom de la fonction créée dans script.js : “handleClick()”
Rafraîchir la page, cliquez sur le bouton, vous devez avoir un alert avec “Hello world”.
On va maintenant modifier la fonction handleClick pour faire un calcul d’addition:
À l’intérieur de la fonction créer une variable “firstInput” dans laquelle on peut récupérer l’input qui a l’id ‘input1’ (voir https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
Créer une autre variable “firstInputValue”  pour récupérer la valeur de cet input en faisant: firstInput.value;
De la même façon, créer secondInput et secondInputValue
Stocker dans une variable “resultat” l’addition de parseInt(firstInputValue) et parseInt(secondInputValue)
Exécuter alert avec comme argument “resultat”
Rafraîchir la page, remplir les champs par des nombres, cliquer sur le bouton et vérifier le résultat.

Remarque: la solution est dans la partie livecoding

## Exercice 2

Thèmes traités:

Révision du css (comment inclure le fichier dans le html)
Travailler avec les classes css dans le javascript
Encore un eventListener sur le bouton


Nom: Modifier le style du body
Description: Première partie: faire autant de boutons qu’on veut de couleurs possibles

Instructions:

Créer 3 fichiers: un index.html, index.css et script.js
Dans la balise head, ajouter une balise script pour le fichier js et une balise link pour le css (voir le cours d’avant)
Dans le body du fichier html
Créer une balise h3 avec comme texte “Cliquer sur un bouton pour changer la couleur”
Ajouter deux boutons avec les textes “rouge” et “bleu”
Dans le fichier css:
Ajouter deux classes “blue” et “red” qui ajoutent respectivement une couleur de fond bleue et rouge
Dans le fichier javascript, créer une fonction handleClick qui prend en entrée un nom de classe “className” et qui affecte cette classe au body, en utilisant document.body.className = className
Dans le fichier html:
Ajouter au bouton avec le texte rouge, l’attribut onclick avec la valeur “handleClick(‘red’)”
 Ajouter au bouton avec le texte bleu, l’attribut onclick avec la valeur “handleClick(blue)”

Solution première partie:
Fichier html:
<!DOCTYPE html>
<html>
 <head>
   <script src="./script.js"></script>
   <link rel="stylesheet" type="text/css" href="index.css">
 </head>
 <body>
   <h3>Cliquer sur un bouton pour changer la couleur</h3>
   <button type="button" onclick="handleClick('red')">Rouge</button>
   <button type="button" onclick="handleClick('blue')">Bleu</button>
 </body>
</html>
Fichier javascript:
function handleClick(className){
 document.body.className = className;  
}
Fichier css:
.red{
 background-color: red;
}
.blue{
 background-color: blue;
}

Deuxième partie (bonus): Faire la même chose mais pour modifier le style d’une div dans le document.



