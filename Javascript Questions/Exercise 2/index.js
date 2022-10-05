let p_name = "Muhammad Taha Rizwan";

console.log("The upper-case of the name is:", p_name.toUpperCase());
console.log("The lower-case of the name is:", p_name.toLowerCase());


console.log("The title-case of the name is:", titleCase(p_name));


function titleCase(p_name){
    p_name = p_name.toLowerCase();

    p_name = p_name.split(" ");

    for (let index = 0; index < p_name.length; index++) {
        
        p_name[index] = p_name[index].charAt(0).toUpperCase() + p_name[index].slice(1);
        
    }

    return p_name.join(" ");

}