// var a = 10;
// var b = 5;
// console.log("Before swap: a="+a,"b="+b);
// var c = a; //C=10
//     a = b; //a=5
//     b = c; //b=10
// console.log("After swap: a="+a,"b="+b);

// var a = 10;
// var b = 5;
// console.log("Before swap: a="+a,"b="+b);
// a = a+b; //15
// b = a-b; //15-5 = 10
// a= a-b; //15-10 = 5
// console.log("After swap: a="+a,"b="+b);

var a = 10;
var b = 5;
console.log("Before swap: a="+a,"b="+b);
var [a,b] = [b,a];
console.log("After swap: a="+a,"b="+b);
