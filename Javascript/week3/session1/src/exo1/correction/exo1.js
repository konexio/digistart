// TODO: Écrire la fonction "afficherListeTriee" qui va afficher une liste des demi-finalistes de la coupe du monde 2018 triee par ordre alphabetique
function afficherListeTriee()
{
    // A l'interieur de la fonction:
    // Initialiser un tableau de 4 equipes: "France", "Angleterre", "Belgique", "Croatie"
  var equipes = ["France", "Angleterre", "Belgique", "Croatie"];
  // Stocker dans une variable le nombre d'elements dans le tableau avec la propriete length
  var nombreEquipes = equipes.length;

  // Trier les donnees alphabetiquement avec la methode sort()
  equipes.sort();

  // Stocker le code HTML necessaire pour afficher la liste des equipes avec une boucle for dans une variable "texte"
  // Vous pouvez utiliser les balises html <ul> et <li> pour afficher une liste de bullet points
  var text = "<ul>";
  var i;
  for (i = 0; i < nombreEquipes; i++) {
    text += "<li>" + equipes[i] + "</li>";
  }
  text += "</ul>";

  // Utiliser getElementById pour injecter le contenu de la variable "texte" dans la balise <p id="liste">
  document.getElementById("liste").innerHTML = text;
}
