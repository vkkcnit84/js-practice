const arr = [34,5,1,211,45,9,23,21,45,6,1];
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
        if(arr[j] > arr[j+1]) {
            let swap = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = swap;
        }
    }
}
console.log(arr)