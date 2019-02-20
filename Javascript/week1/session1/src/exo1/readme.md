# Exercice 1 : Addition

## Notions traitées:
- Révision du HTML
- Inclure un fichier JavaScript externe dans un fichier html.
- Utilisation de l'object document et de l'une de ses méthodes (getElementById)
- Définir des fonctions et ajouter une fonction comme un listener à un évenement
- Les fonctions alert et parseInt

## Description:
Dans cet exercice nous allons apprendre à récupérer les contenus de deux champs dans la page HTML et les additionner pour en afficher les résultats.

## Instructions:
Vous avez dans ce dossier 2 fichiers:
- exo1.html
- exo1.js

Au cours de cet exercice nous allons modifier ces deux fichiers en suivant les instructions suivantes :

1 - Dans la balise head du fichier html, ajouter une balise script pour inclure le fichier exo1.js. 
Lire la partie "External JavaScript" dans la documentation suivante:

https://www.w3schools.com/js/js_whereto.asp

2 - Dans le fichier exo1.js, définir une fonction handleClick qui exécute l'instruction suivante:
```JavaScript
alert('Hello world');
```
3 - Dans le fichier html:

- Ajouter une balise input avec un id “input1” et une deuxième balise input avec un id “input2”. Les deux inputs ont un attribut “value” qui a une valeur 0.
- Ajouter un une balise button avec un id “btn”

Voir la documentation:
(Input: https://www.w3schools.com/tags/tag_input.asp )

(Button: https://www.w3schools.com/tags/tag_button.asp)


4 - Ouvrir le fichier html dans le navigateur pour voir le résultat.

5 - Ajouter l’attribut onclick à la balise button avec comme valeur le nom de la fonction créée dans script.js : “handleClick()”.

6 - Rafraîchir la page, cliquez sur le bouton, vous devez avoir une boîte d'alert avec comme contenu “Hello world”.


__Partie 2: On va maintenant modifier la fonction handleClick pour faire un calcul d’addition:__


À l’intérieur de la fonction handleClick dans exo1.js:

1 - Créer une variable “firstInput” dans laquelle on peut récupérer l’input qui a l’id ‘input1’ 
(voir la documentation ici: https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

2 - Créer une autre variable “firstInputValue”  pour récupérer la valeur de cet input en faisant: firstInput.value;

3 - De la même façon, créer secondInput et secondInputValue

4 - Stocker dans une variable “resultat” l’addition de parseInt(firstInputValue) et parseInt(secondInputValue)

5 - Exécuter alert avec comme paramètre la variable resultat.

6 - Rafraîchir la page, remplir les champs par des nombres, cliquer sur le bouton et vérifier le résultat.

