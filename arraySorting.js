/*
#5 Write an algorithm that sorts an array without usint the sort() method.
May implement one of the given algorith or your own:
Quick Sort, Merge Sort, Heap Sort, Insertion sort, Bubble sort, Selection sort

example:

input: [9,2,7,12]
output:[2,7,9,12]

question:
1. User input will be required and will be numbers.
*/

//Helper function 
function swapElements(array, index1, index2) {
  array[index1] = array.splice(index2,1,array[index1])[0];
  return array;
};

//Sorting function, select sort
function mySelectionSort(inputArray){
  
  for(let i = 0; i < inputArray.length ; i ++)
  {
    for(let j = i+1; j < inputArray.length; j++)
    {
      if( inputArray[j] < inputArray[i])
      {
        inputArray = swapElements(inputArray, i, j);
      }
    }
  }

  return inputArray;
}

let myArray = [9,2,7,12];
console.log(mySelectionSort(myArray));