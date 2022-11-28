// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var potentialSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";

  

  var islength = prompt("What is the length of the password?")

  if (islength > 128 ) {
    alert("Password must be between 8 to 128 characters")   
    return; 
  }
  if (islength < 8) {
  alert("Password must be between 8 to 128 characters")
  return;
  }

  console.log (isNaN(islength))
  if(isNaN(islength)){
    alert("Please use a number!")
    return;
  }


  var isUppercase = confirm("Would you like to use uppercase letters?")
  var isLowercase = confirm("Would you like to use lowercase letters?")
  var isSpecial = confirm("Would you like to use special characters?")
  var isNumber = confirm("Would you like to use numbers?")


 

  if (isUppercase) {
    console.log("uppercase");
    chooseFrom += upLetters;
  }

  if (isLowercase) {
    console.log("lowercase");
    chooseFrom += letters;
  }

  if (isSpecial) {
    console.log("special");
    chooseFrom += potentialSpecial;
  }

  if (isNumber) {
    console.log("number")
    chooseFrom += numbers
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
