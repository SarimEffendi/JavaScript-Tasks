/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 *  The function should have one parameter that collects as many items as the function call provides,
 *  and it should print a summary of the sandwich that is being ordered. Call the function three times,
 *  using a different number of arguments each time.
 */
//two arrays with items for sandwich
const items1 = ["Mayo", "chicken", "ketchup"];
const items2 = ["Mayo", "beef", "ketchup", "mustard sauce"];
//when you want to take multiple parameters you use ...and then parameter name in javascript
function sandwiches(...params) {
  for (var i = 0; i < params.length; i++) {
    console.log(`Your sandwich has: ${params[i]}`);
  }
}
//passing arrays in arguments
sandwiches(items1);
sandwiches(items2);
//passing multiple values in arguments
sandwiches("mayo", "honey mustard sauce", "mutton", "spicy sauce", "bbq sauce");
