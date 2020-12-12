let str = prompt("input", "texttt");
let repeatStr = (str+",").repeat(3);
repeatStr = repeatStr.slice(0, repeatStr.length-1);
let lengthStr = repeatStr.length;
console.log(repeatStr, lengthStr);

let str1 = "dfgyghjkl";
console.log(str1[0] + " " + str1[Math.floor( str1.length/2)] + " " + str1[str1.length-1]);

if(str.length>=6){
    console.log(
        str.substr(0,3),
        str.substr(str.length-4, 3)
    );
}else if(str.length<6){
    console.log(str[0].repeat(str.length));
}

let strArr = str.split("");
let resultStr = "";

for(i=0; i<strArr.length; i += 1){
    
        resultStr += strArr[i] + (i*2);
    
}
console.log(resultStr);


let index = str.indexOf(str[str.length-1]);
console.log(index);

for(i=0;i<str.length; i+=3){
    console.log(str[i]);
}



let splitPlus = str.split("+");
let splitMinus = str.split("-");
let splitM0 = str.split("-0");
let splitP0 = str.split("+0");

console.log("split +: "+(splitPlus.length-1));
console.log("split +0: "+(splitP0.length-1));
console.log("split -: "+(splitMinus.length-1));
console.log("split -0: "+(splitM0.length-1));