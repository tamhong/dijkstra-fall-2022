//Write a function that takes in a string as a parameter. Return the string as an array of strings with a length of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore.
//* 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

// Function takes a parameter, which is a string [CHECK]
// We'll take the string and convert it an array that consists items, which are 2 character strings. Return that array. []
// If the last item of the array only contains one character, add an underscore as the second character []

var dummyString = "dijkstras";
// ["di", "jk", "st", "ra", "s_"]

function arrayOfStrings (string) {
    var array = [];
    for (var i = 0; i < string.length; i = i+2) { //can also be written as i+=2
        var newItem = string[i] + string[i+1];
        array.push(newItem);
    }
}