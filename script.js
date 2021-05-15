// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){
  var passwordLength = prompt("How long do you want your password to be? (8-128)");
  passwordLength = parseInt(passwordLength)
  var confirmUpper = confirm("Do you want uppercase letters?");
  var confirmLower = confirm("Do you want lowercase letters?");
  var confirmSpecial = confirm("Do you want special characters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var userChoice = [];
  //Letters
  var lowerCase = "abcedfghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //Numbers
  var numbers = "0123456789".split("");
  // Special Characters
  var special = "!@#$%^&*=+_-?".split("");
  if(confirmUpper){
    userChoice=userChoice.concat(upperCase)
  }
  if(confirmLower){
    userChoice=userChoice.concat(lowerCase)
  }
  if(confirmSpecial){
    userChoice=userChoice.concat(special)
  }
  if(confirmNumbers){
    userChoice=userChoice.concat(numbers)
  }

var password = ""
  for (let i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*userChoice.length)
  password += userChoice[randomIndex]
}
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
