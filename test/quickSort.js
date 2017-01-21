var quickSort = require('../algorithm/quickSort.js')
let cases = [
    [],
    [2],
    [2,1],
    [99999,888,7,3,0,23],
    [1,2,3,4,5],
    [1,0,10,8,8,9,5,5,5,56,4,3,2,3,4,5]
]
cases.forEach(arr => {
    console.log(arr);
    quickSort(arr);
    console.log(arr);
    console.log('\n');
})
