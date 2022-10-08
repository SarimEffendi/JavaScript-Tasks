/**More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
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
