console. log(scissors);

scissors = 'blue';

console.log(scissors);
var scissors;
//var scissors got hoisted to top on second run through. it didn't hoist value though.//

b();
console.log(a);

function b() {
    console.log('This is all hoised');
}
var a = 'This is not hoisted'

