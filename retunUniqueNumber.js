//  Write a function that takes an array of integers as input and returns a new array with only the unique elements. 


const array = [1, 2, 3, 4, 1, 2, 3, 4, 5];

function uniqueNumberReturn(ar) {
    const newAr = [];
    for(i=0;i<ar.length;i++){
        if(!newAr.includes(ar[i])){
            newAr.push(ar[i])
        }
    }
    return newAr;
}

const x = uniqueNumberReturn(array);
console.log(x)
