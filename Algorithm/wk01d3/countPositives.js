var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// RIOT WALK
// R read/restate
// I Input - an array of ints
// O output - an int that equals the number of the inputs that meet qualifier(the number of positive ints)
// T talk
// WALK - walk out the process

// your code here!

function countPositivesInArray(arrParam) {
    // create var for count
    var countPositives = 0;
    // loop through array
    for (var i = 0; i<arrParam.length; i++) {
        // compare element to zero
        if (arrParam[i] > 0) {
            // if greater than zero inc count
            countPositives++;
        }
    }
}

countPositivesInArray(numbers)
// log the number of positives with the strings
console.log("there are " + countPositives + " positive values");