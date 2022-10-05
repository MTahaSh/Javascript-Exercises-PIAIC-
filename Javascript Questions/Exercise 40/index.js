let magicians_name = ["David Blaine", "Pen and Teller", "Jerry Sadowitz", "Dynamo"];


show_magicians(magicians_name);
make_great(magicians_name);
show_magicians(magicians_name);


function make_great(magicians_name)
{
    for (let index = 0; index < magicians_name.length; index++) {
        magicians_name[index] = "Great " + magicians_name[index];
        
    }

}
function show_magicians(magicians_name)
{
    for (let index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index]);
        
    }
}