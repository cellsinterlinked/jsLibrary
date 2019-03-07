/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/
let list = [ 'item1', 'item2', 'item3',];
console.log(typeof list);// helps find the data type of something in JS

let list2 = ['orange', 'banana', 'oreo'];

console.log(list2[1]); //how do we get one of these out of the array (banana)? index [1]
// the square bracket indicates the index location of an item in an array

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
console.log(typeof students);
console.log(students instanceof Array); //will come back true (yes its an array )
console.log(sudents[2]); //will come back Rhys
console.log(students[6][1]); //will come back Iesha
console.log(students[6]); //['Ryan', 'Iesha', 'Amira']
console.log(students[6][0]);
// look down 



let students = ['Tony', 'Marshall', 'Rhys', 
'Ray', 23, true, ['Ryan', 'Iesha',['Randy','Trevor'], 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1]);// array within an array has its own index (6) and to grab things from within it you put a second number in brackets [6][2]
let myFriend = students [6][2][1];

console.log(`Hello ${myFriend}, you look nice today`);

let myFriend = students [6][1];

console.log(`Hello ${myFriend}, you look nice today`);// Iesha

let myFriend = students [6][3];

console.log(`Hello ${myFriend}, you look nice today`);// Amira


///////////////////////////////////////////////////////////////////

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
// we want these all console logged seperately
for(let item in food){ 
    console.log(food[item])
}
// runs as
/*Pecan pie
Shrimp
Quesadilla
Cheese cake
Hotdog
*/

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//for(let item in food){ 
 //   console.log(food[item]);
//}
let pizza = 'Pizza';

food.push(pizza);

console.log(food);
/* runs
'Pecan pie',
  'Shrimp',
  'Quesadilla',
  'Cheese cake',
  'Hotdog',
  'Pizza' ]
  */

 let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(1,1,'Bananas');
 console.log(food);
// splice where to you want to start, what do you want to delete (how many) and what do you want to replace it with
/*
 'Pecan pie',
  'Bananas',
  'Quesadilla',
  'Cheese cake',
  'Hotdog',
  'Pizza' ]
  */

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(1,2,'Bananas');
 console.log(food);
 
 /* runs
 [ 'Pecan pie', 'Bananas', 'Cheese cake', 'Hotdog', 'Pizza' ]
*/
 //what index do we start at, how many do we delete, what do we replace it with

 let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(1,1,'Bananas');

 food.splice(2,0, 'Sweet Potato Pie');
 console.log(food);
/* runs
[ 'Pecan pie',
  'Bananas',
  'Sweet Potato Pie',
  'Quesadilla',
  'Cheese cake',
  'Hotdog',
  'Pizza' ]
  */

//replace hotdog with fav food, then put fav food in index where hotdog is but don't replace it

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(4,1,'Salmon');

 
 console.log(food);
//erased hotdog and replaced with salmon

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(4,0,'Salmon');

 
 console.log(food);
 //moved salmon to hotdogs spot and moved hotdog to the end
// to remove something from the end of an array use .pop
 let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 let pizza = 'Pizza';

 food.push(pizza);


 food.splice(4,0,'Salmon');

 food.pop();// we can remove the last item from an array
 console.log(food);
 /* runs as
 [ 'Pecan pie',
  'Shrimp',
  'Quesadilla',
  'Cheese cake',
  'Salmon',
  'Hotdog' ] got rid of pizza at the end!
  */
//////////////////////////////////////////////////////////////////

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.forEach(f => {  //for each loops over each item in the array and does a function for each one.
    console.log(f);  //for each can give us both the index and the item
})                     // for in gave us the index and for of gave us the item before this method.
/* runs as
Pecan pie
Shrimp
Quesadilla
Cheese cake
Hotdog */

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.forEach((food,number,arr) => {
    console.log(number);
    console.log(food);
    console.log(arr);
})
/* reads
0
Pecan pie
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog' ]
1
Shrimp
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog' ]
2
Quesadilla
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog' ]
3
Cheese cake
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog' ]
4
Hotdog
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog' ]


Challenge (Go look at MDN docs to remind you):
create a list (with an array) of movies
Use .forEach() to list your movies
Add another movie at the end
And replace one of your existing movies with another one */

let movies = ['Phantom Menance*','Attack of the Clones','Revenge of the Sith','Solo','Rogue One','A New Hope','The Empire Strikes Back','Return of the Jedi'];

movies.push('Force Awakens');
movies.splice(3,1,'Obi Wan');

movies.forEach(f => { console.log(f); });
