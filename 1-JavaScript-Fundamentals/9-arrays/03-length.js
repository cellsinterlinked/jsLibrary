let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); //length is not index. this will result in 10 (index would result as 9)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors); //run this and get the whole array bracket and all
console.log(colors.toString()); //just mashes all the strings together in the array. it is no longer an array and now a string

////////////////////////////////////////////
let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
let newColors = colors.toString();
console.log(newColors[2]);
/* runs
[ 'blue', 'green', 'yellow', 'red', 'orange', 'purple' ]
u
*/

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
let newColors = colors.toString();
console.log(typeof newColors); 
/* RUNS
[ 'blue', 'green', 'yellow', 'red', 'orange', 'purple' ]
string
*/

/* Challenge
First check if you are working with an array
Then flip the valuies within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array */

let arr = [1,2,3,4,5];

if (arr instanceof Array === true){
    let revArr = arr.reverse();
    revArr.forEach(a => console.log(a))
}

