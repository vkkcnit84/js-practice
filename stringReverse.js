const string = 'vinay';
function makeReverseWithoutReverse(string){
    const lenghtStr = string.length;
    let name='';
    for(i=lenghtStr; i>0;i--){
        name += string[i-1];
    }
    return name;
}

const xy = makeReverseWithoutReverse(string);
console.log(xy)