mexample:
function Student() {
  this.name = 'John';
  this.gender = 'M';
}
const name = 'John';
const obj = {
  name: 'vikas',
  gender: 'Male',
  userIds: [1,2,3,4,5],
  getUser: function() {
    // console.log(this.userIds)
    // return this.userIds
    console.log('normal funtion this:', this.name);
    const  user1 = {
      name: 'Rakesh',
      age: 22,
      secondFun : function() {
        console.log('second funtion normal this:', this.name)
      },
      thirdArrowFun : () => {
        console.log('second funtion arrow this:', this.name)
      },
    }
    const fun1 = user1.secondFun();
    const fun2 = user1.thirdArrowFun()
    console.log('fun1', fun1)
    console.log('fun2', fun2)
  },
  arrowFun: function () {
    console.log('Arrow function this', this.name)
  }
}

const arr = [1,2,3,4,5,6];
// console.dir('Array.prototype::' , Array.prototype)
// obj.prototype.age = 15;
obj.prototype = { name: 'John', gender: 'M' };
console.dir(Array.prototype);
console.dir(Function.prototype)
console.dir(Object.prototype);
console.dir(String.prototype);
// console.log(obj.userIds)
// console.log(obj.getUser())

// console.log(arr.map.__proto__.__proto__)

function protoTypeTest() {
  const obj1 = {
    name: 'vinay1',
    gender: 'Male1'
  }
  console.log(obj1.prototype)
}

// console.log(Object.getPrototypeOf(obj))
//console.log(obj.prototype); // print undefined
//console.log(obj.__proto__); // works return prototype object

console.log(protoTypeTest())
Student.prototype.age = 15;

var studObj1 = new Student();
var studObj2 = new Student();

// console.log(Object.prototype)
// console.log(Object)
console.dir(studObj1); // Output: { name: 'John', gender: 'M' }
console.dir(studObj2); // Output: { name: 'John', gender: 'M' }

