/**City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
 */
//function with a return statement returning the parameters
function city_country(city, country) {
  return `${city},${country}`;
}
//print statement to print the return of function
console.log(city_country("karachi", "pakistan"));
console.log(city_country("dubai", "UAE"));
console.log(city_country("melbourne", "australia"));
console.log(city_country("toronto", "canada"));
console.log(city_country("washington", "USA"));
