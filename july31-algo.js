// Beau
// Carver
// Chase
// Rodney Mills
// Rob Moore

function pushWithoutPush(arr, num){
    arr[arr.length] = num; 
    console.log(arr);
}

pushWithoutPush([1,2], 3);

function pushToFront(arr, num) {
    var newArr = []
    newArr[newArr.length] = num
    for (var i = 0; i < arr.length; i++) {
        newArr[newArr.length] = arr[i]
    }
    console.log(newArr)

}

pushToFront([1, 2], 3);

