/* 
#2 Remove duplicates from an array
First solution should not use a function like filter() to solve this prompt.
After solving it without filter(), demonstrate how it can be solved wiht filter().
Solve the problem with and without recursion.

example: 
Input: [7,9,"hi",12,"hi",7,53]
Output: [7,9,"hi",12,53]

questions:
1. Is there a size limit on the inpur Array?
2. How would you like to handle empty input Array?
3. Are the array element limited to just strings and integers?
 */


//Solution 1: using set() method
function arrayDeduping1(inputString){

let dedupedArray = [...new Set(input)];

return dedupedArray;
}

//Solution 2: using forEach and includes() method
function arrayDeduping2(inputArray)
{
  let dedupedArray2 = [];

  inputArray.forEach( (element) => {
    if(!dedupedArray2.includes(element))
    {
      dedupedArray2.push(element);
    }
  });

  return dedupedArray2;
}  

//Solution 3: using for loop, Map(), Array,from() method
function arrayDeduping3(inputArray)
{
  const inputArrayLength = inputArray.length;
  let dedupedElementsMap = new Map();

  for(let i = 0; i < inputArrayLength; i++)
  {
    if(!dedupedElementsMap.has(inputArray[i]))
    {
      dedupedElementsMap.set(inputArray[i], i)
    }
  }
  
  const dedupedArray = Array.from(dedupedElementsMap.keys())
  return dedupedArray;
}

// Solution With Recursion
function arrayDedupingRecursion(inputArray,dedupedArray = [], index = 0)
{
  const element = inputArray[index];
  
  if(!dedupedArray.includes(element) && index < inputArray.length)
    {
      dedupedArray.push(element);

      return arrayDedupingRecursion(inputArray,dedupedArray, index+= 1);
    }
    else if( index < inputArray.length)
    {
      return arrayDedupingRecursion(inputArray,dedupedArray,index+= 1);
    }
    else
    {
      return dedupedArray;
    }
}

//Solution using filter() method and Array indexOf method
function arrayDedupingWithFilter(inputArray)
{
  const dedupedArray = inputArray.filter( (element,index,array) => {
    return array.indexOf(element) === index;
  });

  return dedupedArray;
}


const inputArray = [7,9,"hi",12,"hi",7,53];
console.log("my dedupedArray: " + arrayDedupingRecursion(inputArray));