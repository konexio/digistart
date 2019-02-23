function isValidNbr (nbr) {
  
  if (isNaN(nbr)) {
    return false
  }
  return true
}

function isValidEmail (email) {
  
  if (email === '') {
    return false
  }
  return true
}

function passwordEqual (psw, psw1) {
  
  if (psw !== psw1) {
    return false
  }
  return true
}

function validateForm(event) {

  event.preventDefault();
  
  var email = document.forms["myForm"]["email"].value;
  var nbr = document.forms["myForm"]["nbr"].value;
  var psw = document.forms["myForm"]["psw"].value;
  var psw1 = document.forms["myForm"]["psw1"].value;
  
  var validEmail = isValidEmail(email)
  var validNbr = isValidNbr(nbr)
  var validPasswor = passwordEqual(psw, psw1)
  
  if (validNbr === false) {
    alert("Ce n\'est pas nombre valide");
    return false;
  }
  
  if (validEmail === false) {
    alert("Email ne peut pas etre vide");
    return false;
  }
  
  if (validPasswor === false) {
    alert("Les deux mots de passe doivent etre identiques");
    return false;
  }
  
  alert("SUPER !!!😁😁😁😁😁😁😁😁");
  return true
  
}
