# Semaine 3 - CSS

[Instructions pour les professeurs](./teachers.md)

# Préparation

- Si vous avez réussi la trame principale la semaine dernière, ouvrir le fichier `index.html` dans le dossier utilisé la dernière fois
- Sinon, ouvrir le fichier `index.html` dans le dossier `week3`

* Dans la barre des tâches utilisez `Fichier > Ouvrir un dossier`
* Rechercher le dossier que vous venez de créer et cliquer sur le dossier ci-dessus puis cliquer sur `Ouvrir`

# Attention

Pour les 3 premières étapes, on va faire un mini exercice que l'on va effacer après-coup.

# Mini exercice

Il y a 3 manières de faire du CSS : avec une feuille de style séparée, de manière embarquée ou encore inline.
Pour cet exercice, on va ajouter du style au formulaire.

## Feuille de style séparée

- Créer un fichier `styles.css` dans le dossier `css`
- Dans ce fichier, créer le sélecteur `form`
  - Dans ce sélecteur, mettre les propriétés
    - `border-color` avec la valeur `black`
    - `border-width` avec la valeur `1px`
    - `border-style` avec la valeur `solid`

* Créer une balise `link` dans l'élément `head`
  - Dans cet élément, ajouter l'attribut `rel` avec la valeur `stylesheet`
  - Ajouter l'attribut `href` avec la valeur relative du fichier que vous venez de créer

- Rafraîchir la page et regarder si le formulaire a une bordure noire.

* A la suite, créer un nouveau sélecteur `form`
  - Avec la propriété `border-color`
  - Et la valeur `purple`

### A savoir

- Pour créer un fichier dans `VSCode`, utiliser la barre des tâches `Fichier > Nouveau fichier`
- Les propriétés `border-*` ont un raccourci : `border: 1px black solid`;
- Voici un exemple de la cascade du CSS, quand on utilise la même propriété avec le même sélecteur, c'est celui qui se retrouve le plus bas de la `cascade` qui sera appliqué.

### Vérification

Pour passer à l'étape suivante, regarder si le formulaire a une bordure violette.

## Style embarqué

Dans l'élément `head`

- Créer la balise `style`
  - Avec le selecteur `form`
  - La propriété `border-style`
  - Et la valeur `dashed`

### A savoir

- La balise `style` accepte du CSS
- Le principe de cascade continue à s'appliquer car la balise `style` est après le fichier CSS.

### Vérification

Pour passer à l'étape suivante, regarder si le formulaire a une bordure en pointillée

## Inline style

Dans l'élément `form` de l'entête

- Ajouter une balise `style` avec la valeur `border-width: 3px;`

### A savoir

- Le style dans l'attribut n'a pas besoin de sélecteur puisqu'on est déjà dans l'élément ciblé.
- Si vous rajoutez le mot clé `!important` sur le sélecteur `form` et la propriété `border-width` dans le fichier CSS (`border-width: 1px !important;`), alors le formulaire aura une bordure de `1px` malgré la cascade. Le mot clé `!important` permet de casser le principe de la cascade. Il est important de connaître ce principe, mais déconseillé de l'utiliser quand on débute.

### Vérification

Pour passer à l'étape suivante, regarder si la bordure du formulaire est plus grosse.

# Attention

Le mini exercice est terminé, effacer tout ce qui a été écrit, mais garder le fichier `styles.css` et la balise `link` qui importe ce même fichier.

Pour la suite des exercices, penser à enregistrer et rafraîchir la page à chaque fois que vous rajoutez une propriété pour comprendre exactement ce qu'elles font.

# Marges intérieures

On va créer des marges pour espacer chaque section.

Dans le fichier `styles.css`

- Ecrire un commentaire avec le texte `BASE STYLE`
- Ajouter un sélecteur `section`
  - Avec la propriété `padding-top` avec la valeur `40px`
  - et avec la propriété `padding-bottom` avec la valeur `40px`

## A savoir

- Un commentaire en CSS s'écrit : `/** commentaire **/`
- Pour les propriétés `padding-*` il y a le raccourci `padding` qui attend 4 valeurs qui dans l'ordre sont le `top`, `right`, `bottom`, `left`
- Il y a aussi les propriétés `margin-*` et `margin` pour les marges extérieures

## Vérification

Pour passer à l'étape suivante, regarder si les sections sont espacées entres elles.

# Styliser le fond de l'entête

Dans le fichier `styles.css`

- Ajouter un commentaire avec le texte `HEADER`
- Créer un sélecteur qui appelle l'`id` `header`
  - Ajouter la propriété `background-image` qui appelle l'image `img/header.jpg`
  - Ajouter la propriété `background-color` de couleur noire.

