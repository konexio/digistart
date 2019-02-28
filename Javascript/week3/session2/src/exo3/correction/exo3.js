// TODO: Écrire la fonction "calculerSomme" qui va calculer la somme des nombres d’un tableau
function calculerSomme()
{
  // A l'interieur de la fonction:
  // Initialiser un tableau de 4 nombres
  var nombres = [143, 18, 30, 54];
  // Initialiser une variable, compteur d'indice de tableau a 0.
  var i = 0;
  // Initialiser une variable avec la somme des nombres a 0.
  // Ecrire la boucle while qui va faire la somme des nombres dans le tableau
  // et additionner les nombres dans la variable precedemment initialisee a 0.
  // En utilisant getElementById, injecter le contenu de la somme dans la balise <p id="somme-resultat">
  var somme = 0;
  while (i < nombres.length)
  {
    somme = somme + nombres[i];
    i++;
  }
  document.getElementById("somme-resultat").innerHTML = somme;
}


