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

let person = new Person('vinay singh oe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName())
// console.log(person); // Jane Smith