# Session Boucles et Arrays

Cours

Thèmes traités
Boucles et Arrays
Livecoding/Exemples
Un tableau / “Array” en JavaScript est un type de variable qui contient une liste de valeurs qui peuvent être des nombres, des chaînes de caractères, des objets, ou tout autre objet.


Il s’initialise soit avec une liste d'éléments, soit vide: 
var equipes = [];

On accede a un element du tableau avec l’indice de l’element dans le tableau: 
equipe[0] retourne le premier élément du tableau, on dit qu’un tableau est indexé à zéro.

// On initialise des tableaux de données de type “Array” en JavaScript
var equipes = ["France", "Angleterre", "Belgique", "Croatie"];

// La propriété  length retourne le nombre d'éléments dans le tableau
var nombreEquipes = equipes.length; 

Pour parcourir un tableau à 3 elements, on peut soit ecrire:
text = text + equipes[0];
text = text + equipes[1];
text = text + equipes[2];

Soit utiliser une boucle “for”
var i;
for (i = 0; i < nombreEquipes; i++) { 
  text += equipes[i] + "<br>";
}
Qui correspond à:
initialiser une variable qui va contenir l’indice/compteur i dans le tableau
la condition de répétition de la boucle : tant que notre compteur d’indice i est strictement inférieur au nombre d'éléments dans le tableau
L’action à faire à la fin de chaque boucle : incrémenter notre compteur i 
  
// Affichons la liste des équipes avec une boucle “for”
var text = "<ul>";
var i;
for (i = 0; i < nombreEquipes; i++) 
{
  text += "<li>" + equipes[i] + "</li>";
}
text += "</ul>";
// Trions les données en utilisant une fonction du type “Array”
equipes.sort();

Un autre type de boucle courant est le while qui boucle une liste d’instructions tant que la condition du while est vraie.
Attention à ne pas faire de boucle infinie, cela ferait freezer votre programme.

// Remplacer un “for” par un “while”
var i = 0;
while (i < nombreEquipes)
{
  text += "<li>" + equipes[i] + "</li>";
  i++;
}

Pour aller plus loin: 
for (x in person) { // code }
do { // code } while (condition);

Exercice
https://www.w3schools.com/code/tryit.asp?filename=G152PV76GSZS


Exercice 1

Nom
Trouver si une équipe est parmi les demi-finalistes de la coupe du monde 2018
Description
var equipes = ["France", "Angleterre", "Belgique", "Croatie"];
var equipe = document.getElementById("equipe").value; // input du formulaire

var nombreEquipes = equipes.length;

document.getElementById("chercher-resultat").innerHTML = "Non trouve"; // par defaut

for (i = 0; i < nombreEquipes; i++) {
 if (equipes[i] === equipe) {
   document.getElementById("chercher-resultat").innerHTML = "Demi-finaliste";
   break;
 }
}
Thèmes traités
For, Array, Break, Strings
Durée



Exercice 2

Nom
Faire une table de multiplication
Description
var lignes = 10;
var colonnes = 10;
var j = 1;
var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

for (i = 1; i <= lignes; i++) {
 output = output + "<tr>";
 while (j <= colonnes) {
   output = output + "<td>" + i * j + "</td>";
   j = j + 1;
 }
 output = output + "</tr>";
 j = 1;
}

output = output + "</table>";
Thèmes traités
While, For, Multiplication
Durée




