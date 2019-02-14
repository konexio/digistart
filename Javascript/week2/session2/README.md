# Session 2

Cours 1

Thèmes traités
Types de variables, types de données, comparateurs (===,>,<,!==...), opérateurs logiques (&&, || et ! ) et conditions (if, else, else if, switch)
Exercices (Code Pen)
Livecoding/Exemples
Intro types de données et types de variables.

console.log(lesBleus); // undefined
var vainqueur = null; // null
var nombreDeJoueurs = 11; // nombre => Number
var message = 'On est les champions !!!' // chaîne de caractères => String
var joueurs = ['Griezmann', 'Giroud', 'Mbappé', 'Pogba'] // tableau => type Object
var griezmann = {
 age: 27,
 matches: 22,
 buts: 10,
 titulaire: true,
 position: 'attaquant',
 equipes: ['Equipe de France', 'Athletico Madrid'],
}; // objet => Object

Application immédiate

....
Notions
Chaque type de données en Javascript a des propriétés différentes qui nous permettent de faire des opérations dessus. Certains types de données ont méthodes/fonctions qui leur sont propres.

Il est donc très utile de connaître le type d'une variable faire des opérations dessus.

Les principaux types de variables en JavaScript sont Number, String, Object et Boolean.

Rappel: on assigne une valeur à une variable en mettant un signe égal = entre le nom de la variable et sa valeur.



Number

Le type Number renvoie aux nombres, on peut faire des opérations mathématiques basiques avec des nombres.

var age = 25; // Number

Exemple

var num1 = 30;
var num2 = 12;
var result = num1 + num2; // Outputs: 42

Syntaxe

Les nombres n'ont pas de syntaxe particulière sauf peut-être que leurs décimales sont séparées par un point . 

Propriétés notables
Les nombres peuvent s'additionner, se multiplier, se diviser...

String

Le type String renvoie aux chaînes de caractères, c'est à dire du texte, contenu entre 2 guillemets, simples ou doubles (mais toujours assortis).

var maVariable = 'salut';
var monAutreVariable = "coucou";

Exemple

var message = "salut " + "les gens"; 
console.log(message); // Outputs: "salut les gens"

Syntaxe
Les chaînes de caractères sont écrites entre guillemets simples ' ' ou doubles " " mais assortis, c'est à dire que le guillemet ouvrant doit être du même type que le guillemet fermant.

/!\ Il faut échapper les apostrophes lorsque l'on écrit une string avec des guillemets simples.

