class Person {
  constructor(name) {
      this.setName(name);
  }
  // getter setter
  getName() {
      return this.name;
  }
    
  setName(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this.name = newName;
  }
}

const outerFunction = function() {
  return 'vinay from outer function';
}

console.log(Person.__proto__ == Person.prototype);

Person.prototype.outerFunction = outerFunction();
Person.prototype.defaultName = 'Hello World';


let person = new Person('vinay singh');
console.log(person.outerFunction, 'calling'); //vinay

// person.setName('Jane Smith');
// console.log(person.getName())
// console.log(person); // Jane Smith