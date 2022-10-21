//Your goal is to implement a difference function, which subtracts one list from another.

//It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5,000,000 elements.

//arrayDiffVeryFast([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from another:

// arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]

// PSEUDOCODE:

// Lengths of each array can be up to 5,000,000
// The function will have 2 parameters - each of them will be an array of integers from 0 to 25
// We can either edit the original first array itself or make a new one

//CURRENT TOOL BOX: for loops, conditionals, pop, push, shift, unshift, splice, slice

//WHAT MIGHT WE USE?: for loop, splice, slice

function arrayDiffVeryFast (array1, array2) {
    for(let i= array1.length - 1; i >= 0; i--, console.log(array1)) {
      //item exists in array2
      if (array2.indexOf(array1[i]) >= 0) {
        //remove item from array1
        array1.splice(i, 1);
      }
    }
    
    return array1;
  };
  
  console.log(arrayDiffVeryFast([1, 2, 3, 4, 0], [1, 2, 3, 4]))