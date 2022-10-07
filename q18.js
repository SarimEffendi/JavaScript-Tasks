/**Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 *  */ 

const places = ["Paris","New York","Makkah","Medina","Toronto"];
//original array
console.log(places);
//duplicate of original array
const aplaces=[];
//copying the original array elements in duplicate array
for(var i=0;i<5;i++){
    aplaces[i]=places[i];
}
//printing duplicate array
console.log(aplaces);
//printing original array
console.log(places);
//alphabetically sorting the duplicate array 
console.log(aplaces.sort());
//printing original array
console.log(places);
//reverse the duplicate array
console.log(aplaces.reverse());
//original array
console.log(places)
//Reverse order of original array
console.log(places.reverse())
//Reverse original again
console.log(places.reverse())
//Sort original alphabetically
console.log(places.sort())
//Alphabetically reverse original
console.log(places.reverse())



