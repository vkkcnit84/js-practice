function outer() {
    let x = 10;
  
    function inner() {
      console.log(x); // Accesses variable x from the outer function
      function innerChild() {
        console.log(x, 'insed inner child');
      }
        return innerChild();
    }
  
    return inner;
  }
  
  let closureFunc = outer();
  closureFunc(); // Output: 10
  