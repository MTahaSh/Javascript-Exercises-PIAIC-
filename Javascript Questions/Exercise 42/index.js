let ingredient = ["Cheese", "Mayo", "Chicken","Onion"]
sandwitch(ingredient);
ingredient = ["Jam", "Butter"]
sandwitch(ingredient);
ingredient = ["Chocolate"]
sandwitch(ingredient);


function sandwitch(items)
{
    for (let index = 0; index < items.length; index++) {
        console.log(`${items[index]} has been added to your sandwitch`);
        
    }
    console.log("Your sandwitch is ready!\n");
}