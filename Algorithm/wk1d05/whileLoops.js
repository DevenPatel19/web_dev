// While loops
// We have previously worked with for loops, how are while loops different?
// solution
// you can increment and decrement

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
