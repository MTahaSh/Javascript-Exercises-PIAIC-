let username = ["admin", "harry", "shehzad", "kamil", "hammad"]

let len = username.length 

for (let index = 0; index < len+1; index++) {
    
    if(username.length == 0)
    {
        console.log("We need to find some users!");
    }
    else {
        console.log(`There are usernames.`);
        username.pop();
    }
    
}