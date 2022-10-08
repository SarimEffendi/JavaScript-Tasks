/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure
all the information was stored correctly.
 * 
 */

//was unsure about this question so i used two approaches for this question
function car_info1(
  manufacturer,
  model,
  color = " ",
  airbags = true,
  number_of_airbags
) {
  var information = {
    manufacturer: manufacturer,
    model: model,
    color: color,
    airbags: airbags,
    number_of_airbags: number_of_airbags,
  };
  return information;
}
var car1 = car_info1("Toyota", 2012, (color = "black"));
var car2 = car_info1("Honda", 2020, (color = "black"), (airbags = true));
var car3 = car_info1(
  "mercedes",
  2020,
  (color = "white"),
  (airbags = true),
  (number_of_airbags = 8)
);
console.log(car1);
console.log(car2);
console.log(car3);

function car_info(manufacturer, model, ...params) {
  var information = {
    manufacturer: manufacturer,
    model: model,
    params: params,
  };
  return information;
}

var car4 = car_info("Toyota", 2012, (color = "black"), (airbags = false));
var car5 = car_info("Honda", 2020, (color = "Yellow"));
var car6 = car_info(
  "mercedes",
  2020,
  (color = "white"),
  (airbags = true),
  (number_of_airbags = 8)
);
console.log(car4);
console.log(car5);
console.log(car6);
