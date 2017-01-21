
module.exports = function quickSort(arr,start,end){
    let i = start || 0;
    let j = end || arr.length - 1;
    let k,tmp;
    let startIndex = i;
    let endIndex = j;
    if(j - i < 1) return;
    k = arr[i];
    while(j > i){
        if(arr[j] < k){
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            while ( j > i){
                if(arr[i] > k){
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
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
