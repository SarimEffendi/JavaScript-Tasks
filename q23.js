/**Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

let vehicle={
    type:"Car",
    name:"corolla",
    color:"Black",
    model:2012
}
let person={
    gender:"male",
    name:"Muhammad Sarim",
    age:20,
    subject:"Metaverse"
}
let subject = {
    subject1:"Metaverse",
    duration:"1 year"
}

console.log("Is vehicle name == 'corolla'? I predict True.");
console.log(vehicle.name == 'corolla');

console.log("Is vehicle type == 'bike'? I predict False.");
console.log(vehicle.type=="bike");

console.log("Is vehicle color == 'yellow'? I predict False.");
console.log(vehicle.color == 'yellow');

console.log("Is vehicle model == 2011 ? I predict False.");
console.log(vehicle.model==2011);

console.log("Is person gender == 'male' ? I predict True.");
console.log(person.gender=="male");

console.log("Is person age == 21 ? I predict False.");
console.log(person.age==21);

console.log("Is person name == 'Muhammad Sarim' ? I predict True.");
console.log(person.name=="Muhammad Sarim");

console.log("Is person subject == 'Metaverse' && Is subject's subject1 == 'Metaverse' ? I predict True.");
console.log(person.subject=="Metaverse"&&subject.subject1=="Metaverse");

console.log("Is subject duration == '2 years' ? I predict False.");
console.log(subject.duration=="2 years");

console.log("Is person name == 'Muhammad Sarim' && Is person age == 20 && is person subject =='Metaverse' && Is vehicle name = 'Corolla' && Is subject subject1 == 'metaverse'||Is Subject duration = '3 months' i predict true");
console.log(person.name=="Muhammad Sarim"&&person.age==20&&person.subject=="Metaverse"&&vehicle.name == "corolla"&& subject.subject1=="Metaverse"||subject.duration=="3 months");
















