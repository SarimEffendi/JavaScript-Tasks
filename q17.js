/**Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 * 
 */
const invitations = ["Sir Zia", "Sir Daniyal", "Sir Qasim", "Miss Hira"];

console.log(
  `Greetings ${invitations[0]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[1]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[2]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[3]} I would like to invite you to dine with me.\n`
);

console.log(`${invitations[3]} cant make it to dinner\n`);

invitations[3] = "Sir zeeshan";

console.log(
  `Greetings ${invitations[0]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[1]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[2]} I would like to invite you to dine with me.`
);
console.log(
  `Greetings ${invitations[3]} I would like to invite you to dine with me.\n`
);

console.log("We found a bigger table and now we can host more guests\n");
//unshift method used to insert element at the beginning of array.
invitations.unshift("Miss Hira");
//splice method can remove and replace element in array and can also used to insert element in the middle of array.
invitations.splice(2, 0, "Sir Asim");
//push method used to insert element after the last element in array
invitations.push("Sir Ali");
//for loop to traverse through the array and print
for (var i = 0; i <= 6; i++) {
  console.log(
    `Greetings ${invitations[i]} I would like to invite you to dine with me.`
  );
}

console.log(
  "\nSorry! We just found out that our new table wont arrive in time so I can only invite two people"
);

console.log("\n");
for (var i = 6; i > 1; i--) {
//pop method removes the last element from an arrray
  invitations.pop();
  console.log("Sorry You are not invited as our table is full");
}
console.log("\n");
console.log(
  `Greetings ${invitations[0]} You are still invited for dinner.`
);
console.log(
  `Greetings ${invitations[1]} You are still invited for dinner.\n`
);
//popped the last two items of array
invitations.pop();
invitations.pop();

console.log(invitations);
console.log("list is empty");