Propriétés notables
Les chaînes de caractères peuvent se concaténer (ça veut dire qu'on peut les regrouper en les mettant l'une à la suite de l'autre en une nouvelle chaîne de caractères.
Pour aller plus loin
.length()


Object

Le type Object renvoie à deux types de variables en JavaScript: 
les tableaux ou "arrays"
les objets ou "objects"

Tableaux

Un tableau est une liste d'éléments ordonné, indexé à 0 et pouvant contenir n'importe quel type de données: nombre, chaîne de caractères, booléen, objet, tableau voire une référence à une autre variable.

Syntaxe

Les tableaux s'écrivent entre deux crochet [ ] et chaque élément est séparé par une virgule ,

Exemple

var monTableau = [1, "deux", maVariable, false, {prenom:'Simon', age: 30, prof: true}];


Dans un tableau, chaque élément a une position, qui lui est donnée par l'ordre dans lequel il est apparaît dans le tableau.

Propriétés notables

On dit que les tableaux sont indexés à zéro car la position de leur éléments démarre à zéro.

Par exemple ce tableau monTableau est constitué de 5 éléments indexés comme ceci:

0: 1
1: "deux"
2: maVariable
3: false
4: { prenom: 'Simon', age: 30, prof: true }

On a bien un tableau de 5 éléments et le premier élément, à l'index zéro (0).

Pourquoi c'est important?

Parce que les tableaux sont un type de variables qui ont des propriétés spécifiques.

Par exemple on peut accéder à un élément spécifique d'un tableau en spécifiant son index comme suit:


var monTableau = [1, "deux", maVariable, false, {prenom:'Simon', age: 30, prof: true}];

console.log(monTableau[0]) // Outputs 1
console.log(monTableau[1]) // Outputs "deux"

Les tableaux ont d'autres propriétés spécifiques qu'on abordera plus tard dans le programme.

Pour aller plus loin
.length()
.push()
.pop()
.slice()


Objets

Un objet est un type de données en Javascript qui permet de définir un élément en précisant ses caractéristiques. Ces caractéristiques sont appelées clés (keys) et elles ont une valeur (value).

Syntaxe

Les objets sont entourés par des accolades ouvrante et fermante { et }, ils sont composés de paires clé: valeur les clés sont des noms et les valeurs peuvent être n'importe quel type de variable.

Exemple

var personne = {
 age: 30,
 prenom: 'Simon',
 genre: 'homme',
 developpeur: true,
 passions: ['cinéma', 'code', 'musique'],
 enfants: null,
};




Propriétés Notables

On peut accéder aux valeurs des clés d'un objet:

console.log(personne.nom); // Outputs 'Simon'

On peut définir une assigner une nouvelle valeur aux clés d'un objet:

personne.age = 31;


On peut définir une nouvelle clé pour un objet existant et définir une valeur pour cette clé:

personne.taille = 171;


Boolean

Le type Boolean renvoie à un booléen. Un booléen est un opérateur logique qui permet d'évaluer quelque chose comme vrai ou faux. En JavaScript un booléen prend une valeur true ou false. 

Exemple

var konexioIsAwesome = true;
var learningIsBoring = false;


Syntaxe

Les booléens n'ont pas de guillemets ni aucune syntaxe particulière, ils n'y en a que 2 qui sont:

true qui renvoie à une déclaration vraie
false qui renvoie à une déclaration fausse

Propriétés notables

Les booléens répondent à des règles de logique ET, OU et PAS tel que suit:

vrai et faux ⇒ faux

vrai ou faux ⇒ vrai

vrai et vrai ⇒ vrai

faux et faux ⇒ faux

pas vrai ⇒ faux

Nous verrons ces notions dans les opérateurs logiques

var france = 4;
var croatie = 2;

if (france > croatie) {
 console.log('on est les champions !!!!!!!!!!!!!');
} else {
 console.log("On gagnera dans 4 ans.");
}

Les différents types de variables nous permettent de faire des choses différentes en fonction de leur type. Par exemple, on peut additionner des nombre, changer la casse des lettres sur des chaînes de caractères, faire des opérations sur un tableau, rajouter des propriétés à un objet.


Operateur typeof

Pour trouver à quel type de données appartient une variable en javascript,


var message = 'Hello world!';
console.log(typeof ); // Outputs String


Les opérateurs logiques

Les opérateurs logiques servent à obtenir le résultat de l'évaluation de deux booléens.

Comme mentionné avant, les booléens répondent à des règles de logiques que l'on a décrites avec les mots ET et OU.

Par exemple une assertion peut être vraie ou fausse.

Les opérateurs logiques permettent de faire des opérations sur les booléens.

En Javascript :
l'opérateur ET s'écrit &&
l'opérateur OU s'écrit ||
l'opérateur PAS s'écrit ! 

Ils sont très utiles pour écrire du code conditionnel, par exemple:

Si Simon est en retard OU s'il n'est pas là, alors il faut commencer le cours sans lui.

Si Simon est à là ET qu'il est à l'heure, alors il faut commencer le cours.

Ainsi on a:



true && false // false
true && true // true
true || false // false
false || false // false
!true // false

Les comparateurs

Les comparateurs servent à évaluer des variables entre elles.

Par exemple savoir si le Barça a battu le Real, si on stocke les scores dans des variables on peut les comparer.


var scoreBarca = 2;
var scoreReal = 0;

console.log(scoreBarca > scoreReal); // true

Le résultat d'une comparaison est un booléen, c'est à dire qu'il est soit vrai (true) soit faux (false).


Les opérateurs de comparaison sur les nombres sont >, <, >=, <=, ===, == et !==

A > B  ⇒ A supérieur à B
A < B  ⇒ A inférieur à B
A >= B  ⇒ A supérieur ou égal à B
A <= B  ⇒ A inférieur ou égal à B
A === B ⇒ A est égal à B (en tenant compte des types)
A == B ⇒ A est égal à B (sans tenir compte des types)
A !== B ⇒ A est différent de B

2 > 1  // true
2 < 1  // false
3 >= 3  // true
4 <= 4  // true
scoreReal === 0 // true

!!! Attention !!!

Un signe égal unique sert à assigner une valeur à une variable.

Un double signe égal sert à comparer deux valeurs sans tenir compte de leur type

Un triple signe égal sert à comparer deux valeurs en tenant compte de leur type


var scoreBarca = 2;

scoreBarca == 2; // true
scoreBarca == '2'; // true
scoreBarca === 2; // true
scoreBarca === '2'; // false

Le dernier est évalué à false car le nombre 2 n'est pas égal à la chaîne de caractères '2'


var scoreBarca = 2;
var scoreReal = 0;
scoreBarca === scoreReal // false

Les opérateurs de comparaison servent à évaluer des variables entre elles.

Les conditions avec if else et else if

Les conditions servent à indiquer à l'ordinateur ce qu'il faut faire en fonction des situations dans lesquelles on se trouve.

En utilisant les comparaisons et les conditions on peut alors prendre des décisions pour l'exécution du code.


var scoreBarca = 2;
var scoreReal = 0;

if (scoreBarca > scoreReal) {
 console.log('le Barça c\'est les meilleurs !!!')
} else {
 console.log('le Real c\'est les meilleurs !!!')
}



var scoreBarca = 2;
var scoreReal = 0;

if (scoreBarca > scoreReal) {
 console.log('le Barça c\'est les meilleurs !!!')
} else if (scoreBarca === scoreReal) {
 console.log('Oh la la match nul !!!')
} else {
 console.log('le Real c\'est les meilleurs !!!')
}





Ressources externes sur le sujet (ex: lien W3School)
Les types de données
https://www.w3schools.com/js/js_datatypes.asp

Trouver le type d'une variable
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof

Changer une propriété de style d'un élément HTML en JS
https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp


Exercices
https://codepen.io/simongodefroid/pen/NoYdgq?editors=1010


Exercice 1

Nom
Changer les couleur du body
Description
Petit exercice pour mettre en pratique les if statements
Thèmes traités
Les conditions avec if et l'opérateur de comparaison ===
Durée
10 minutes
Lien
Cf supra

Exercice 2

Nom
Le juste prix du mercato
Description
Petit jeu pour deviner à combien de millions Neimar va être racheté
Thèmes traités
Les conditions avec if, else, else if et les opérateurs de comparaison > < ===
Durée
20 minutes
Lien
Cf supra

Exercice 3

Nom
Password meter
Description
Petit exercice pour changer la couleur de l'input en fonction de la longueur du mot de passe
Thèmes traités
Les conditions if, else, else if, 
Durée
30 min
Lien
Cf supra


Remarques:
Mettre dans le cursus les types de variables avant les types de données sinon c'est super confusant pour les apprenants…

Je ne vois pas trop le use case du typeof dans le cadre de ce qu'on leur apprend alors je skiperai volontiers la partie Data types mais m'étendrai davantage sur les types de variables.

Dans chaque exercice je leur fournirais tous les éléments de sélecteurs du DOM et aussi du HTML afin qu'ils ne se concentrent que sur les conditions…

Avant de leur faire manipuler le dom faire en sorte qu'ils comprennent déjà le code JS pur e.g. un if statement avec des types de variables différents et des console.log




