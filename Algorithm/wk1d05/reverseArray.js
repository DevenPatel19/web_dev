// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...
// Solution 1####################################

var array = [1,2,2,1];/*copy*/

var reversedArray = [];

for(var i = array.length - 1; i >= 0; i--) {
    var valueAtIndex = array[i];
    reversedArray.push(valueAtIndex);
}
// we expect to get back...

// ["e", "d", "c", "b", "a"];

console.log(reversedArray(array));


// Solution 2 JS Method usage ###########################################

var arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// Solution 3 outside in methodology###########################################
// check outside values and compare from each side

for ( var i=0; i<(arr.length/2); i++) {
    if(array[i] == array[arr.length-(1+i)]){
    return true;
} else{
    return false;
    }
}
