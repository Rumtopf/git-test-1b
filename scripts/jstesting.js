// Random number  Generator

// const min = 50;
// const max = 100;

// let randomNum = Math.floor (Math.random() * (max -min)) + min;

// console.log(randomNum);


// const myButton = document.getElementById('myButton');
// const myButton2 = document.getElementById('myButton2');
// const myLabel1 = document.getElementById('myLabel1');
// const myLabel2 = document.getElementById('myLabel2');
// const myLabel3 = document.getElementById('myLabel3');
// const myLabel4 = document.getElementById('myLabel4');
// const myLabel5 = document.getElementById('myLabel5');
// const myLabel6 = document.getElementById('myLabel6');

// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;
// let randomNum4;
// let randomNum5;
// let randomNum6;

// myButton.onclick = function(){
//     randomNum1 =Math.floor(Math.random() * max) + min;
//     randomNum2 =Math.floor(Math.random() * max) + min;
//     randomNum3 =Math.floor(Math.random() * max) + min;
//     myLabel1.textContent= randomNum1;
//     myLabel2.textContent= randomNum2;
//     myLabel3.textContent= randomNum3;
// }

// myButton2.onclick = function(){
//     randomNum4 =Math.floor(Math.random() * max) + min;
//     randomNum5 =Math.floor(Math.random() * max) + min;
//     randomNum6 =Math.floor(Math.random() * max) + min;
//     myLabel4.textContent= randomNum4;
//     myLabel5.textContent= randomNum5;
//     myLabel6.textContent= randomNum6;
// }


// if Statements

// let age = 25;

// if (age > 18) {
//     console.log('You are old enough to enter this site.');
    
// }
// else{
//     console.log(" you are not old enogh to enter this site.")
// }

// let time = 14;

// if (time < 12) {
//     console.log('good morning')
// }
// else{
//     console.log ('good Afernoon!')
// }


// let isStudent = true;

// if (isStudent) {
//     console.log('you are a student')
// }
// else{ console.log("you are not a student") }


// let age = 25;
// let hasLicenese = true;

// if (age >= 16){
//     console.log( 'you are old enough to drive');
// if (hasLicenese) {
//     console.log('you have your license!');
// }
// else{
//     console.log('you do not have your license yet')
// }
// }
// else{ 
//     console.log ('you must be 16+ to have a license');
// }




// const myText = document.getElementById('myText');
// const mySubmit = document.getElementById('mySubmit');
// const resultElement = document.getElementById('resultElement');
// let age;

// mySubmit.onclick = function(){

// age = myText.value;
// age = Number(age);


// if (age >= 100) {
   
//     resultElement.textContent = `you are too old to enter this site.`;
// }

// else if (age == 0){
    
//     resultElement.textContent = `You can't enter. you were just born`;
// }
// else if(age >= 18){
    
//     resultElement.textContent =`you are old enough to enter this site.`;

// }
// else if (age < 0){
    
//     resultElement.textContent =`your age cannot be below 0`;
// }

// else{
//     resultElement.textContent =`You must be 18+ to enter this site.`;
// }
// console.log(resultElement)
// }


// const myCheckBox = document.getElementById('myCheckBox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const payPalBtn = document.getElementById('payPalBtn');
// const mySubmit= document.getElementById('mySubmit');
// const subResult= document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');

// mySubmit.onclick = function(){
//     if(myCheckBox.checked){
//         subResult.textContent = `you are subscribed!`;
//     }
//     else{
//         subResult.textContent = `you are NOT subscribed`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent = `you are paying with Visa!`;
//     }
//     else if(masterCardBtn.checked) {
//         paymentResult.textContent = `You are paying with Master Card!`;
//     }
//     else if(payPalBtn.checked) {
//         paymentResult.textContent = `You are paying with Pay Pal!`;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment option!`;
//     }
    
// }




// let age = 2;
// let message = age >= 18 ? "you're an adult" : "you're a minor";
// console.log(message)

//let time = 6;
//let greeting = time < 12 ? " Good Morning!" : "Good Afternoon!";
//console.log(greeting);

//let isStudent = false;
//let message = isStudent ? "you are a student" : "you are Not a Student";
//console.log(message)

// let purchaseAmount = 100;
// let discount = purchaseAmount>= 100 ? 10 : 0;
// console.log(`your total is $${purchaseAmount-purchaseAmount *(discount/100)}`)