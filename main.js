'use strict'

let a =prompt("Введите число");
let b =Number(prompt("Введите число"));
for(let i=a;i<b+1;i++){
    if(i%2==0) console.log(i);   
}


let i = 0;
while(i<3){
    console.log(`number ${i}!`);
    i++;
}

while(true){
    let s = prompt("Введите число больше 10");
    if(s>10){
        console.log(s);
        break;
    }
}



let c = Number(prompt("Введите число"));
let d = Number(prompt("Введите число"));
console.log(`Число ${Math.min(c,d)} меньше`);



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () =>{ alert("Вы согласились."); },
    () =>{ alert("Вы отменили выполнение."); }
  );
  

checkAge(prompt("Введите свой возраст"));
function checkAge(age) { (age > 18) ? true : confirm('Родители разрешили?')};

  