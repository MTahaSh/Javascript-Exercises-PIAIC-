
let honda = make_car("Honda","Civic","White","2017",)
console.log(honda);
let toyota = make_car("Toyota","Corolla","Black","2021",)
console.log(toyota);


function make_car(manufacturer,model,color,year)
{
    car = {
        "Manufacturer":manufacturer,
        "Model":model
    }

    if(color)
    {
        car["Color"] = color;
    }

    if(year)
    {
        car["Year"] = year;
    }

    return car;

}
