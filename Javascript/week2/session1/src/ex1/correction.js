/* Exercice 1 - Change la couleur de fond du body */

function selectChange() {
  var color = document.getElementById('colors').value;


  // SOLUTION AVEC ELSE IF ET ELSE
  if (color === 'bleu') {
    document.body.style.backgroundColor = 'blue';
  } else if (color === 'vert') {
    document.body.style.backgroundColor = 'green';
  } else if (color === 'rouge') {
    document.body.style.backgroundColor = 'red';
  } else {
    document.body.style.backgroundColor = '';
  }

  // // SOLUTION AVEC IF UNIQUEMENT
  // if (color === 'bleu') {
  //   document.body.style.backgroundColor = 'blue';
  // }
  // if (color === 'vert') {
  //   document.body.style.backgroundColor = 'green';
  // }
  // if (color === 'rouge') {
  //   document.body.style.backgroundColor = 'red';
  // }
  // if (color === '') {
  //   document.body.style.backgroundColor = '';
  // }


  // La solution sans les if... mais ce n'est pas le but de l'exo
  // var color = document.getElementById('colors').value;
  // document.body.style.backgroundColor = color;
};
