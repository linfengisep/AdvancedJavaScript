//ES6, spread in array
const arr = [1,2,3,4,5];
function sum(a,b,c){
    return a+b+c;
}
sum(...arr);

//ES9(ES2018), spread in object
const animal = {
    tiger:12,
    lion:23,
    monkey:11,
    honeyBadger:14,
    bee:1
}

const { tiger,...rest} = animal;

const printAnimal =(a1,a2,a3)=>{
    console.log(a1);
    console.log(a2);
    console.log(a3);
}
printAnimal(tiger,rest);
