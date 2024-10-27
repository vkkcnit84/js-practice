const promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 1010, 'one');
})
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // Prints 'two'
  });
  