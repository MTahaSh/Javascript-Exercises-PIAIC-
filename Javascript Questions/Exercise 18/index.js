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

len = friends.length;

console.log("The number of the people invited to the dinner are: ", len);