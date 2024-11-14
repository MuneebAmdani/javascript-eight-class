// let eq="saad" && false;
// console.log(eq)

// let eq="saad" && false && "muneeb";
// console.log(eq)

// let eq="saad" && false && 0 && undefined;
// console.log(eq)

// let eq="saad" && 0 && undefined && false ;
// console.log(eq)

// let eq="parrot" && "rafay";
// console.log(eq);

// let eq="parrot" && "rafay" && undefined && null;
// console.log(eq);

// let eq="parrot" && 0 && '';
// console.log(eq);


// let eq="parrot" && 0 && '' || "hello world";
// console.log(eq);

// let num=2;
// let num2=3;
// let eq= num++ + ++num2 + num2-- + num2++ + ++num + num + num2;
// console.log(eq);

// const num=5;
// num=10; 

// let num=5;
// let num2=10;
// const eq= --num + --num2 + num-- + num2++ + ++num + num2-- + num + ++num2;
// console.log(eq);

// let eq=4==4 && 5=="5";
// console.log(eq);


// let eq=4==4 && 5=="5" && 5==="5" && undefined;
// console.log(eq);

// let num=83.4;
// console.log(Math.round(num));

//  let num=83.1;
// console.log(Math.ceil(num))

// let num=83.6;
// console.log(Math.floor(num));

// let num=Math.random();
// console.log(num);

// let num=Math.random()*2;
// console.log(num);

// let num=Math.random()*2;
// console.log(Math.floor(num));

// let num=Math.random()*2;
// console.log(num.toFixed(5));

// let heads=prompt("Enter player 1 name");
// let tails=prompt("Enter player 2 name");
// let toss=Math.random()*2;
// let convert=Math.floor(toss);
// if(convert==0){
//     alert(heads + " Head wins toss")
// }
// else{
//     alert(tails + " Tails wins toss")
// }

// let player1=prompt("Enter heads value");
// let player2=prompt("Enter tails value");
// let toss=Math.random()*2;
// let convertMath.floor(toss);
// if(convert==0){
//     console.log(player1 + " Head wins")
// }
// else{
//     console.log(player2 + " Tails wins")
// }

// let pro = +prompt("Enter value");
// console.log(typeof(pro));

// let pro = prompt("Enter value");
// console.log(typeof(pro));
// if(pro===9){
//     consolelog("OK")
// }
// else{
//     console.log("Not ok")
// }

// let userNum=prompt("Enter any number");
// if(userNum==5){
//     alert("Correct Number")
// }
// else if(userNum==4 || userNum==6){
//     alert("Close enough")
// }
// else{
//     alert("Wrong Number")
// }

// function printFactorial(){
//     let userNum=prompt("Enter any number");
//    let takenNum=1;
//     for(i=1; i<= userNum; i++){
//         takenNum*=i;
//     }
//     alert(takenNum);
// }

// setInterval(function(){
//     console.log('running')
// },1000)

// setTimeout(function(){
//     console.log('running')
// },5000)

// var num=0;
// setInterval(function(){
//     num++
//     console.log(num)
// },1000)


// var num=0;
// var interval;
// interval=setInterval(function(){
//     num++
//     console.log(num)
// },1000)
// setTimeout(function(){
//     clearInterval(interval)
// },5000)

// var num=0;
// function add(){
//     num++
//     console.log(num)
// }
// setInterval(add,1000)


// var num=0;
// var interval;
// function add(){
//     num++
//     console.log(num)
// }
// interval=setInterval(add,1000)
// setTimeout(function(){
//     clearInterval(interval)
// },10000)

// var min=0;
// var sec=0;
// var milisec=0;
// var htmlmin=document.getElementById('min')
// var htmlsec=document.getElementById('sec')
// var htmlmilisec=document.getElementById('milisec')
// function Start(){
// interval=setInterval(function(){
//     milisec++
//     htmlmilisec.innerHTML=milisec;
//     if(milisec>=100){
//         sec++
//         htmlsec.innerHTML=sec
//         milisec=0;
//     }
//         else if(sec>=60){
//             min++
//             htmlmin.innerHTML=min
//             sec=0
//         }
//         document.getElementById('st').disabled=true;
// },10)
// }
// function Stop(){
//  clearInterval(interval);
//  document.getElementById('sto').disabled=true;
//  document.getElementById('st').disabled=false;
// }
// function Reset(){
// var min=0;
// var sec=0;
// milisec=0;
// htmlmin.innerHTML=min
// htmlsec.innerHTML=sec
// htmlmilisec.innerHTML=milisec
// document.getElementById('re').disabled=true;
// document.getElementById('sto').disabled=false;
// document.getElementById('re').disabled=false;
// }