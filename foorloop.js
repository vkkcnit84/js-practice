// for ( let index = 1; index <= 10; index = index+2) {
   // const element = index;
  // continue;
    // console.log(index);
   
// }


// let sometestvar = function (e) {
//   return e < 1 ;
// }

// let ar = [2,4,5,77,88,23];
// const result = ar.some(sometestvar);
// const result = ar.some(sometestvar);

// console.log(result);


//flat() not available in node right now : it available higher version of node > 11.0

// const someArray = [1,2,3,[5,6,88,99],[9,11,24,56]];
// const someArray = [1, [2, 3], [4, 5,2,3,3,3]];
// someArray.flatMap( (e) => e*22 );
// console.log(someArray);



//filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.


const arList = [89,7,45,67,32,543];
const res = arList.filter( (e) => (e < 89) );
console.log(res);








