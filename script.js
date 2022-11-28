// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var potentialSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var upLetters = letters.toUpperCase();

  var isUppercase = confirm("Would you like to use uppercase")
  var isLowercase
  var isSpecial
  var isNumber

  if (isUppercase) {
    console.log("uppercase")
  }

  if (isLowercase) {
    console.log("lowercase")
  }

  if (isSpecial) {
console.log("special")
  }

  if (isNumber) {
    console.log("number")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
