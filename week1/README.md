# Semaine 1 - HTML

[Instructions pour les professeurs](./teachers.md)

# Préparation

- Créer un dossier `<votre_nom>_<mois>_<année>` dans le dossier `digitous`

  - Si votre nom est `martin`, pendant la session du mois d' `octobre` en `2018` alors le dossier s'appelera `martin_oct_2018`

- Ouvrir votre éditeur de texte `VSCode`

  - Dans la barre de tâches utilisez `Fichier > Ouvrir un dossier`
  - Rechercher le dossier que vous venez de créer et cliquer sur `Ouvrir`

Votre dossier est vide et c'est normal. Vous allez créer une page à partir de rien.

# Structure de la page HTML

- Dans la barre des tâches de `VSCode` cliquer sur `Fichier > Nouveau fichier...` et nommer ce fichier `index.html`
- Cliquer sur le fichier dans la barre de gauche pour l'ouvrir
- Ecrire le doctype pour un fichier HTML5 sur la première ligne : `<!DOCTYPE html>`
- Sur la ligne suivante, écrire la balise `html` de la manière suivante :

<details>
    <summary>Solution</summary>

```html
<!DOCTYPE html>
<html>
</html>
```

</details>

La page HTML fonctionne comme des poupées russes. Il s'agit d'une suite de boîtes dans des boîtes.

- Ecrire dans l'élément `html` la balise `head`
- Après l'élément `head` mais toujours dans l'élément `html`, écrire la balise `body`
- Puis, dans l'élément `body` écrivez le texte : `Hello World!`

<details>
    <summary>👀 Solution</summary>

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        Hello World!
    </body>
</html>
```

</details>

- Enfin, enregistrer le fichier en allant dans la barre de tâches de `VSCode` et cliquer sur `Fichier > Enregistrer`

## 💡 A savoir

- Une balise s'écrit toujours avec son nom. Prenons l'exemple de la balise `html`. Elle a une forme ouverte `<html>` et une forme fermée `</html>`.
  Donc la balise `body` s'écrira : `<body></body>`

- A l'intérieur d'une balise, on peut mettre du texte ou une autre balise

## 🔎 Vérification

Avant de passer à l'étape suivante, faire un clic-droit sur le fichier dans la fenêtre Windows et `Ouvrir avec...` le logiciel `Chrome`

Si vous voyez une page blanche avec le texte `Hello World!` en haut à gauche, alors vous avez réussi. Garder la fenêtre ouverte, on va la réutiliser constamment.
Sinon, appeler un formateur.

# Remplir les métadonnées

Les informations dans l'élément `head` ne sont pas visibles dans la page mais servent pour Google ou le navigateur.

- Dans l'élément `head`, créer la balise `title` avec pour contenu le texte `Konexio`

<details>
    <summary>Solution</summary>

```html
...
<head>
    <title>Konexio</title>
</head>
...
```

</details>

- Enfin, enregistrer le fichier en allant dans la barre de tâches de `VSCode` et cliquer sur `Fichier > Enregistrer`

## Vérification

Avant de passer à l'étape suivante, rafraîchir la page du navigateur `Chrome` et regarder le titre de la tab changer en `Konexio`

Sinon, appeler un formateur.

# Bootstrap

Pour faciliter le travail du développeur, il existe des solutions qui aide à ordonner le code sans trop d'effort. C'est le cas de Bootstrap qui est un UI framework écrit en CSS.
En utilisant Bootstrap, on pourra utiliser et réutiliser les meilleures pratiques dans la création de site web.

Bootstrap est un fichier CSS différent du fichier HTML. Il faudra faire un lien pour inclure le fichier Bootstrap dans notre page HTML.

- Dans l'élément `head`

  - Créer une balise auto-fermante `link`
    - Créer l'attribut `rel` avec la valeur `stylesheet`
    - Créer l'attribut `href` avec la valeur `./css/bootstrap.min.css`

<details>
    <summary>Solution</summary>

```html
...
<head>
    <title>Konexio</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
</head>
...
```

</details>

## A savoir

- Une balise auto-fermante est une balise qui se ferme directement. Par exemple, la balise `img` est auto-fermante et s'écrit comme ça : `<img />`
- Les chemins des fichiers sont relatifs au fichier qui les appelle. Ici, le fichier Bootstrap se trouve dans le dossier `css` qui est adjacent au fichier `index.html`

## Vérification

Avant de passer à l'étape suivante, rafraîchir la page et regarder si le texte `Hello World!` à changer de police d'écriture.
Sinon, appeler un formateur.

# La section entête

La page va contenir différentes sections : l'entête, les apprenants, les bénévoles, les EPN (Espaces Public Numériques) et l'équipe.
Dans un premier temps, nous allons définir les éléments principaux de ces pages.

- Dans l'élément `body`, effacer le texte `Hello World!` dans l'élément `body`
- Toujours dans l'élément `body` créer une balise `section` avec l'attribut `id` de valeur `header`

  - Dans cet élément, créer une balise `div` avec l'attribut `class` de valeur `container`
    - Dans cet élément, créer une balise `div` avec l'attribut `class` de valeur `row`
      - Dans cet élément, créer une balise `div` avec l'attribut `class` de valeur `col-9`
        - Dans cet élément, créer une balise `h1` avec le texte `Konexio`
        - A la suite, créer une balise `p` avec le texte `Aide les réfugiés à s'intégrer grâce au numérique`

- Enfin, ajouter un commentaire `<!-- /section#header -->` juste après la balise fermante `</section>`

## A savoir

- On utilise l'attribut `id` pour un élément qui sera unique
- On utilise l'attribut `class` pour des éléments qui vont partager les mêmes

## Vérification

Avant de passer à l'étape suivante, rafraîchir la page et vérifier que votre texte s'affiche bien et qu'il a une marge à gauche.
Sinon, appeler un formateur.

# La section apprenants

- A la suite de la section de l'entête, créer la balise `section` avec l'attribut `id` de valeur `students` et l'attribut `class` de valeur `bg-primary`
  - Dans cet élément, créer une balise `div` avec l'attribut `class`de valeur `container`
    - Dans cet élément, créer une balise `div` avec l'attribut `class` de valeur `row`

/!\ Souvenez-vous comment on ajoute une balise à une autre et comment on enregistre un fichier car dorénavant, ces étapes seront omises

# Un peu de CSS

- Background image in the style attr

# Ce qu'il faut retenir

Avant d'écrire du code, voici les points de vocabulaire à connaître :

- les mots `balise` et `élément` sont équivalents en HTML.

## Balise

- quand on parle de : "balise `div`" alors on parle d'un élément HTML de nom `div` qui s'écrit en HTML : `<div>`. Vous devrez l'écrire dans votre code comme ci-suit : `<div></div>` car toute balise ouverte doit être fermée, comme une boîte.
- quand on parle de : "balise auto-fermante `img`" alors on parme d'un élément HTML de nom `img` qui s'écrit comme ça : `<img />`

## Attribut

- quand on parle de : "balise `div` avec l'attribut `class` de valeur `row`" alors vous devrez écrire `<div class="row"></div>`. Vous remarquerez que tous les attributs s'écrivent avec un `=""` et la valeur s'écrit entre les guillemets.

# Bonus

Vous avez tout fini ? Vous voulez un challenge de plus ?

## Bonus 1 : Favicon

## Bonus 2 : Meta charset

## Bonus 3 : Viewport
