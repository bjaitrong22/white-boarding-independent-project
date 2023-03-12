/* 
#5 Checking for Uniqueness
function determines whether all the elements in a string is unique- returns either true or false.
Cannot convert the string into an array or use array methods

example: 
input: "hello"
outut: false

input:"copyright"
output:"true"

questions:
1. if user inputs an empty string, how should this be handeled?
2. is there a limit to the string length.
*/

function unique(inputString) {

let uniq = "true";

for( let i = 0; i < inputString.length ; i++)
{
  for( let j = i + 1; j < inputString.length; j++)
  { 
    if(inputString[i] === inputString[j])
    { 
      uniq = "false"
    }
  }
}

return uniq;
}

let input1 = "hello";
let input2 = "true";
let input3 = "12342";

console.log(unique(input3));