/* EXERCICE 2 - PASSWORD METER */

// OBJECTIF:
// Cet exercice a pour but de vous faire utiliser les conditions
// avec if else et else if pour changer la couleur de l'input


// Cette fonction est attachée à un événement "oninput" ça veut dire qu'elle
// est appelée à chaque fois que l'utilisateur tape dans la balise input
function passwordMeter(value) {

  // Dans cette variable, on stocke la longueur du mot de passe...
  // Le mot de passe est une string, ainsi on peut accéder à la propriété .length
  // pour en connaître la longueur.
  var passwordLength = value.length;

  // Cette partie du code te permets de voir la longueur du mot de passe saisi par l'utilisateur
  // va voir dans la console du navigateur
  console.log('longeur du mot de passe: ', passwordLength);


  // CONSIGNE:
  // Écris le code pour changer la couleur de l'input en fonction de la
  // longueur du mot de passe en utilisant des conditions (if) et des comparateurs (<, >...)

  // Pour changer la couleur de fond de l'input, utilise le code ci-dessous:
  // document.getElementById('password-input').style.backgroundColor = 'red';

  // Souviens toi des règles
  // 0 à 4 => rouge
  // 4 à 8 => orange
  // 8 à 20 => vert

  /* MON CODE EN DESSOUS */


  /* MON CODE AU DESSUS */
}
