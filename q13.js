/**Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 *  and make a list that stores several examples. Use your list to print a series of statements 
 * about these items, such as “I would like to own a Honda motorcycle.” 
 */

const favoriteTransport = ["Honda","Toyota","Bmw","mercedes"]
var statement1 = " I would like to own a " + favoriteTransport[0]+".";
var statement2 = `Cars of ${favoriteTransport[1]} are reliable.`;
var statement3 = `${favoriteTransport[2]} Group is one of the world's leading premium manufacturers of automobiles.`;
var statement4 = `Cars of ${favoriteTransport[3]} are luxurious.`;
console.log(statement1,"\n",statement2,"\n",statement3,"\n",statement4)