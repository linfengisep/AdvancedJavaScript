//proto chain
const arr = [];
arr.__proto__   //Array prototype
arr.__proto__.__proto__ //Object prototype


function fun(){}

fun.__proto__   //Function prototype
fun.__proto__.__proto__ //Object prototype

//class

let dragon = {
    name:"dragon",
    fire:true,
    fight(){
        return "tear animal";
    },
    roar(){
        return `${this.name} roar loud`;
    }
}

let snake = {
    name:"snake",
    fight(){
        return "bite animal"
    },
    run(){
        return 'zig zag';
    }
}

snake.__proto__ = dragon;
snake.fight();
snake.name;
snake.run();

for(let prop in snake){
    if(snake.hasOwnProperty(prop)){
        console.log(prop);
    }
}

//prototype of Object is null, i.e the end of prototype chain is null
const obj = {}
obj.__proto__.__proto__

//only function has the prototype property
//Object is function, same as Array, Boolean,String etc, class wrapper.
//only function instance could access prototype directly, other instance like Object's, Array's, don't
