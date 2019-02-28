// TODO: Écrire la fonction "chercherEquipe" qui va chercher si une équipe est parmi les demi-finalistes de la coupe du monde 2018
function chercherEquipe()
{
  // A l'interieur de la fonction:
  // Initialiser un tableau de 4 equipes: "France", "Angleterre", "Belgique", "Croatie"
  var equipes = ["France", "Angleterre", "Belgique", "Croatie"];
  // Recuperer la valeur entrée en input dans la champ "equipe" avec getElementById
  var equipe = document.getElementById("equipe").value;
  // Stocker dans une variable le nombre d'elements dans le tableau avec la propriete length
  var nombreEquipes = equipes.length;
  // Ecrire la boucle for qui va regarder si la valeur entrée en input est egale a un des elements du tableau
  // Afficher "Demi-finaliste" si cette equipe est trouvée ou "Non trouve" sinon, en utilisant getElementById
  // pour injecter le contenu du resultat dans la balise <p id="chercher-resultat">
  // Arreter de chercher si cette valeur est trouvée au cours du parcours du tableau.
  document.getElementById("chercher-resultat").innerHTML = "Non trouve"; // par defaut
  var i;
  for (i = 0; i < nombreEquipes; i++) 
  {
  	if (equipes[i] === equipe)
    {
    	document.getElementById("chercher-resultat").innerHTML = "Demi-finaliste";
        break;
    }
  }  
}


