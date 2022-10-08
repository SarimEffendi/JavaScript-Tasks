/**Animals: Think of at least three different animals that have a common characteristic.
 * Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 * • Modify your program to print a statement about each animal, such as A dog would make a great pet.
 * • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 */

//same as previous task array and loop to print its element
const animals = ["cat", "dog", "goat", "sheep", "cow"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//printing array elements with a message
for (var i = 0; i < animals.length; i++) {
  console.log(`${animals[i]} would make a great pet`);
}
console.log(
  "All these animals are pet animals not wild, All these animals have 4 legs, All these animals are loving animals"
);
