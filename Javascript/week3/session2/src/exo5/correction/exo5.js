// TODO: Completer la fonction afficherTableMultiplication pour initialiser un tableau a deux dimensions et remplir
// une table de multiplication
function afficherTableMultiplication()
{
  // Recuperer le nombre de lignes dans une variable du champ HTML lignes
  var lignes = document.getElementById("lignes").value;
  // Recuperer le nombre de colonnes dans une variable du champ HTML colonnes
  var colonnes = document.getElementById("colonnes").value;
  // Initialiser un tableau vide qu'on appeler matrice, un tableau a deux dimensions
  var matrice = [];
  // Creer la table de multiplication en parcourant les lignes
  for(i = 1; i <= lignes; i++)
  {
    // Dans la boucle des lignes, initialiser la ligne en creant un tableau pour stocker les valeurs de colonnes de la ligne
    matrice[i] = [];
    // Parcourir les colonnes et stocker la multiplication correspondant a cette ligne et cette colonne
    for(j = 1; j <= colonnes; j++)
    {
      matrice[i][j] = i * j;
    }
  }
  // Appeler la fonction afficherMatrice qui affiche le tableau a deux dimensions dans l'HTML
  afficherMatrice(matrice);
};

// Fonction afficherMatrice qui affiche le tableau a deux dimensions dans l'HTML
function afficherMatrice(matrice)
{
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
  for(i = 1; i < matrice.length; i++)
  {
    output = output + "<tr>";
    for(j = 1; j < matrice[i].length; j++)
    {
      output = output + "<td>" + matrice[i][j] + "</td>";
    }
    output = output + "</tr>";
  }
  output = output + "</table>";
  document.getElementById("table-multiplication-resultat").innerHTML = output;
}


