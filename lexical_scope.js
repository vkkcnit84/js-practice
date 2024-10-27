function outer() {
    var name = "John";
  
    function inner() {
      console.log(name);
      function test() {
        console.log(name);
      }
    }
    test();
  
    inner();
  }
  
  outer();