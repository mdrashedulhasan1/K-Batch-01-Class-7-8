var age = [20, 23, 45, 18, 28];
var maxAge = age[0]; 
for(var i=0; i<age.length; i++){
    var result = age[i]; 
    if(result>maxAge){
        maxAge = result;
    }
}
console.log("Largest age is",maxAge);