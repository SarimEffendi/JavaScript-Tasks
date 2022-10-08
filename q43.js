/**Unchanged magician: Start with your work from Exercise 40.
 *  Call the function make_great() with a copy of the array of magician’ names.
 * Because the original array will be unchanged, return the new array and store it in a separate array.
 *  Call show_magician() with each array to show that you have one array of the original names and one
 * array with the Great added to each magicians’s name.
 */
const magician = ["sarim", "huzaifa", "moosa", "ahmed", "ali"];
//array to copy the magician array
copy_magician = [];
//copying the magician array into a new array
for (var i = 0; i < magician.length; i++) {
  copy_magician[i] = magician[i];
}

function make_great(magicians) {
  for (var i = 0; i < magicians.length; i++) {
    console.log(`${magicians[i]} the Great`);
  }
}

function show_magician(magicianArray) {
  for (var i = 0; i < magicianArray.length; i++) {
    console.log(magicianArray[i]);
  }
}
//giving make great copy array as arguments
make_great(copy_magician);
console.log("\n");
show_magician(magician);
console.log("\n");
show_magician(copy_magician);
