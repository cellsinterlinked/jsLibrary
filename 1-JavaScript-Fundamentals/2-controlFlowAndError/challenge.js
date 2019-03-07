/* new variable FB
if divisible by 3 write fizz
if divisible by 5 write buzz
if divisible by 3 and 5 write fizzbuzz




*/

//if else

let FB = 25;

if (FB % 3 == 0 && FB % 5 ==0) {
    console.log ('fizzbuzz')
} else if (FB % 5 == 0) {
    console.log('buzz')
} else if (FB % 3 == 0) {
    console.log('fizz')
}

//switch

let FB = 30;

switch(true) {
    case (FB % 3 == 0 && FB % 5 ==0):
    console.log('fizzbuzz')
    break;
    case (FB % 5 == 0):
    console.log('buzz')
    break;
    case (FB % 3 == 0):
    console.log('fizz')
    break;
}

//ternary

let FB = 15;

(FB % 3 ==0 && FB % 5 == 0) ? console.log('fizzbuzz') : (FB % 5 ==0)
? console.log('buzz') : (FB % 3== 0) ? console.log('fizz') : FB;


//challenge else if and switch
for(let i =0; i<=100;i++){
    if(i % 3 ==0 && i % 5==0){
        console.log('FizzBuzz');
    } else if(i %5 ==0){
        console.log('Buzz')
    } else if( i % 3 ==0){
        console.log('Fizz')
    } else {
        console.log(i);
    }
}

for(let FB = 0; FB<=100;FB++){
    switch (true) {
      case (FB % 3 === 0 && FB % 5 === 0):
      console.log('Fizz Buzz');
      break;
      case (FB % 5 === 0):
      console.log('Buzz');
      break;
      case (FB % 3 === 0):
      console.log('Fizz');
      break; 
      default :
      console.log(FB); 
    }
    
  }