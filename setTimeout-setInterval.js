const setIntervalTest = setInterval(() => {
    console.log('setInterval::', new Date())
})
// console.log(setIntervalTest)

setInterval(() => {
    clearInterval(setIntervalTest)
})