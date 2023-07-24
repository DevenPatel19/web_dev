# day 3

// RIOT WALK
// R read/restate
// I Input - an array of ints
// O output - an int that equals the number of the inputs that meet qualifier(the number of positive ints)
// T talk
// WALK - walk out the process

## Always isSunny

```js
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

```

|variable|value|
|---|---|
|isSunny||
|temperature||
|isRaining||
|whatToBring||

```bash

```

## prepare for downcount

```js
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
    
console.log("liftoff!");

```

|variable|value|
|---|---|
|i||

```bash

```