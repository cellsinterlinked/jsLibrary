// What is a ternary? A great way to write a single line for an if/if else statement

let w = 6;

//ternary:

(w > 0) ? console.log('yes') : console.log('no');

//instead of:
if(w>0){
    console.log('Yes');
}else{
    console.log('No');
}

if (w == 0){
    console.log('hey hey hey');
}else if( w <0){
    console.log('nah nah nah, goodbye');
}else {
    console.log('see ya later');
}

(w == 0)? console.log('hey hey hey') : (w < 0) ? console.log('nah nah goodbye') : 
console.log('see ya later!');

let myAge = 10;

(age >= 25)? console.log('Yay you can rent a car!') : (age >= 21) ? console.log('Yay, you can drink!') :
 (age >= 18) ? console.log('Yay you can vote') : console.log('Sorry, youre too young to do anything!')



 //turnaries with multiple conditions
 
