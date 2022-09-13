// function myFunction(p1, p2) {
//     return p1 * p2; 
// }
// console.log(myFunction);

// let x = multiple(4, 3);   
// function multiple(a, b) {
//   return a * b;             
// }
// console.log(x);

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }
// let y = toCelsius(77);
// let text = "The temperature is " + y + " Celsius";
// let text1 = "The temperature is " + toCelsius(77) + " Celsius";
// console.log(y);

// let myArrow = (a, b) => a * b;

// var hello = () => {
//     return "Hello World!";
// }
// console.log(hello);


var a = prompt ("Enter the first number");
var b = prompt ("Enter the second number")
var c = prompt("Enter the operator");

function square (a,b,c){
    if (c == "+"){
        return a + b; 
    }else if (c == "-"){
        return a - b;
    }else if (c == "*"){
        return a * c;
    }else if (c == "/"){
        return a / b;
    }else if  (c == "square"){
        return a * a;
    }else if (c == "cube"){
        return a * a * a;
    }else if (c == "power"){
        return Math.pow(a,b);
    }

}
var ans = square(a,b,c);
console.log(ans);
  