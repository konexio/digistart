 function add() {
    var total = 0
    var Sufix = document.getElementById('PrefixAdd').value
    var prefix = document.getElementById('SufixAdd').value
    var resId = 'addRes'

    total = parseInt(Sufix, 10) + parseInt(prefix, 10)

    return displayRes(resId, total)
  }

  /* 
  function sub() {
     ...
   }
   function mul() {
     ...
   }
   function div() {
     ...
   } 
   */

  function displayRes(resId, total) {
    var element = document.getElementById(resId)

    element.innerHTML  = total
    return
  }
