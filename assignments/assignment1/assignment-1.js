// Instructions
// Create a JavaScript file and name it assignment-1.js. Inside this file,
// Create a variable named `numbers` and assign an empty array to it.
// Using a for-loop and the Array push() method, insert the integers (numbers) 0 to 9 into the array you named numbers.
// Test that you used the array push method correctly by console logging the first item in the array.
// Console log the last item in the array.
// Create another variable named car and assign an empty object to it.
// Give the object a property called colour and assign it the value of "blank".

let numbers = new Array;

for (i=0; i<=9; i++) {
     numbers.push(i);
}

console.log(numbers[0]);
console.log(numbers[9]);

let car = new Object;

car.colour = "blank";

console.log(car.colour);
