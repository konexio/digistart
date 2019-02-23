
### Exrcice 2
Dans cet exercice vous allez devoir créer votre première calculatrice
qui pourra additionner, soustraire, multiplier et diviser des nombres entiers.
Pour ce faire, vous aurez besoin d’une fonction par type d’opération et une fonction pour afficher ce résultat.
Pour vous aider à débuter, vous pouvez suivre l’exemple ci-joint: (lien git)

#### index.js
```
 function add() {
    var total = 0
    var Sufix = document.getElementById('PrefixAdd').value
    var prefix = document.getElementById('SufixAdd').value
    var resId = 'addRes'

    total = parseInt(Sufix, 10) + parseInt(prefix, 10)

    return displayRes(resId, total)
  }

  // function sub() {
  //   ...
  // }
  // function mul() {
  //   ...
  // }
  // function div() {
  //   ...
  // }

  function displayRes(resId, total) {
    var element = document.getElementById(resId)

    element.innerHTML  = total
    return
  }

```
#### index.html
```
<html>
  <head>
    <meta charset="utf-8">
    <title>Event in js</title>
  </head>
  <body>


    <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
      <div style=" isplay: flex; flex-direction: colomun; justify-content: space-between;border-style: dotted; width: 250px; padding: 10">
        <input type="number" id='PrefixAdd'/>
        <strong>+</strong>
        <input id='SufixAdd'/>
        <button onclick="add()">ADD</button>
        <h4>Le resultat de mon addtion</h4>
        <p id='addRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixSub'/>
        <strong>-</strong>
        <input id='SufixSub'/>
        <button onclick="sub()">SUB</button>
        <h4>Le resultat de ma soustraction</h4>
        <p id='subRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixMul'/>
        <strong>*</strong>
        <input id='SufixMul'/>
        <button onclick="mul()">MUL</button>
        <h4>Le resultat de ma multiplication</h4>
        <p id='mulRes'>0</p>
      </div>

      <div style="border-style: dotted; width: 250px; padding: 10">
        <input id='PrefixDiv'/>
        <strong>/</strong>
        <input id='SufixDiv'/>
        <button onclick="div()">DIV</button>
        <h4>Le resultat de ma division</h4>
        <p id='divRes'>0</p>
      </div>
    </div>
  <script src=”index.js”></script>
  </body>
</html>

```
