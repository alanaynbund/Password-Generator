// Assignment code here
var abcLow = "abcdefghijklmnopqrstuvwxyz";
var abcUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var symbols = "!@#$%^&*()-_=+{[}]|<>?";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = parseInt(
    prompt("Choose a password length between 8 and 128 characters")
  );
  
  if (isNaN(passLength) === true) {
    alert("Password length must be a number");
    return;
  }

  if (passLength < 8) {
    alert ("Password length must be at least 8 characters!");
    return;
  }

  var pass = ""

  var passUp = confirm("Would you like uppercase letters");
    if (passUp) {
      pass= pass + abcUp;
      console.log(pass);
    }
}



// Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
