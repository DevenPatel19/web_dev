# day 2

## lesson 1 - Predict the output

```js
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");
```

|variable|value|
|---|---|
|a|25, 12, "hello"|

```bash
6
hello hello
```

## lesson 2 - Predict Loops

```js
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
console.log("outside of the loop " + i);
```

|variable|value|
|---|---|
|i||

```bash

```

```js
function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}
getTotal([1, 3, 5]);

```

|variable|value|
|---|---|
|i|0,1,2|
|sum|1,4,|
|arrayOfNumbers|1,3,5|
|arrayOfNumbers.length|3|

```bash
the current sum is: 2 
the current sum is: 5 
the current sum is: 10
the total is: 10 
```
