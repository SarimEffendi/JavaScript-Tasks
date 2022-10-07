/**Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
 * print a message indicating the number of people you are inviting to dinner.
 */

//copied from exercise 16
 const invitations = ["Sir Zia","Sir Daniyal","Sir Qasim","Miss Hira"];

 console.log(`Greetings ${invitations[0]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[1]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[2]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[3]} I would like to invite you to dine with me.\n`);
 
 console.log(`${invitations[3]} cant make it to dinner\n`);
 
 invitations[3]="Sir zeeshan";
 
 console.log(`Greetings ${invitations[0]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[1]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[2]} I would like to invite you to dine with me.`);
 console.log(`Greetings ${invitations[3]} I would like to invite you to dine with me.\n`);
 
 console.log("We found a bigger table and now we can host more guests\n");
 //unshift method used to insert element at the beginning of array.
 invitations.unshift("Miss Hira");
 //splice method can remove and replace element in array and can also used to insert element in the middle of array.
 invitations.splice(2,0,"Sir Asim");
 //push method used to insert element after the last element in array
 invitations.push("Sir Ali");
 //for loop to traverse through the array and print
 for(var i=0;i<=6;i++){
     console.log(`Greetings ${invitations[i]} I would like to invite you to dine with me.`);
 }


 //exercise 19
//prints the length of array
 console.log("\nThe total number of invitations are: "+invitations.length);