const ar = [2,3,5,77,86,111,0,2];

function largestAndSmallestNumber(ar) {
    const min = Math.min(...ar);
    const max = Math.max(...ar);
    return [min,max];
}

const num = largestAndSmallestNumber(ar);
console.log(num)