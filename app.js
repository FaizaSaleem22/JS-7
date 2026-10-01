// q1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("welcome to our website " + fullName);

// q2
// var mob = prompt("What is your favourite mobile phone model");
// var mobLength = mob.length;
// document.write(mob + "<br>" + "length of string:" +mobLength);
// document.write("<br>");

// q3
// var country = "Pakistani";
// document.write("string: "+ country+ "<br>");
// var index = country.indexOf("n");
// document.write("Index if 'n':" + index + "<br>" );

// q4

var string = "Hello World";
document.write("String: "+ string + "<br>");
var index = string.lastIndexOf("l");
document.write("Last index of l: "+ index + "<br>");

// q5
var country = "Pakistani";
document.write("string: "+ country+ "<br>");
document.write("Character at index 3: " +country.charAt(3) + "<br>");

// second method
var country = "Pakistani";
document.write("string: "+ country+ "<br>");
document.write("Character at index 3: " +country[3] + "<br>");

// q6
// var greet = "Welcome to our website";
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(greet.concat(" ", fullName + "<br>"))

// q7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");

// q8
var string = "Ali and Sami are best friends. They play cricket and football together.";
var newString = string.replaceAll("and", "&");
document.write(newString + "<br>");

// q9
// var value = "472";
// console.log("Value: " , value , "Type: String");
// var value = Number("472");
// console.log("Value: " , value , "Type: Number");

// second method
// var value = "472";
// console.log("Value: " , value , "Type: String");
// var value = +("472");
// console.log("Value: " , value , "Type: Number");

// q10
// var user = prompt("Enter your fav legume");
// document.write("User input: " + user + "<br>");
// var user = user.toUpperCase()
// document.write("Uppercase: " +user + "<br>");

// q11
// var user = prompt("Enter a programming language name");
// document.write("User input: "+ user + "<br>");
// var firstLetter = user.slice(0,1)
// document.write("Title case: " +firstLetter.toUpperCase() + user.slice(1) + "<br>");

// // second method
// var user = prompt("Enter a programming language name");
// document.write("User input: "+ user + "<br>");
// document.write("Title case: " + user.charAt(0).toUpperCase() + user.slice(1) + "<br>");

// q12
// var num = 35.36;
// console.log("Number: ", num);
// var string = num.toString().replace(".","");
// console.log("string: ", string);

// q13
// var userName = prompt("Enter your name");
// var flag = false;
// for(var i=0; i<userName.length; i++){
//     var codes = userName.charCodeAt(i);
//     console.log(codes);
//     if( codes === 33 || codes === 44 || codes === 46 || codes === 64){
//         flag = true;
//         alert("Please enter a valid user name");
//         break;
//     }
// }
// if(flag === false){
//     alert("welcome");
// }

// q14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Enter an item you want to order");
// var user = user.toLowerCase();
// var flag = false;
// for(var i=0; i<arr.length; i++){
//     if(user === arr[i]){
//         flag = true;
//         alert(user+ " "+ "is available at index " + [i] + " "+ "in our bakery");
//     }
// }
// if(flag === false){
//     alert(user + " "+ "is not available at our bakery");
// }

// q15
// var user = prompt("Enter a password");
// var hasNumber = false;
// var hasAlphabets = false;
// var firstChar = user.charCodeAt(0);
// if(user.length < 6){
//         alert("Password must be 6 characters long")
// }else if(firstChar >=48 && firstChar <=57){
//         alert("Password cannot begin with a number")
// }else{
//     for(var i=0; i<user.length; i++){
//        var code = user.charCodeAt(i);
//        if((code >=65 && code <=90) || (code >=97 && code <=122)){
//          hasAlphabets = true;
//        }
//        if(code  >=48 && code <= 57){
//             hasNumber=true;
//         }
//        if(hasNumber === true && hasAlphabets === true){
//          alert("Valid password");
//          break;
//      }
//     }
//     if(!hasAlphabets){
//       alert("Password must contain alphabets")
//     }
//     if(!hasNumber){
//       alert("Password must contain numbers")
//     }
// }

// q16
var uni = "University of karachi";
var arr = uni.split("");
console.log(arr);
document.write(arr, "<br>");

// q17
// var user = prompt("Enter your country name");
// document.write("user input: " , user , "<br>");
// var lastCharacter = user.at(-1);
// document.write("Last character of input: " , lastCharacter, "<br>");

// q18
var str = "The quick brown fox jumps over the lazy dog";
document.write("Text: ", str, "<br>");
var arr = str.toLowerCase().split(" ")
var count = 0
for(var i=0; i<arr.length; i++){
    if(arr[i] === "the"){
        count++
    }
}
document.write("There are ", count, " occurence(s) of word 'the'")