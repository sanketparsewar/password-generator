const password = document.getElementById("password");
const length = document.getElementById("length");
const generateBtn = document.getElementById("generate");

const capital = document.getElementById("capital-letter");
const small = document.getElementById("small-letter");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "1234567890";
const symbolString = "!@#$%^&*()<>,.;:";

function generate() {
  if(password.value=='') return password.value='Undefined';
  else{let pass = "";
  let allChar = "";
  allChar += capital.checked ? upperCase : "";
  allChar += small.checked ? lowerCase : "";
  allChar += number.checked ? numberString : "";
  allChar += symbol.checked ? symbolString : "";
  for(let i=0;i<length.value;i++) {
      pass += allChar[Math.floor(Math.random() * allChar.length)];
  }
  password.value = pass;
}
}

function copy() {
  password.select();
  password.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password.value);
}

let h=()=>{console.log('hi')}
// console.log(h())
setTimeout(h,2000)
// console.log(timeout)