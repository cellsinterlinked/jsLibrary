
for (let i = 0; i < 10; i++) {
    console.log(i)
}
/* takes 3 expressions. a variable declaration. an expression to be evaluated before each iteration.
 and an expression to be evaluated at the end of each iteration.
 
 so i = 0, if i is less than ten it will cound upwards be increments of 1 runs as
1
2
3
4
5
6
7
8
9
*/

// Challenge: using a for loop, count to 20, by 2's

for (let i = 0; i < 20; i+=2) {
    console.log(i)
}
// i = i + 2

//Challenege: using a for loop, count from 10 to 0, going down by 1's

for (let i = 10; i > 0; i-=1) {
    console.log(i)
}
//OR for (let i = 10; i > 0; i--) {
//  console.log(i) 
//}


//challenge: using a for loop, count from 0, going down by 2's to -24
for(let i = 0; i >= -24; 1 -= 2) {
    console.log(i)
}
//ask about operators!!

/* Challenge: using a for loop, go through a name and display each letter individually
Start by finding characters in a string
*/

let myName = "David"

for (let v = 0; v < myName.length; v++) {
    console.log(myName.substring (v, v+1))
}

let name = "Zach";

for(let i = 0; i <name.length; i++) {
    console.log(name[i])
}
// ^ wtf?
/*
CHallenge:
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/

let sum = 0;

for (let i = 0; i <=50; i++){
    sum += i // sum = sum + i 
}
console.log(sum); //console log outside of the bracket so it dosnt log everty time it runs




