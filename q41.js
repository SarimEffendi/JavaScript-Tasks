//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magician=["sarim","huzaifa","moosa","ahmed","ali"];
function show_magicians(magician){
    mag_length=magician.length;
    for(var i=0;i<mag_length;i++){
        console.log(magician[i]);
    }
}
show_magicians(magician);







