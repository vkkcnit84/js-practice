
console.log('------------------------------')
const strArr = 'jstrjas';
// . Find the first non-repeating character in a string.
const countStr = {};

for(const str of strArr) {
  countStr[str] = (countStr[str] || 0) + 1;
}
// console.log(countStr)
const itemEnt =  Object.entries(countStr);
  console.log(itemEnt)
const sortedEnt = itemEnt.sort((a,b) => {
  console.log('a:', a, '---b:', b)
  // return a[1] - b[1]
})

console.log(sortedEnt)
