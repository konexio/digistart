/* Exercice 2 - Indicateur de longueur d'un mot de passe */

function passwordMeter(value) {
  console.log('longueur du mot de passe: ', value.length);
  var passwordLength = value.length;
  if (passwordLength < 4) {
    document.getElementById('password-input').style.backgroundColor = 'red';
  }
  if (passwordLength < 8 && passwordLength >= 4) {
    document.getElementById('password-input').style.backgroundColor = 'orange';
  }
  if (passwordLength >= 8) {
    document.getElementById('password-input').style.backgroundColor = 'green';
  }
  if (passwordLength === 0) {
    document.getElementById('password-input').style.backgroundColor = '';
  }
}
