// Assignment code here
var abcLow = "abcdefghijklmnopqrstuvwxyz";
var abcUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()-_=+{[}]|<>?";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(
    prompt("Choose a password length between 8 and 128 characters")
  );
  
  if (isNaN(passwordLength) === true) {
    alert("Password length must be a number");
  }

  if (passwordLength < 8) {
    alert ("Password length must be at least 8 characters!");
    return;
  }

  if (passwordLength > 128) {
    alert ("Password length must be 128 characters maximum!");
    return;
  }


  var pass = ""

  var passUp = confirm("Would you like uppercase letters?");
    if (passUp) {
      pass = pass + abcUp;
    }

  var passLow = confirm("Would you like lowercase letters?");
    if (passLow) {
      pass = pass + abcLow;
    }

  var passSym = confirm("Would you like symbols in your password?");
    if (passSym) {
      pass = pass + symbols;
    }
  
  var passNum = confirm ("Would you like numbers?")
    if (passNum) {
      pass = pass + numbers;
    }

  var password = "";
    for (var i= 0; i < passwordLength; i++) {
      password += pass[Math.floor(Math.random() * pass.length)];
    }

    return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
