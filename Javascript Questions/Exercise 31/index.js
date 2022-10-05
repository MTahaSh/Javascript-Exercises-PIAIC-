let ordinal_num = [1,2,3,4,5,6,7,8,9];

for (let index = 0; index < ordinal_num.length; index++) {
    
    if(ordinal_num[index] == 1)
    {
        console.log(`${ordinal_num[index]}st`);
    }
    else if(ordinal_num[index] == 2)
    {
        console.log(`${ordinal_num[index]}nd`);
    }
    else if(ordinal_num[index] == 3)
    {
        console.log(`${ordinal_num[index]}rd`);
    }

    else {
        console.log(`${ordinal_num[index]}th`);
    }
    
}