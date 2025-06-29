let passwordBox = document.getElementById("password");
const length=12;
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase="abcdefghijklmnopqrstuvwxyz"
let number="0123456789"
let specialSymbol="!@#$%^&amp;*()_-+={}[]:;~" 
 
const allChar= upperCase + lowerCase + number + specialSymbol;


function createPassword(){
let password="";
 password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
 
for (let i = 4; i < length; i++) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

passwordBox.value=password;
}

 
