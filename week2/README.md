# Semaine 2 - Bootstrap

[Instructions pour les professeurs](./teachers.md)

# Préparation

- Si vous avez réussi la trame principale la semaine dernière, ouvrir le fichier `index.html` dans le dossier `week1`
- Sinon, ouvrir le fichier `index.html` dans le dossier `week2`

* Dans la barre de tâches utilisez `Fichier > Ouvrir un dossier`
* Rechercher le dossier que vous venez de créer et cliquer sur le dossier ci-dessus puis cliquer sur `Ouvrir`

# Attention

Pendant toutes les étapes de cette semaine, penser à rafraîchir la page à chaque fois que vous ajouter une classe. Cela permettra de comprendre comment une classe modifie votre élément.

# Introduction

Pour faciliter le travail du développeur, il existe des solutions qui aide à ordonner le code sans trop d'effort. C'est le cas de Bootstrap qui est un UI framework écrit en CSS.
En utilisant Bootstrap, on pourra utiliser et réutiliser les meilleures pratiques dans la création de site web.

Bootstrap est un fichier CSS différent du fichier HTML. Il faudra faire un lien pour inclure le fichier Bootstrap dans notre page HTML.

Dans l'élément `head`

- Créer une balise auto-fermante `link`
  - Créer l'attribut `rel` avec la valeur `stylesheet`
  - Créer l'attribut `href` avec le chemin relatif du fichier qui s'appelle `bootstrap.min.css` dans le dossier `css`

## A savoir

- Une balise auto-fermante est une balise qui se ferme directement. Par exemple, la balise `img` est auto-fermante et s'écrit comme ça : `<img />`
- Les chemins des fichiers sont relatifs au fichier qui les appelle. Ici, le fichier Bootstrap se trouve dans le dossier `css` qui est adjacent au fichier `index.html`

## Vérification

Avant de passer à l'étape suivante, rafraîchir la page et regarder si les textes ont changé de police d'écriture.
Sinon, appeler un formateur.

# Habillage

Parfait ! Bootstrap est inclus dans la page, maintenant on va rajouter un peu de couleurs à notre page.

- Rajouter la classe `bg-info` aux éléments suivants :
  - l'élément `nav` (pour trouver l'élément, faire `ctrl+f` et taper `<nav>`)
  - la section avec l'`id` `students` (faire `ctrl+f` et taper `id="students"`)
  - la section avec l'`id` `gallery` (faire `ctrl+f` et taper `id="gallery"`)
  - l'élément `footer` (faire `ctrl+f` et taper `<footer>`)

## A savoir

- Quand on cherche un élément et que la page devient longue, penser à utiliser la fonction de recherche `ctrl+f`

## Vérification

Avant de passer à l'étape suivante, regarder si les éléments changés ont un fond bleu ciel.

# Bootstrapiser la navigation

Bootstrap est rempli de règles CSS pour rendre la page plus belle. Ici, on va se concentrer sur la navigation.

Dans l'élément `nav`

- Ajouter les classes `navbar`, `navbar-expand-lg`
- Dans l'ancre qui contient le titre `Konexio`, ajouter la classe `navbar-brand`
- Dans l'élément `ul`, ajouter la classe `navbar-nav`
  - Sur chaque élément `a`, ajouter la classe `nav-link`

## A savoir

- L'attribut `class` peut contenir plusieurs classes séparés par des espaces. Par exemple si on a un élément `<div class="header"></div>` et que l'on veut lui rajouter une classe, alors on écrira `<div class="header menu"></div>`

## Vérification

Avant de passer à l'étape suivante, regarder si le titre est en gras et que les liens du menu sont espacés.

# Structurer l'entête

Dans l'élément `section` avec l'id `header`

- Ajouter une balise `div` qui va englober les éléments `h1` et `p`
  - Sur cet élément, ajouter la classe `col-9`
- Ajouter la classe `col-3` sur l'élément `aside`

## A savoir

- La classe `row` que l'on a beaucoup écrit la semaine dernière est une classe Bootstrap qui définit une ligne. Une ligne contient 12 colonnes. Donc pour faire une ligne, ajouter des classes qui font un total de 12. Par exemple
  - 2 éléments avec les classes `col-6`
  - 3 éléments avec les classes `col-4`
  - etc...

## Vérification

Avant de passer à l'étape suivante, regarder si les titres `Konexio` et `Programme Digistart` sont dans deux colonnes séparés et que le formulaire soit dans le coin droit.

# Structurer la section "étudiants"

Dans l'élément `section` d'id `students`

- Englober l'image avec une balise `div` de classe `col-6`
- Sur l'image, ajouter la classe `img-fluid`
- Englober le paragraphe et le bouton avec une balise `div` de classe `col-6`
- Sur le bouton, ajouter les classes `btn` et `btn-outline-light`

## A savoir

- La classe `img-fluid` qui s'applique aux images permette que celle ci prenne tout l'espace dans la colonne où elle se trouve

## Vérification

Avant de passer à l'étape suivante, regarder si l'image et le texte sont sur deux colonnes différentes.

# Stucturer la section "bénévoles"

Dans l'élément `section` d'id `volunteers`

- Englober le paragraphe et le bouton avec une balise `div` de classe `col-6`
- Ajouter au bouton les classes `btn` et `btn-outline-dark`
- Englober l'image d'une balise `div` de classe `col-6`
- Ajouter la classe `img-fluid` à l'image

## Vérification

Avant de passer à l'étape suivante, regarder que l'image et le texte sont sur deux colonnes différentes.

# Structurer la galerie

Dans l'élément `section` d'id `gallery`

- Englober les images dans une balise `div` de classes `col-4` et `offset-4`

## A savoir

- Les classes `offset-n` où `n` est un nombre entre 1 et 12 sont des classes pour mettre un espace à gauche entre 2 colonnes.

# Structurer la section "équipe"

Dans l'élément `section` d'id `team`

- Englober la balise `h2` avec une balise `div` de classe `col-12`
- Ajouter une classe `col-4` à toutes les `div` de classe `team-member`

## Vérification

Avant de passer à l'étape suivante, regarder si les images sont sur la même ligne.

# Structurer le pied de page

Dans l'élément `footer`

- Ajouter les classes `col-6` aux éléments `div` de classe `footer-list`

## Vérification

Avant de passer à l'étape suivante, regarder si les textes sont sur deux colonnes différentes.

# Les icônes

Dans l'élément `head`

- Créer une balise auto-fermante `link`

  - Créer l'attribut `rel` avec la valeur `stylesheet`
  - Créer l'attribut `href` avec le chemin relatif du fichier qui s'appelle `all.min.css` dans le dossier `css`

- Dans les ancres, ajouter des balises `i` avec la classe `fab`
  - Et pour chaque lien correspondant, ajouter la classe `fa-instagram`, `fa-twitter` et `fa-facebook`

## Vérification

Avant de finir la semaine, regarder si les icônes apparaissent.
Sinon, appeler un formateur.

# Bonus

# Bonus #1 : Bouton de login

Ajouter un bouton de login sur la droite dans la barre de navigation. Pour y arriver, utiliser la documentation bootstrap [https://getbootstrap.com/docs/4.1/components/navbar/#forms](https://getbootstrap.com/docs/4.1/components/navbar/#forms)
