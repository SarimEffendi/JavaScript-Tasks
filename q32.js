/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */

var current_usernames=["Msarim" , "ali@" , "huzaifa21" , "moosa19" , "Qasim78"];

var new_usernames =["Msarim" , "Daniyal2" , "Asim@ali" ,"user305" , "Qasim78"];

var flag = false;

for(var i = 0; i<new_usernames.length; i++){
    for(var j = 0; j<current_usernames.length; j++){
        if(new_usernames[i].toLowerCase() == current_usernames[j].toLowerCase()){
            flag = true;
            break;
        }
    }
    if(flag){
        console.log(`\n${new_usernames[i]}: Username already exists.`);
        console.log("Enter a new username");
        flag = false;
    }else{
        console.log(`\n${new_usernames[i]}: Username is available`);
    }
}












// for(var i =0; i <new_usernames.length;i++){
//     for(var j =0; j <current_usernames.length;j++){
//         if(new_usernames[i]==current_usernames[j]){
//             console.log("username is already taken");
//         }
//         else{
//             console.log("username is available");
//         }
//     }
// }

// for(var i =0;i <current_usernames.length;i++){
//     console.log(current_usernames[i]);
// }
// for(var i =0;i <new_usernames.length;i++){
//     console.log(new_usernames[i]);
// }










// for(var i=0; i<new_usernames.length-1; i++)
// {
// for(var j=0; j<current_usernames.length-1; j++)
// {
// if(new_usernames[i].toLowerCase() == current_usernames[j].toLowerCase())
// {
// console.log("This username has already been taken")
// }
// else
// {
// console.log("The username is available")
// }
// }
// }













