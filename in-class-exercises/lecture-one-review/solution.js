//Write a function that takes in a string as a parameter. Return the string as an array of strings with a length of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore.
//* 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

// Function takes a parameter, which is a string
// We'll take the string and convert it an array that consists items, which are 2 character strings. Return that array. []
// If the last item of the array only contains one character, add an underscore as the second character []

var dummyString = "dijkstras";
// ["di", "jk", "st", "ra", "s_"]


//SOLUTION 1:
function arrayOfStrings1(string) {
  var array = [];
  for (var i = 0; i < string.length; i = i + 2) {
    //can also be written as i+=2
    var newItem = string[i] + string[i + 1];

    if (string[i + 1] == undefined) {
      newItem = string[i] + "_";
    }

    array.push(newItem);
  }

  return array;
}

//SOLUTION 2:
function arrayOfStrings2(string) {
  var array = [];

  var stringLength = string.length;

  for (var i = 0; i < string.length; i = i + 2) {
    //can also be written as i+=2
    var newItem = string[i] + string[i + 1];
    array.push(newItem);
  }

  if (stringLength % 2 == 1) {
    array[array.length - 1] = string[string.length - 1] + "_";
  }

  return array;
}


console.log("test1:", arrayOfStrings1(dummyString));
console.log("test2:", arrayOfStrings2(dummyString));
