/*let a = false;

let age = prompt("скок тебе лет?", "15");

alert("тебе " + age + " лет");

let h = prompt("твое хобби ", "ну");

alert("твое хобби " + h);

let f = confirm("да или не?");

alert(f);*/

/*let a = prompt("сторона квадрата", "1");

console.log("площадь квадрата ", parseInt(a)**2);*/

/*let age = prompt("скок тебе лет?", "18");

age = parseInt(age);

if(age>=18){
    alert("поздравляю тебе "+ age);
}else {
    alert("тебе сюда нельзя :(")
}*/

//let a = false;

/*let a = confirm("да или не?");

if(a){
    alert("ну классно");
}else{
    alert("ну не классно");
}

let r = 5;

if(r>5){
    alert("x>5");
}

let s = Math.random()*100;

if(s<50){
    alert("меньше 50");
}else{
    alert("больше 50");
}

if(s<25){
    alert("s<25");
}else if(s>=25 && s<50){
    alert("s>=25, s<50");
}*/

//if((s >= 0 && s<25) || (s>=50 && s<100)) {}

let ft1  = document.getElementById("ft1");
ft1.innerHTML = (true&&true);
let ft2  = document.getElementById("ft2");
ft2.innerHTML = (true&&false);
let ft3  = document.getElementById("ft3");
ft3.innerHTML = (false&&true);
let ft4  = document.getElementById("ft4");
ft4.innerHTML = (false&&false);

let ft21  = document.getElementById("ft21");
ft21.innerHTML = (true||true);
let ft22  = document.getElementById("ft22");
ft22.innerHTML = (true||false);
let ft23  = document.getElementById("ft23");
ft23.innerHTML = (false||true);
let ft24  = document.getElementById("ft24");
ft24.innerHTML = (false||false);

let ft31  = document.getElementById("ft31");
ft31.innerHTML = ((true&&true)||(true&&true));
let ft32  = document.getElementById("ft32");
ft32.innerHTML = ((true&&true)||(false&&false));
let ft33  = document.getElementById("ft33");
ft33.innerHTML = ((false&&false)||(true&&true));
let ft34  = document.getElementById("ft34");
ft34.innerHTML = ((false&&false)||(false&&false));
let t3  = document.getElementById("t3");
t3.innerHTML = ((false&&true)||(false&&false));
let f3  = document.getElementById("f3");
f3.innerHTML = ((false&&true)||(false&&true));

let a = 5 % 4;
let b = 125 % 100;
let c = 285.5 % 140.0;
let d = 30.0 % 33.0;

console.log(a);

// if(ft = t&&f){
//     ft.innerHtml = "false";
// }