## A savoir

- Les chemins sont relatifs au fichier CSS. Pour remonter d'un niveau on utilise `../` au lieu d'un `./`
- Appeler une image en CSS se fait avec le mot clé `url()`. Voici un exemple `background-image: url(./image.jpg)`
- Il y a un raccourci pour les propriétés `background-*` qui est `background`

## Vérification

Pour passer à l'étape suivante, regarder si il y a une image de montagne dans le header.

# Styliser l'entête

Dans le fichier `styles.css`

- Toujours dans le même sélecteur

  - Ajouter la propriété `min-height` avec une valeur de 700 pixels.
  - Ajouter la propriété `color` avec la couleur blanche.
  - Ajouter la valeur `padding-top` à 160 pixels.

- Créer le sélecteur du titre `p` qui est dans l'entête
  - Ajouter la propriété `font-size` de valeur `2em`

Dans le fichier `index.html`

- Ajouter la classe `fixed-top` à l'élément `nav`

## A savoir

- La classe Bootstrap `fixed-top` fixe la navigation en haut de page, vous pouvez scroller pour voir l'effet

## Vérification

Pour passer à l'étape suivante, regarder si la couleur du texte est blanche.

# Styliser le formulaire

Dans le fichier `styles.css`

- Créer le sélecteur pour le formulaire
  - Ajouter un fond blanc au formulaire
  - Changer le texte en couleur noire
  - Ajouter un padding
    - en haut et en bas de 40 pixels,
    - à gauche et à droite de 30 pixels
  - Ajouter la propriété `border-radius` avec une valeur de 10 pixels

Dans le fichier `index.html`

- Ajouter la classe `custom-select` au `select` du formulaire
- Ajouter les classes `btn` et `btn-info` au bouton du formulaire

Dans le fichier `styles.css`

- Créer le sélecteur pour le bouton et ajouter une marge en haut de 10 pixels

## Vérification

Pour passer à l'étape suivante, regarder si le formulaire est sur fond blanc, que tous les éléments sont espacés.

# Styliser la section "étudiants"

Dans le fichier `styles.css`

- Ajouter le commentaire `SECTIONS`
- Créer un sélecteur pour le texte
  - Changer la couleur en blanc
  - Ajouter une margin intérieur de 100 pixels en haut
- Créer un sélecteur pour l'image
  - Ajouter la propriété pour arrondir les bords de 5 pixels

## Vérification

Pour passer à l'étape suivante, regarder si l'image a des bords arrondis et que le texte est en blanc.

# Styliser la section "bénévoles"

- Créer un sélecteur pour le texte
  - Changer la couleur en blanc
  - Ajouter une margin intérieur de 100 pixels en haut
- Créer un sélecteur pour l'image
  - Ajouter la propriété pour arrondir les bords de 5 pixels

## A savoir

- Plusieurs sélecteurs peuvent partager les mêmes propriétés en les séparant par une virgule :

```css
div,
section {
  padding: 10px;
}
```

Cela peut vous aider pour unir le style des sections "étudiants" et "bénévoles".

## Vérification

Pour passer à l'étape suivante, regarder si l'image a des bords arrondis et que le texte est en noir.

# Styliser les membres de l'équipe

Dans le fichier `styles.css`

- Ajouter le commentaire `TEAM`
- Regarder dans l'HTML la classe qui est partagée entre les 3 éléménts qui contiennent les infos de l'équipe et créer un sélecteur avec
  - Ajouter la propriété `text-align` avec la valeur `center`

* Sur les images des membres de l'équipe, créer un sélecteur et
  - Ajouter les propriétés `height` et `width` de valeur 100 pixels
  - Ajouter les bordures arrondies avec une valeur de 50 pixels
  - Ajouter une marge en bas de 15 pixels

- Sur l'élément qui contient le métier des membres
  - Changer la couleur en `#0475ba`

## Vérification

Pour passer à l'étape suivante, regarder si les images sont rondes et que la fonction des membres est en bleu

# Styliser le pied de page

Dans le fichier `styles.css`

- Ajouter le commentaire `PIED DE PAGE`
- Ajouter un sélecteur `footer`
  - Avec la propriété `padding-top` avec la valeur `60px`
  - et la propriété `padding-bottom` avec la valeur `60px`

## Vérification

Pour passer à l'étape suivante, regarder si le pied de page a de l'espace en haut et en bas.

# Bonus

# Bonus #1 : Box shadow

Ajouter des box shadow sur la barre de navigation et les images de la page [https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
