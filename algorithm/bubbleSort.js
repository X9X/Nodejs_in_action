/**
 * bubble sort algorithm
 * @param  {[Array]} arr [number list to sort, require pure numbers]
 * @return {[Array , false if failed]}     [sorted array]
 */
 module.exports =  function(arr, order){
    if(arr.length < 1) return arr;
    let desc = order === 'desc';
    let length = arr.length;
    let times = 1;
    while (times < length){
        let i = 0;
        let tmp;
        let changed = false;
        while(i < length -1){
            if(arr[i] > arr[i+1]){
                tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                changed = true
            }
            i++
        }
        if(!changed) break;
        times++
    }
    return !desc ? arr : arr.reverse()
}
