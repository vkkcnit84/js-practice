const num = 10;

function fibonacci(num) {
    let a = 0;
    let b = 1;
    const ar = []
    for (let i = 0; i < num; i++) {
        // console.log(a);
        let c = a + b;
        a = b;
        b = c;
        ar.push(a)
    }
    return ar;
}
const x = fibonacci(num);
console.log(x)