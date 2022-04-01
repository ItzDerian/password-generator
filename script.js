// Assignment Code
var generateBtn = document.querySelector("#generate");

var usableChars = "";
var passwordLength = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%^&*()_+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  //Update 1 :Realised we need to reset the value of password every time this function begins... oops

  //Update 2 : This fixed the issue
  password = "";

  var passwordLength = prompt("Choose a password length between 8 & 128 !!This must be a number!!");
  Number(passwordLength); 

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Error! You must choose a number between 8 & 128!");
    generatePassword();
    console.log()
  } else {
    passwordCriteria();
  }
  
  var useUpper = confirm("Would you like your password to include uppercase letters?")
  if (useUpper) {
    usableChars += upperCase;
  }

  var useLower = confirm("Would you like your password to include lowercase letters?")
  if (useLower) {
    usableChars += lowerCase;
  }

  var useNumber = confirm("Would you like your password to include numbers?")
  if (useNumber) {
    usableChars += number;
  }

  var useSpecial = confirm("Would you like your password to include special characters?")
  if (useSpecial) {
    usableChars += special;
  }
  console.log(usableChars.length);
  if (usableChars.length = 0) {
    alert("You must select at least one option!");
  }

  console.log("USABLE CHARACTERS: ")
  console.log(usableChars);






  for (var i = 0; i < passwordLength; i++) {
    password += usableChars.charAt(Math.floor(Math.random()*usableChars.length));
    console.log(password);

  }

  return password;

  
  
}


//This function will be used to determine what characters
//user would like to use
function passwordCriteria() {

 


}



