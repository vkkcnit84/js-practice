const arr = [10,1,2,4,5,7,9,14];

const sorted = arr.sort((a,b) => {
  return a - b;
});
console.log(sorted);

for(let i=0; i<arr.length-1; i++ ) {
  if(sorted[i+1] !== sorted[i] +1) {
    for(let j=sorted[i]+1;j< sorted[i+1];j++){
      console.log(j)
    }
  }
}