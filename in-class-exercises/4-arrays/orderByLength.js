//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//For example, if this array were passed as an argument:

//["Telescopes", "Glasses", "Eyes", "Monocles"]

//Your function would return the following array:

//["Eyes", "Glasses", "Monocles", "Telescopes"]

//All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//TOOLS WE'LL BE USING: interative for loop, conditionals, push, length

let exampleArray = ["Telescopes", "Glasses", "Eyes", "Monocles"];
//["Eyes", "Glasses", "Monocles", "Telescopes"]

function eyeDocFuncStuff (array1) {
  for(let i = 0; i < array1.length - 1; i++) {
    console.log("i:", i, "array1:", array1)
    let firstItemLength = array1[i].length;
    let secondItemLength = array1[i+1].length;
    if (firstItemLength > secondItemLength) {
      // PSEUDOCODE
      // take first item and put it somewhere temporary
      // take second item, put it in the place of first item
      // take first item from temporary place and put it in second item previous place
      let temp = array1[i];
      array1[i] = array1[i+1];
      array1[i+1] = temp;
    } 
  }
  console.log("end of func:", array1);
}

eyeDocFuncStuff(exampleArray);