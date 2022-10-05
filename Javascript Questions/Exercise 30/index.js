current_users = ["Harry", "Mirza", "Asad", "Abdullah", "Kamil"];
new_users = ["Wajahat", "Kamil", "Mirza", "Naseem", "Shahid"];

let check;

for (let index = 0; index < current_users.length; index++) {
    check = 0;
    for (let j = 0; j < new_users.length; j++) {

     
    
    if(new_users[index] == current_users[j])
    {
        console.log("The name already exist. You have to enter a new name.");
        check++;
        
    }
}  

if(check == 0)
{
    console.log("The username is available.");
}
    
}