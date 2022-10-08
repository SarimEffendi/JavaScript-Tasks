/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

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
  `Greetings ${invitations[3]} I would like to invite you to dine with me.`
);

console.log(`${invitations[3]} cant make it to dinner`);

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
  `Greetings ${invitations[3]} I would like to invite you to dine with me.`
);
