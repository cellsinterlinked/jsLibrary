let weather = 75;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}
//if something is true do this thing, else (if false) you fo the other thing

let myname = 'Jenny';

if('Autumn' == myname){
    console.log('Hello, my name is', myname);
    
}  else {
    console.log('Hello, is your name', myname+ '?');
}
//hello is your name jenny?


//Challenge


let myName = 'AuTumn';
console.log(myName[0].toUpperCase())
//square brackets indicate index. grabs first chartacter in string
if(myName[0] == myName[0].toUpperCase()){   
    console.log(myName);
} else {
    console.log('Hey its not written correctly');
}

//part 2

let myName = 'aUTuMn';
if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}

//part 3

let myName = 'AUTuMn';
if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0] + myName.substr(1).toLowerCase());
} else {
    console.log(myName[0].toUpperCase() +myName.substr(1).toLowerCase());
}


/*********************** 
ElSE IF
************************
*/
let age = 30;
if(age <= 17){
    console.log('Sorry, youre too young to do anything');
} else if(age >= 18 && age < 21){
    console.log('Yay! You can vote!');
} else if(age >= 21 && age <25){
    console.log('Yay! You can drink');
} else(age >= 25)
    console.log('Yay! You can rent a car!');






let friend='Bob';

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing");
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD");
        break;
    default:
        console.log(`Im sorry, ${friend}, but do i know you?`)
//string interpolation, backticks, under the escape key
    }
    //results in im sorry bob, do i know you?


/*/*
Challenge:
Using a switch case
Write a dessert variable;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/
let dessert = 'carrots';
switch (dessert){
    case "pie":
        console.log('Pie pie, me og my!');
        break;
    case "cake":
        console.log('Cake is great!');
        break;
    case "icecream":
        console.log('I scream for ice cream!');
        break;
    default:
    console.log(`Sorry ${dessert} is not on the menu`);
}
//multiple conditionals

let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}
    







