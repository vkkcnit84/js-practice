const obj = {
    name: 'vinay',
    age: 200,
    print2O: function() {
        console.log('Normal O:',this.name)
    },
    print2ArrowO: () => {
        console.log('ARROW O::',this.name)
    },
  }
  console.log(obj.print2O())
  console.log(obj.print2ArrowO());

  const obj1 = {
    name: 'vinay',
    print: function() {
        const arrowFunc = () => {
            console.log('Arrow function:', this.name); // Uses 'this' from the outer scope
        };
        const normalFunc = () => {
            console.log('Normal function:', this.name); // Uses 'this' from the outer scope
        };
        arrowFunc();
        normalFunc();
    }
};

obj1.print(); // Output: 'Arrow function: vinay'


const obj3 = {
    name: 'vinay',
    print: function() {
        const arrowFunc = () => {
            console.log('Arrow function:', this.name); // Should refer to the enclosing 'this'
        };
        arrowFunc();
    }
};

obj3.print();