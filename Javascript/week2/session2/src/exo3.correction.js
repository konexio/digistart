/* EXERCICE 3 - LE JUSTE PRIX DU MERCATO */

var random = Math.random(0, 1) * 100;
var price = Math.floor(random);

var prices = [];

function logPrice(value) {
  console.log('l\'utilisateur doit trouver', price);
  console.log('l\'utilisateur a saisi', value);
}

function submitAnswer() {
  var value = document.getElementById('price').value;
  console.log('value ', value);

  if (value > price) {
    alert('Oh la la malheureux c\'est moins que ça, essaie encore');
  } else if (value < price) {
    alert('c\'est plus que ça quand même... c\'est Neymar les gars, essaie encore');
  } else {
    alert('T\'es trop fort, c\'est exactement ça... il t\'a fallu deviner ' + prices.length + ' fois avant de trouver quand même');
  }


  document.getElementById("price").value = "";
  prices.push(value);
  var ul = document.getElementById('prices')
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
}
