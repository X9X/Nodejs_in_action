module.exports = function quickSort(arr,start,end){
    let i = start || 0;
    let j = end || arr.length - 1;
    let startIndex = i;
    let endIndex = j;
    if(j - i < 1) return;
    let k = arr[i];
    while(j > i){
        if(arr[j] < k){
            [arr[i] , arr[j]] = [arr[j] , arr[i]];
            i++;
            while ( j > i){
                if(arr[i] > k){
                    [arr[i] , arr[j]] = [arr[j] , arr[i]];
                    j--;
                    break;
                } else {
                    i++
                }
            }
        } else {
            j--
        }
    }
    startIndex < i - 1 && quickSort(arr, startIndex, i - 1);
    endIndex > i + 1 && quickSort(arr, i + 1, endIndex);
}
function quickSort(arr){
    let x = arr[0];
    return x ? quickSort(arr.filter(i => i <= x)).concat(quickSort(arr.filter(i => i > x))) : []
}
