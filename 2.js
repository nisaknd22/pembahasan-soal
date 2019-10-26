function is_name_valid(name) {
  var uppercaseRe = /^[A-Z] $/g; 
  if(name.minlength==3 && name.match(uppercaseRe).length == name.length)
  { 
    return true;
  }
    return false;
} 

function is_age_valid(age) {
  var numberRe = /^[0-9] {2} $/g;
  { 
    return true;
  }
    return false;
}

function is_username_valid(username) {
  
	var lowercaseRe = /^[a-z] $/g;

  var numberRe = /^[0-9] $/g;

  var specialRe = /^[_.] $/g;

  if(password.length == 8
     && lowercaseRe.test(username)
     && numberRe.test(username)
     && specialRe.test(username))
  {
     return true;
  }

  return false;
}

