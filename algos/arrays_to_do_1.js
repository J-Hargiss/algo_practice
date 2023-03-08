//1 Push To Front
function pushFront(arr, val) {
    for (var i=arr.length; i >= 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val

    return arr
}
//console.log(pushFront([5,7,2,3], 8))

//2 Pop Front
function popFront(arr) {
    i = arr[0]
    for (var x=0; x < arr.length; x++){
        arr[x] = arr[x+1]
    }
    arr.length = arr.length-1
    console.log(arr)
    return i
}
//console.log(popFront([4,5,7,9]))

//3 Insert At
function insertAt(arr, index, value) {
    for (var i = arr.length; i >= index; i--){
        arr[i] = arr[i-1]
    }
    arr[index]= value
    return arr
}
//console.log(insertAt([9,33,7], 1, 42))

//4 Remove At
function removeAt(arr, index) {
    save = arr[index]
    for (var i = index; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    console.log(arr)
    return save
}
console.log(removeAt([1000,3,204,77],1))