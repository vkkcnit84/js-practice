
function buyOrange() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('rejected orange')
        }, 6000);
    })
}



function peelsOrange() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('cut and peeled oranges'))
        }, 2000)
    })
}

function addOrangeInJuicer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('add peeled peices of oranges to juicer'))
        }, 1000)
    })
}

async function executeTheProcess() {
    try {
    
        await peelsOrange();
        await addOrangeInJuicer();
        const x = await buyOrange();
        console.log('XXX', x);
    } catch (error) {
        console.log('error', error);
    }
}

// executeTheProcess()
executeTheProcess().then((res)=>{
    console.log('RES', res)
}).catch(error => {
    console.error('Unhandled Promise Rejection:', error);
  });
// console.log('responseOfAsync:', responseOfAsync);


async function testAsyncFun() {
    console.log('inseted datatttttttttttt')
    return 'Successfully insterted data'
}
testAsyncFun()

console.log('hello' , testAsyncFun() instanceof Promise);

const date = new Date();

console.log(typeof date)
