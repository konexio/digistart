function handleClick() {
  // alert('On a cliqué'); // première démo avant de passer au reste
  var firstField = document.getElementById('first');
  var firstFieldValue = firstField.value;

  console.log(firstFieldValue);

  var secondField = document.getElementById('second');
  var secondFieldValue = secondField.value;

  console.log(secondFieldValue);

  var resultat = parseInt(firstFieldValue) + parseInt(secondFieldValue);
  alert(resultat);
}
