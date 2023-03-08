//1 Remove Blanks from given string
//loop through string and return characters that are NOT spaces
function removeBlanks (str){
    var newString = " "
    for (var i = 0; i < str.length; i++){
        if (str[i] != " "){
            newString += str[i]
        }
    }
    return newString
}
//console.log(removeBlanks("Pl ayTha tF u nkyM usi c "))

//2 Get Digits
//loop through string and add ONLY integers to a new string 
function getDigits (str) {
    var justDigits = " "
    for (var char in str) {
        if(!isNaN(str[char])){
            justDigits += str[char]
        }
    }
    return justDigits
}
//console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

//3 Acronyms
//loop through string, pull first letters of each word and return those, CAPITALIZED
function acronym(str) {
    var newArray = str.split(" ")
    var acronymString = ""
    for (var i in newArray) {
        if(newArray[i].length > 0){
            acronymString += newArray[i][0].toUpperCase()
        }
    }
    return acronymString
}
//console.log(acronym(" there's no free lunch - gotta pay yer way. "))

//4 Count Non-Spaces
//loop through string for non-space characters and count them
function countNonSpaces(str) {
    var nonCount = " "
    for (var char in str) {
        if (str[char] != " ") {
            nonCount += str[char]
        }
    }
    return nonCount.length-1
}
//console.log(countNonSpaces("Honey pie, you are driving me crazy"))

//5 Remove Shorter Strings
//loop through array counting length of each string
//return new array of strings longer than or equal to given value
function removeShorterStrings(arr, val) {
    var newArray = []
    var indexSpot = 0 
    for (var num in arr) {
        if (arr[num].length >= val){
            newArray[indexSpot++] = arr[num]
        }
    }
    return newArray
}
//console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
