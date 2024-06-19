function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] == -1){
            min = i;
        }
    }
    return min;
}
let arr1 = [1,3,-1,4,5,6];
 let min = minArray(arr1);
 alert(min);