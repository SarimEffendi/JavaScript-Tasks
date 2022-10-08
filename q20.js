/**Think of something you could store in a array. For example, you could make a list of mountains,
 *  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a
 *  list containing these items.
 */

const cities = ["Karachi", "Kitchener", "Lahore", "Islamabad", "Hyderabad"];
const countries = ["Pakistan", "Canada", "Usa"];
const subjects = ["MetaVerse", "JavaScript", "TypeScript"];
const cars = ["Civic", "Revo", "Corolla"];
const bikes = ["Yamaha", "Suzuki", "Bmw"];
var list = [];
//concat method is used to concate arrays.
list = list.concat(cities, countries, subjects, cars, bikes);
console.log(list);
