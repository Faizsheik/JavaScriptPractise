

let s1 = "Faiz banu";
let s2 = 'syed abuthahir';
let s3 = `hi this is "IMPORTANT" lesson`;
let s4 = `This house is '5000' dollars`;


// let s3 = "It is "Red" flower"; this problem can be solved by backslash escape character;
let s5 = "It is \"Red\" flower";

document.getElementById("str").innerHTML = s3 +"<br>"+ s4 ;
document.getElementById("str2").innerHTML = s5 ;

// let s6 = "Ring ah 
// ring ah 
// roses";         // This does not multipline string

//The above problem can be solved using template string.

let s6 = `Ring ah
ring ah
Roses`;
document.getElementById("str2").innerHTML = s6 ;

//string methods

// document.getElementById("str3").innerHTML = s1.split("") ; // will return array of single charcters
// document.getElementById("str3").innerHTML = s1.split(" ") ;  // will seperate array with split space at index[0] --> Faiz and indes[1] --> a


// document.getElementById("str3").innerHTML = s1.replace("a","0");  //F0iz banu ..only first occuarence of string
document.getElementById("str3").innerHTML = s1.replace(/a/g,"0");   // use regular expression for replacing all the occurences