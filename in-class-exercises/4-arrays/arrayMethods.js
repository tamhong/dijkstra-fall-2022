const animals = ["pigs", "goats", "sheep"];

// add another animal to the end of array and console log the new array

animals.push("dog");

console.log(animals);

// store the last animal from the array  in a new variable and console log the new array and new variable

const newAnimals = animals.pop();

console.log("animals:", animals);
console.log("newAnimals:", newAnimals);

// store the first animal from the array  in a new variable and console log the new array and new variable

const farm = animals.shift();

console.log("farm:", farm);
console.log("animals:", animals);

// add another animal to the beginning of the array and console log the new array

animals.unshift("bird");

console.log("animals:", animals);

const animals2 = animals.push("dogs", "cats", "rhinos");

console.log("animals2:", animals);

console.log("slice:", animals.splice(2, 3));

console.log(animals);
