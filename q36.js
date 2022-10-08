//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//defined a functiion with two parameters
function make_shirt(size, message) {
  //this statement will print
  console.log(
    `The size of shirt is: ${size} and the message printed on it is: ${message}`
  );
}
//taking arguments in the parameters
make_shirt("large", "This shirt is large sized");
make_shirt("medium", "This shirt is medium sized");
