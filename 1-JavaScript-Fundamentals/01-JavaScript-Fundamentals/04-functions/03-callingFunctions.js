/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi(){
    console.log('Hi!')
}

hi(); // this is how you call on the function


function hi(){
    return 'Hi';
}
hi();
// nothing happens no console log


function hi(){
    return 'Hi';
}
hi();

console.log(hi()); //this works
// ^ ASK ABOUT THIS

/*
challenge:
create a functin that, when invoked, lists out the numbers 1-10
*/

function count(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

count();

//template
function something(){


}
for(let x = 0; x <=10; x++){
//start end update  are the steps for a for loop
    console.log(x);
}
//then just drop this into the function^
//then call the function!

something();

//another example
let number = 20;

function one2num(max){
    for(let i =1; i<max+1;i++){
        console.log(i)
    }
}

one2num(number);
//counts to 20. 


/*
Challenge:
Given the array, create a function that lists out the values individually (uses forofloops)*/
function values(){
let arr = ['This', 'is', 'really', 'cool'];
    
for (let x of arr){
    console.log(x)
}
}
values();


/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/
function pet(animal){ //the parameter is animal
    console.log(`I have a ${animal} for a pet.`);
} 

pet('cat');

//challenge i didnt have directions for



function myName(fName , lName){
    console.log(`Hello, my name is ${fName} ${lName}`);
}
myName('Scott', 'Billings');



function myName(fName , lName){
    let fullName = `${fName} ${lName}`;
    console.log(`Hello, my name is ${fullName}`);
}

myName('Autumn', 'Henderson');
myName('Zack', 'Maynard');


/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}
*/

function coffee(){
    console.log('Coffee is good!');
}
coffee();


let coffee = () => {
    console.log('I like Coffee!')
}
coffee();

let cats = (kitten,puppy) => { console.log(`I have ${kitten} cats and ${puppy} dogs`)}

cats(2,4)

//will it hoist?

cats(2,4)
let cats = (kitten,puppy) => { console.log(`I have ${kitten} cats and ${puppy} dogs`)}
// no! because there is an = that wont allow it. fat arrow functions wont hoist.

//concise function

let apples = x => console.log(`There are ${x} apples.`);
apples(10);
//has implied return

//block body

let apple = (x) => {console.log(`There are ${x} apples.`)} 
//block will not have implied return if more than one line
// ASK ABOUT IMPLIED RETURN



/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/
function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);

/*
CHALLENGE:
make a tip calculator using a function
Have it RETURN the value
Capture that returned value ina Variable
Print that variable
*/

function tipcalc(bill){
    let tip = (bill *0.2);
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);
// ask about this ^

//concise version of this last example^
//Let tipper = bill => (bill *0.2). toFixed(2)

let tips = tipper(19.88);
console.log(tips)