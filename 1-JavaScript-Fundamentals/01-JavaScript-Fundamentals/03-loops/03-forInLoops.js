

let student = {
    name: "Zach", 
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    console.log(item)
}

// runs name awesome degree week

let student = {
    name: "Zach", 
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    //console.log(item)
    console.log(student[item]) //square bracket notation
}
// //will read zach true javascript 1 

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    console.log(cat);
// }
// // logs as 0 1 2 3 4 because tabby's index is 0, british shorthair is 1 etc....

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
   // console.log(cat);
   console.log(catArray[cat])
}
// runs as tabby, british shorthair, burmese, maine coon, rag doll 

/* Challenge:
write a for in loop that capitalizes the first letter of a student's name
*/

let studentName = 'auTuMn'; 
let capName;                 //havent given a value

for (let x in studentName) {
    if (x == 0) {
        capName = studentName[x]. toUpperCase();
    } else {}
       capName += studentName[x].toLowerCase();
}                                         //the thing inside the {} are the LOOP 
console.log(capName);

}