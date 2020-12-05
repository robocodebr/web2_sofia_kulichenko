let str1 = "text 'text'";
let str2 = "text";
let str3 = str1 + str2;
let str4 = `text
${str1}
${1}
text
`;

let container = document.getElementById("container");
container.innerHTML = str1;
container.innerHTML += "<br>" + str2;
console.log(str4);

console.log(str4[0]);
console.log(str4.length);
for(i=0; i<24; i++){
    console.log(str4[i]);
}

console.log(str4[str4.length-1]);
console.log(str4.charAt(str4.length-1));

let str5 = "1234_1243478_325467";
let arr = str5.split("_");
console.log(arr);

let arr2 = str5.split("");
console.log(arr2);

console.log(str5.indexOf("_"));
console.log(str5.indexOf("_5"));

let str6 = str5.slice(0, str5.length-4);
console.log(str6);

let str7 = str5.substring(4, str5.length);
console.log(str7);

let str8 = str5.substring(str5.length, 4);
console.log(str8);

let str9 = str5.substr(5, 4);
console.log(str9);

let s1 = "abcd";
let result = "";

for(i=0;i<s1.length;i++){
    for(let g = 0; g<i; g++){
        //console.log(s1[i]);
        result += s1[i];
    }
}
console.log(result);

for(i=0;i<s1.length;i++){
    result += s1[i].repeat(i);
}


let date1 ="05_12_2020";
let arr3 = date1.split("_");
let resultArr = [];
for(i=0;i<arr3.length;i++){
    resultArr[i] = parseInt(arr3[i]);
}
console.log(resultArr);

let a1 = "robocodebr@gmail.com";
let arr4 = a1.split("@");
console.log(arr4);

let arr41 = arr4.join(".");
let arr5 = arr41.split(".");
console.log(arr5);

let b1 = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript (стандарт ECMA-262[7]).

JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].

Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.

На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке[~ 1][9].

Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США[10]. `

let arr6 = b1.split(".");

console.log(arr6.length-1);


container.innerHTML+= "<br> \u{1F601}"//1F609
container.innerHTML+= "<br> \u{1F609}"
container.innerHTML+= "<br> \u{1F606}"
container.innerHTML+= "<br> \u{1F63C}"

let arr66 = ["\u{1F601}","\u{1F609}","\u{1F606}","\u{1F63C}","\u{1F614}"];

console.log(arr6);

let arr666 = [];

for(i=0;i<arr6.length-1; i++){
    arr666[i] = arr6[i] + arr66[i];
}

console.log(arr666);