
// what is callback function ?

setTimeout(function(){
    console.log('time')
},50000)


function x(y){
    console.log('x');
    y();
}

x(function y(){
    console.log('y');
})
















// var countries = ["India","USA","Japana","Russia"];

// var states = new Array("Rajsathan","Delhi","Mumbai","Assam");

// console.log(states.length);

// states[0] = "Punjab";
// console.log(states);

// var user = ["vinay","vkkscnit@gmail.com",3,34,true];
// console.log(user);

// user.pop();
// // user.pop();
// // user.pop();

// console.log(user);
// user.unshift('new val');
// console.log(user);

//  const arr = ['e3','3',67,88];
//  const arr2 = [2,4,6,7,8,3];

//  const ar3 = arr.concat(arr2)
//  console.log(ar3);
//  arr.reduce((acc, val) => acc.concat(val), []);
// console.log(arr);
// const a = array.flatMap(arr => arr * 10)


// // With .flat() and .map()
// const b = array.flat().map(arr => arr * 10)

// console.log('flatMap', a)
// console.log('flat&map', b)


