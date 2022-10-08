// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var name = "Muhammad sarim";
//used touppercase and tolowercase methods
console.log("Upper case: " + name.toUpperCase());
console.log("Lower case: " + name.toLowerCase());
//declared a function with string as a parameter
function titleCase(string) {
  // splits the string and convert to lowercase
  string = string.toLowerCase().split(" ");
  //for loop to convert the first character to uppercase
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  //join the string
  return string.join(" ");
}
console.log("Tile Case: " + titleCase(name));
