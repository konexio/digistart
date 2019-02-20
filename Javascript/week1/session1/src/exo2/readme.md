# Exercice 2 : Modifier le style du body

## Notions traitées:
- Révision du css (comment inclure le fichier dans le html).

- Travailler avec les classes css dans le javascript.

- Utiliser un eventListener sur le bouton


## Description:
Dans cet exercice nous allons créer des boutons qui portent des noms de couleurs différentes, et nous allons faire en sorte de changer la couleur du body quand l'utilisateur click sur un des boutons.

## Instructions:
Vous avez dans ce dossier 3 fichiers:
- exo2.html
- exo2.js
- exo2.css

Au cours de cet exercice nous allons modifier ces trois fichiers en suivant les instructions suivantes :

1 - Dans la balise head du fichier html, ajouter une balise script pour inclure le fichier exo2.js. 
Et le fichier exo2.css.
```XML
<!-- Rappel: Pour inclure un fichier css -->
<link rel="stylesheet" type="text/css" href="index.css">
```

2 - Dans le fichier css ajouter deux classes “blue” et “red” qui ajoutent respectivement une couleur de fond bleue et rouge.

3 - Dans le fichier javascript, créer une fonction handleClick qui prend en entrée un nom de classe “className” et qui affecte cette classe au body, en utilisant 
```Javascript
document.body.className = className
```

4 - Dans le fichier html:

- Ajouter au bouton avec le texte rouge, l’attribut onclick avec la valeur “handleClick(‘red’)”
- Ajouter au bouton avec le texte bleu, l’attribut onclick avec la valeur “handleClick(blue)”

5 - Ouvrir la page html dans le navigateur, clicker sur les boutons, le body devrait changer de couleur.


## Partie 2: bonus
Faire la même chose mais pour modifier le style d’une div que vous ajoutez dans le document.

