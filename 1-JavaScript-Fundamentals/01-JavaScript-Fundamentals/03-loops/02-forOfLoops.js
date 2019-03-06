//look for iterable values (able to be accessed by numbers) (does not work for objects)var student = {
let student = {    
    name:"Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item of student) {
    console.log(item);
}

//Hey hey 
// doesnt work!

let catArray = [ 'tabby', 'british shorthair', 'burmese', 'mainecoon', 'ragdoll'];

for (let cat of catArray) {
    console.log(cat, 'says meow');
}
/*
tabby says meow
british shorthair says meow
burmese says meow
mainecoon says meow
ragdoll says meow
*/

