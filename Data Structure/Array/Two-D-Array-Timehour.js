const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

/* 
For this pattern it is:

  a b c
    d 
  e f g 



  i is here row
  j is here column in first section
*/

let allHoursGlass = [];

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const hourGlass = [
            arr[i][j], arr[i][j + 1], arr[i][j + 2],
            arr[i + 1][j + 1],
            arr[i + 2][j], arr[i + 2][j + 1], arr[i + 2][j + 2]
        ]
        allHoursGlass.push(hourGlass)
    }
}

let allarrData = [];

for (let i = 0; i < allHoursGlass.length; i++) {
    let sumArr = 0;
    for (let j = 0; j < allHoursGlass[i].length; j++) {
        sumArr += allHoursGlass[i][j];
    }
    allarrData.push(sumArr);
}

console.log(allarrData);
console.log('MAX SUM:', Math.max(...allarrData));