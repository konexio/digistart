// TODO: Afficher des alertes pour saluer chaque apprenant.
function saluer()
{
  // A l'interieur de la fonction:
  // Initialiser une variable avec la liste des prenoms des apprenants
  var apprenants = ["Modric", "Ronaldo", "Salah"];
  // Ecrire la boucle for qui va afficher une alerte pour chaque apprenant et dire "Salut " suivi du prenom de l'apprenant.
  var i;
  for (i = 0; i < apprenants.length; i++) 
  {
    alert("Salut " + apprenants[i] + " !!");
  }
}


