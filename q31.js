/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
 */

var usernames = ["ali", "ahmad", "admin", "zeeshan", "syed"];
if (usernames != undefined) {
  console.log("User array is not empty, empty the the list first ");
}
//checking the length of array
console.log(usernames.length)
//loop for popping elements from array
for (var i = usernames.length-1; i >=0; i--) {
  usernames.pop();
}

console.log(usernames[0])
if(usernames.length==0){
    console.log("We need to find some users!");
}











