animals = ["Dog","Cat","Tiger"];

for (let index = 0; index < animals.length; index++) {

    // console.log(animals[index]);
    console.log(`${index == animals.length-1? animals[index] + " have same characteristics as others." : animals[index] + " would make a great pet."}`);
    
}