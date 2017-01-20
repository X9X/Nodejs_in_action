let bubbleSort = require('../algorithm/bubbleSort.js')
let cases = [
    [],
    [2],
    [2,1],
    [99999,888,7,3,0,23],
    [1,2,3,4,5],
    [1,0,10,8,8,9,5,5,5,56,4,3,2,3,4,5]
]
cases.forEach(arr => {
    console.log(bubbleSort(arr));
    console.log('\n');
})
