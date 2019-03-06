3 == 3
// Equal Opperator (in javascript you have to have 2 equal signs)
3 == '3';
//javascript will "cooerce" and try and turn the string into a number
//Strictly Equal
3 === '3' 
console.log(3 === '3'); //false not the same
console.log ('3' === '3'); //true

//Not equal
'3' != 3 //repace equal with exclamation point or "bang"
console.log('3' != 3); //false, because cooersion causes '3' to be equal to 3

//Strictly not equal
console.log('3' !==3); //true, with no cooersion '3' is not equal to 3

// Greater than
3 > 2;// true

//Lesser than
2 < 3;

//Greater than or equal to
4 >= 2 ;  //dont do => because thats something completely different

//Less than or equal to
2 <= 3;

//And
//two things and both need to be true in order to work
4 > 2 && 3 < 1; //false because the three is not less than 1
console.log(4 > 2 && 3 < 1);

//Or
4 > 2 || 3 < 1  //one can be true or the other can be true. doesnt have to be both
console.log( 4 > 2 || 3 < 1); //works as long as one or both are true



