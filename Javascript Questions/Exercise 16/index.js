let friends = ["Wajahat", "Kamil", "Junaid", "Usman"];

console.log(`Hello ${friends[0]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[1]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[2]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[3]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    

console.log("\n");

console.log(`${friends[3]} cannot join us for the dinner due to which he has been replaced.`);

friends[3] = "Shamraiz";
console.log("\n");


console.log(`Hello ${friends[0]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[1]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[2]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[3]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);  


console.log("Hello everyone, I am here to announce that the bigger table has been found, so now more space is available.");

friends.unshift("Hammad");
friends.splice(3,0,"Ahmed")
friends.push("Ibrahim");

console.log("\n");
console.log(`Hello ${friends[0]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[1]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[2]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);    
console.log(`Hello ${friends[3]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);  
console.log(`Hello ${friends[4]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);  
console.log(`Hello ${friends[5]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);  
console.log(`Hello ${friends[6]}, You have been invited to dinner at my place. I am looking forward to see at 9.`);  

console.log("I feel so sorry to announce that the new table has not arrived yet.");

friends.pop();
len = friends.length;
console.log(`Hello ${friends[len-1]}, I am sorry I can't invite you to the dinner yet.`);
friends.pop();
len = friends.length;
console.log(`Hello ${friends[len-1]}, I am sorry I can't invite you to the dinner yet.`);
friends.pop();
len = friends.length;
console.log(`Hello ${friends[len-1]}, I am sorry I can't invite you to the dinner yet.`);
friends.pop();
len = friends.length;
console.log(`Hello ${friends[len-1]}, I am sorry I can't invite you to the dinner yet.`);
friends.pop();

console.log(`${friends[0]}, You are still invited to the dinner`);
console.log(`${friends[1]}, You are still invited to the dinner`);

friends.pop();
friends.pop();
console.log("List after all the guests are removed: ");
console.log(friends);