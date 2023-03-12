//#1 URLs cannot have spaces
//Replace spaces in strings with %20
//Cannot use replace() method or regular expressions to solve this problem
//Solve the problem with and without recursion.

//Input:"Jasmine Ann Jones"
//Output:"Jasmine%20Ann%20Jones"

//Is there a maximum or mininum string length requirement?
//What output would you like if the user does not enter anything( input = null or "")?
//What output would you like if the user enters a single character or a series of characters with spaces?
//What output would you like if the user enters a one word string with no spaces?

//Without recursion
function turnStringsToUrl(inputString) {

  const inputStringArray = inputString.split(" ");
  
  const url = inputStringArray.join("%20");

  return url;
}


//with recursion
function turnStringsToUrl2(inputString) 
{
  const inputStringLength = inputString.length;

  if(inputString.length === 1)
  {
    if( inputString.substring(0) === " ")
    {
      return "%20";
    }
    else
    {
      return inputString.substring(0);
    }
  }
  else
  {
    if( inputString.substring(inputStringLength - 1) === " " )
    {
      return turnStringsToUrl(inputString.substring( 0, inputStringLength - 1)) + "%20";
    }
    else
    {
      return turnStringsToUrl(inputString.substring( 0, inputStringLength - 1)) + inputString.substring(inputStringLength - 1);
    }
  }
}

const inputString = "Jasmine Ann Jones";
const inputString2 = "Jasmine  Ann  Jones ";
console.log(turnStringsToUrl(inputString));
