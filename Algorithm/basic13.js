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
    for(var i = 0; i < 256; i++) {
        sum = sum + i;
        console.log(sum);
    }
}

// printsum255()

// ############################################################################

// Find and Print Max
// Given an array, find and print its largest element.

arr = [13,2,3,4,5,8,9];

function findMax() {
    max = arr[0];
    for(var i = 1; i < arr.length; i++)
        if(arr[i] > max){
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
    for(var i = 0; i < 256; i++){
        if(i % 2 !== 0){
            oddarr.push(i);
        }
    }
    console.log(oddarr);    }

oddArray255();
// ############################################################################

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.


// ############################################################################

// Max, Min, Average
// Given an array, print the max, min and average values for that array.


// ############################################################################

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.



// ############################################################################

// Print Odds 1-255
// Print all odd integers from 1 to 255.

// ############################################################################

// Iterate and Print Array
// Iterate through a given array, printing each value.

// ############################################################################

// Get and Print Average
// Analyze an array’s values and print the average.

// ############################################################################

// Square the Values
// Square each value in a given array, returning that same array with changed values.


// ############################################################################

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

// ############################################################################

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.

// ############################################################################