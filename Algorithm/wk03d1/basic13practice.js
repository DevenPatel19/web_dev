// *********************************THE BASIC 13****************

// The foundation “Basic 13” algorithm challenges.
// Print 1-255
// Print all the integers from 1 to 255.

function print255() {
    for (var i = 0; i < 256; i++) {
        console.log(i);
    }
}

// print255();

// ############################################################################

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

function printsum255() {
    var sum = 0;
    for (var i = 0; i < 256; i++) {
        sum = sum + i;
        console.log("current number is " + i, "Current Sum is " + sum);
    }
}

// printsum255()

// ############################################################################

// Find and Print Max
// Given an array, find and print its largest element.

arr = [13, 2, 3, 4, 5, 8, 9];

function findMax() {
    max = arr[0];
    for (var i = 1; i < arr.length; i++)
        if (arr[i] > max) {
            max = arr[i];
        }
    console.log(max);
}

// findMax();

// ############################################################################

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

function oddArray255() {
    var oddarr = []
    for (var i = 0; i < 256; i++) {
        if (i % 2 !== 0) {
            oddarr.push(i);
        }
    }
    console.log(oddarr);
}

// oddArray255();

// ############################################################################

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
arr = [13, 2, 3, 4,]
y = 4

function greaterthanY() {
    for (var i = 0; i < arr.length; i++) {
        if (y > arr[i]) {
            console.log(arr[i]);
        }
    }
}

// greaterthanY()


// ############################################################################

// Max, Min, Average
// Given an array, print the max, min and average values for that array.

arr = [1, 2, 3, 4]
max = arr[0];
min = arr[0];
sum = 0;

function maxMinAvg() {
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log("Max is " + max, "Min is " + min, "Avg is " + sum/arr.length);
}

// maxMinAvg()

// ############################################################################

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.

function swapStringFroArrayNeg(arr){
    for( var i =0; i< arr.length; i++){
        if(arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
}

// swapStringFroArrayNeg([-1,-10,1,2,3,4,5])

// ############################################################################

// Print Odds 1-255
// Print all odd integers from 1 to 255.

function printOdds1to255() {
    for( var i = 1; i< 256; i++){
        if (i%2 != 0){
            console.log(i + " is odd.")
        }
    }
}

// printOdds1to255()

// ############################################################################

// Iterate and Print Array
// Iterate through a given array, printing each value.

function printArray(arr) {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// printArray([1,2,3,4,5,6])

// ############################################################################

// Get and Print Average
// Analyze an array’s values and print the average.

function printAvg(arr){
    var sum = 0;
    for ( var i = 0; i< arr.length; i++){
        sum += arr[i];  
    }
    console.log(sum/arr.length);
}

// printAvg([2,4])

// ############################################################################

// Square the Values
// Square each value in a given array, returning that same array with changed values.

arr = [1,2,3,4,5,6,7,]

function squareValue() {
    for (var i = 0; i < arr.length; i++)   {
        squaredValue = arr[i]**2;
        arr[i] = squaredValue;
    }
    console.log(arr);
}

squareValue()

// ############################################################################

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.



// ############################################################################

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.

// ############################################################################