var listOfNumbers;
var numbers = [12, 10, 15, 11, 14, 13, 16, 9, 6, 3, 17, 20];

function shuffle(array) {
    var holder; 
    for (var i = 0; i < array.length; i++){
    randomIndex = Math.floor( Math.random()*array.length)
    holder = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = holder;
    }
    listOfNumbers = array
    document.getElementById("listOfNumbers").textContent = listOfNumbers
    console.log(array)    
}


function bubbleSort(array) {
   var next2last = array.length - 1,
   holder,
   swapOccured,
   nextIndex;
array.some(function(){
    for(var i = 0; i < next2last; i++){
        nextIndex = i + 1;
        if(array[i] > array[nextIndex]){
            holder = array[nextIndex];
            array[nextIndex] = array [i];
            array[i] = holder;
            swapOccured = true;
        }
    }
    if (!swapOccured){
        return true
    }
    return false
})
   
    listOfNumbers = array
    document.getElementById("listOfNumbers").textContent = listOfNumbers
    console.log(array)
}

function insertionSortAscending(array, ascending){
    var length = array.length
    if (ascending === true){
    for(var i = 1; i < length; i++){
        var temp = array[i];
        var j = i - 1;
        for(;j >= 0 && array[j] > temp; --j){
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    listOfNumbers = array
    document.getElementById("listOfNumbers").textContent = listOfNumbers
    } else {
        insertionSortDecending(array)
    }
};
function insertionSortDecending(array){
    var length = array.length
    for(var i = 1; i < length; i++){
        var temp = array[i];
        var j = i - 1;
        for(;j >= 0 && array[j] < temp; --j){
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    
    listOfNumbers = array
    document.getElementById("listOfNumbers").textContent = listOfNumbers
};


function arraySum(i) {
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    var sum = 0;
    for (var index = 0; index < i.length; index++){
        if(Array.isArray(i[index])){
            while(Object.keys(i[index]) === 0){
                console.log(Object.keys(i[index]))    
            }
            console.log(Object.keys(i[index]))
            tempArray = i[index]
            for (var k = 0; k < i[index].length; k++){
                if(typeof(tempArray[k])==="number")
                sum += tempArray[k];
                }
            }
        if(typeof(i[index])==="number"){
            sum += i[index];
        }
    }
    return sum;
    
}

function arraySum(i) {
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    var sum = 0;
    for (var index = 0; index < i.length; index++){
        if(Array.isArray(i[index])){
            tempArray = i[index]
            if(Array.isArray(tempArray)){
                arraySum(tempArray)
            }
            for (var k = 0; k < i[index].length; k++){
                if(typeof(tempArray[k])==="number")
                sum += tempArray[k];
                }
            }
        if(typeof(i[index])==="number"){
            sum += i[index];
        }
    }
    return sum;
}
console.log(arraySum([[[[[[[[[[1]]]]]]]]],1]))

function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
    
    var longest = "";
    for (var index = 0; index < i.length; index++){
        if(typeof(i[index]) === "string"){
            if (longest.length < i[index].length){
                longest = i[index]
            }
        }
    }
    return longest
}

function getFileExtension(i) {
    
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    
    if (i.split(".")){
        var extension = "";
        for (var index = 0; index < i.length; index++){
            if (i[index]==="."){
                for (var j = index+1; j<i.length; j++){
                    extension += i[j]
                }
            }
        }
        return extension
    } else {
        return false
    }
}
