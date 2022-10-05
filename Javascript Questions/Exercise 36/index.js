let country = "Pakistan";
let city = "Islamabad"
let city2 = "Rawalpindi";

let country2 = "England";
let city3 = "London";

describe_city(city,country);
describe_city(city2,country);
describe_city(city3,country2);

function describe_city(city,country)
{
    console.log(`${city} is in ${country}.`);
}