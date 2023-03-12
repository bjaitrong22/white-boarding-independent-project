/*
#3 Compressing Strings
algorithm for taking a string with repeated characters and compressing them using a number to show how many times the repeated character has been compressed.

solve with and without recursion.

example:

input: "aaabccdddda"
output:"3ab2c4da"

questions:
1. how should empty strings and spaces be handle?
2. if string is a number, how it should be handle?
*/

//Solution Without recursion
function compress(inputString){
  let compressedString = "";
  let count = 1;

  for(let i = 0; i < inputString.length; i++){
    let currentString = inputString[i];
    let nextString = inputString[i+1];

    if(currentString === nextString){
      count++;
    }
    else{

      if(count == 1){
        compressedString += currentString;
      }
      else{
        compressedString += count.toString() + currentString;
      }
      
      count = 1;
    }
  }

  return compressedString;
} 

//Solution with recursion
//base case is when index === inputString length -1
function compressWithRecursion(inputString,compressedString = " ",index = 0, count=1) {
  let currentElement = inputString[index];
  let nextElement = inputString[index + 1];


  if((index < inputString.length) && (currentElement === nextElement)){

    return compressWithRecursion(inputString,compressedString,index+=1,count+=1);
  }
  else if(index < inputString.length){

    if(count == 1){
      compressedString += currentElement;
    }
    else{
      compressedString += count.toString() + currentElement;
    }

    return compressWithRecursion(inputString,compressedString,index+=1);
  }
  else{
    return compressedString;
  } 
}


let inputString ="aaabccdddda";
let inputString2="BBBBBbbbtYYIi";

console.log(compress(inputString));