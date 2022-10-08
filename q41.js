//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//magician array
const magician = ["sarim", "huzaifa", "moosa", "ahmed", "ali"];
// show magicians function
function show_magicians(magician) {
  mag_length = magician.length;
  //loop to print the names of magicians
  for (var i = 0; i < mag_length; i++) {
    console.log(magician[i]);
  }
}
//calling the function passing the array as arguements
show_magicians(magician);
