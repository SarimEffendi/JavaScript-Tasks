/**More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

//Equality and Inequality string
var str = "commit"
console.log("Is str == commit? I predict True.")
console.log(str == "commit")
console.log("Is str == Commit? I predict False.")
console.log(str == "Commit")

//Lowercase
var value="Cycle"
console.log("Is lower case value == cycle? I predict True.")
console.log(value.toLowerCase() == "cycle")
console.log("Is lowercase value == Cycle I predict False.")
console.log(value.toLowerCase == "Cycle")

//number check
var num = 12
console.log("Is num == 12? I predict True.")
console.log(num==12)

console.log("Is num == 8? I predict False.")
console.log(num==8)

console.log("Is num != 16? I predict True.")
console.log(num!=16)

console.log("Is num != 12? I predict False.")
console.log(num != 12)

console.log("Is num < 13? I predict True.")
console.log(num < 13)

console.log("Is num < 12? I predict False.")
console.log(num < 12)

console.log("Is num > 3? I predict True.")
console.log(num > 3)
console.log("Is num > 12? I predict False.")
console.log(num > 12)

console.log("Is num <= 12? I predict True.")
console.log(num <= 12)

console.log("Is num <= 2? I predict False.")
console.log(num <= 2)

console.log("Is num >= 12? I predict True.")
console.log(num <= 12)

console.log("Is num >= 18? I predict False.")
console.log(num >= 18)

//And Or
var valNum = 7
var valStr = "clock"

console.log("Is valNum==7 and valStr==clock? I predict True.")
console.log(valNum==7 && valStr=="clock")

console.log("Is valNum==7 and valStr!=clock? I predict False.")
console.log(valNum==7 && valStr!="clock")

console.log("Is valNum!=7 or valStr==clock? I predict True.")
console.log(valNum!=7 || valStr=="clock")

console.log("Is valNum!=7 and valStr!=clock? I predict False.")
console.log(valNum!=7 && valStr!="clock")

//In array
var testArr = [1,2,5,7]

console.log("Is number 7 in testArr. I predict True.")
console.log(testArr.includes(7))

console.log("Is number 8 in testArr. I predict False.")
console.log(testArr.includes(8))

//Not in array
console.log("Is number 6 not in testArr. I predict True.")
console.log(!testArr.includes(6))

console.log("Is number 2 not in testArr. I predict False.")
console.log(!testArr.includes(2))