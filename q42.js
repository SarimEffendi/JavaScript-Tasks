//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//same as question 41
const magician = ["sarim", "huzaifa", "moosa", "ahmed", "ali"];
function show_magicians(magician) {
  mag_length = magician.length;
  for (var i = 0; i < mag_length; i++) {
    console.log(magician[i]);
  }
}
//make great function print the names of magicians with "the great " at the end
function make_great(magician) {
  for (var i = 0; i < magician.length; i++) {
    console.log(`${magician[i]} the Great`);
  }
}
console.log("make_great function: ");
//calling make great function
make_great(magician);
console.log("show_magicians function: ");
//calling show magician function
show_magicians(magician);
