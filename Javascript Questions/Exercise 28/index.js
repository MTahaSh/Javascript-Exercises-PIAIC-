let username = ["admin", "harry", "shehzad", "kamil", "hammad"]

for (let index = 0; index < username.length; index++) {
    
    if(username[index] == "admin")
    {
        console.log(`Hello ${username[index]}, would you like to see a status report? `);
    }

    else {
        console.log(`Hello ${username[index]}, thank you for logging in again. `);
    }
    
}