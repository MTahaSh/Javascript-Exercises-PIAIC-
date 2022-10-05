let magicians_name = ["David Blaine", "Pen and Teller", "Jerry Sadowitz", "Dynamo"];
let updated_name = ["David Blaine", "Pen and Teller", "Jerry Sadowitz", "Dynamo"];

show_magicians(magicians_name);
updated_name = make_great(updated_name);
show_magicians(magicians_name);
show_magicians(updated_name);



function make_great(name)
{
    for (let index = 0; index < magicians_name.length; index++) {
        name[index] = "Great " + name[index];
        
    }
    return name;
}
function show_magicians(magicians_name)
{
    for (let index = 0; index < magicians_name.length; index++) {
        console.log(magicians_name[index]);
        
    }
}