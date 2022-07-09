function MinToFront(arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    for (var x = index; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}