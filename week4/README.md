# Semaine 4 - CSS avancé

[Instructions pour les professeurs](./teachers.md)

# Préparation

- Si vous avez réussi la trame principale la semaine dernière, ouvrir le fichier `index.html` dans le dossier utilisé la dernière fois
- Sinon, ouvrir le fichier `index.html` dans le dossier `week4`

* Dans la barre des tâches utilisez `Fichier > Ouvrir un dossier`
* Rechercher le dossier que vous venez de créer et cliquer sur le dossier ci-dessus puis cliquer sur `Ouvrir`

# Les liens (ancres)

Il est temps de rendre cette page belle.

Dans le fichier `styles.css` dans la partie `BASE STYLE`

- Transformer tous les liens de la page en blanc.
- Penser à transformer leurs pseudo classes `:hover`, `:active` et `:visited`

## A savoir

- Utiliser les pseudo classes pour styliser les intéractions basiques. La pseudo-classe `:hover` permet de styliser un élément quand on passe la souris dessus. Ex : `img:hover { border: 1px black solid }` qui va ajouter une border quand on passe la souris sur l'image

## Vérification

Pour passer à l'étape suivante, regarder si les liens de la navigation et du footer sont blancs.

# Du bleu Konexio

Dans le fichier `styles.css` dans la partie `BASE STYLE`

- Surcharger les classes Bootstrap `bg-info` et `btn-info` et changer leur couleurs avec le bleu Konexio `#0475ba`

## A savoir

- Penser à regarder s'il n'y a pas le mot clé `!important` qui vous empêcherait de changer directement la classe

## Vérification

Pour passer à l'étape suivante, regarder si le bleu de la page a changé.

# Styliser les puces en pied de pages

Dans le fichier `styles.css` dans la partie `PIED DE PAGE`

- Créer le sélecteur qui cible les `ul` du pied de page
  - Utiliser la propriété `list-style` avec la valeur `none`
  - Changer la valeur de la marge pour aligner les liens du footer avec leur titre
  - Espacer les liens entre eux

## A savoir

- Pour espacer des éléments entre eux, les marges peuvent être utiles

## Vérification

Pour passer à l'étape suivante, regarder si les puces ont disparu.

# Entête responsive

En vous inspirant de la [documentation](https://getbootstrap.com/docs/4.1/layout/grid/#offsetting-columns) créer 3 breakpoints pour l'entête

## 1er breakpoint

Quand l'écran est le plus grand, le texte fait 2/3 de la page et le formulaire 1/3.

## 2ème breakpoint

Quand l'écran est moyen, le texte et la formulaire sont à la moitié

## 3ème breakpoint

Quand l'écran est petit, le texte tient sur une ligne entière et le formulaire passe à la ligne du dessous

## A savoir

- Dans Bootstrap,
  - le grand écran est défini par `lg` (large)
  - l'écran de taille moyenne est défini par `md` (medium)
  - le petit écran est défini par `xs` (extra small)

## Vérification

Pour passer à l'étape suivante, réduire la fenêtre et voir les 3 breakpoints s'effectuer sur la page.

# Section "étudiants" responsive

## 1er breakpoint

Quand l'écran est grand et moyen, mettre le texte et l'image à la moitié de l'écran

## 2ème breakpoint

Quand l'écran est petit, mettre l'image sur une ligne et le texte sur l'autre ligne

## Vérification

Pour passer à l'étape suivante, réduire la fenêtre et voir les 2 breakpoints s'effectuer sur la page.

# Section "bénévoles" responsive

## 1er breakpoint

Quand l'écran est grand et moyen, mettre le texte et l'image à la moitié de l'écran

## 2ème breakpoint

Quand l'écran est petit, mettre l'image sur une ligne et le texte sur l'autre ligne

## Vérification

Pour passer à l'étape suivante, réduire la fenêtre et voir les 2 breakpoints s'effectuer sur la page.

# Section "équipe" responsive

## 1er breakpoint

Quand l'écran est grand et moyen, l'équipe est présentée sur une ligne

## 2ème breakpoint

Quand l'écran est petit, chaque membre de l'équipe est sur une ligne

## Vérification

Pour passer à l'étape suivante, réduire la fenêtre et voir les 2 breakpoints s'effectuer sur la page.

# Galerie responsive

- Ajouter la classe `img-fluid` à toutes les images de la galerie.

## 1er breakpoint

Quand l'écran est large et moyen, la galerie est au centre

## 2ème breakpoint

Quand l'écran est petit, la galerie prend toute la largeur de l'écran

## Vérification

Pour passer à l'étape suivante, réduire la fenêtre et voir les 2 breakpoints s'effectuer sur la page.

# Navigation responsive

- Englober l'élément `ul` de la navigation avec une `div` de classes `collapse` et `navbar-collapse`

## Vérification

Pour passer à l'étape suivante, vérifier que les liens de la navigation disparaissent une fois l'écran réduit au plus petit

# Viewport

Pour que la page soit adaptée au mobile.

- Créer la balise `meta`
  - Avec l'attribut `name` de valeur `viewport`
  - Et l'attribut `content` de valeur `width=device-width, initial-scale=1, shrink-to-fit=no`

## Vérification

Pour passer à l'étape suivante, demander à un formateur de regarder le code. Le seul moyen de voir si ça a fonctionné, c'est de regarder sur un vrai téléphone.

# Les termes à retenir

## Responsive design

Avec l'émergence des smartphones et des tablettes tactiles, il existe un grand nombre de résolutions d'affichage, rendant parfois l'expérience utilisateur difficile. On appelle Responsive Design ou Responsive Web Design (littéralement conception web adaptive) la faculté d'un site web à s'adapter au terminal de lecture.

# Bonus

## Bonus #1 : Police d'écriture

Importer les polices `Airbnb-Cereal-Book` pour les textes et `Airbnb-Cereal-Bold` pour les titres

[https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
