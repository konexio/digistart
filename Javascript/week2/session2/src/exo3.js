/* EXERCICE 3 - LE JUSTE PRIX DU MERCATO */

// OBJECTIF:
// Cet exercice a pour but de vous faire utiliser les conditions
// avec if, else et les comparateurs pour aider l'utilisateur à trouver le juste prix

// Ceci est le prix du rachat du joueur que nous générons aléatoirement lors du chargement
// de la page, c'est un chiffre compris entre 0 et 100
var random = Math.random(0, 1) * 100;
var price = Math.floor(random);

// Cette ligne permet d'afficher dans la console le prix que l'utilisateur doit trouver
console.log('l\'utilisateur doit trouver', price);

// Dans ce tableau on pourra ranger les prix qui ont été proposés par l'utilisateur
var prices = [];

// Cette fonction vous permet de voir ce que l'utilisateur a saisi dans le champ input
// elle est appelée sur l'événement 'submit' c'est à dire, dès que l'utilisateur valide
// le formulaire.

function logPrice(value) {
  console.log('l\'utilisateur a saisi', value);
}

// concatenation
function submitAnswer() {
  // Ici on récupére la valeur du prix saisi par l'utilisateur
  var value = document.getElementById('price').value;
  console.log('value ', value);

  // CONSIGNE:
  // Écris le code, pour comparer la valeur saisie par l'utilisateur à la valeur
  // du prix à trouver et renvoie un message pour dire si c'est plus,
  // si c'est moins ou si l'utilisateur a trouvé !


  /* MON CODE EN DESSOUS */


  /* MON CODE AU DESSUS */

  // Ici on vide le champ input
  document.getElementById("price").value = "";

  // BONUS:
  // Ajoute les prix saisis par l'utilisateur pour pouvoir les afficher en dessous
  // afin qu'il sache quels prix il a déjà essayé
  prices.push(value);
  var ul = document.getElementById('prices')
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
}
