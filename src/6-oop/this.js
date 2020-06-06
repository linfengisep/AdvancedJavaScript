//1.only using this. could add member variable, inside function constructor.
function Car(wheel,speed){
    this.wheel = wheel;
    this.speed = speed;
    function run(){
        return 'run fast when step harder';
    }
    var extraProperty = 'extra_property'; //extraProperty is not included inside this.
    console.log(this);
}
let audi = new Car(200,459);

//2.only function have prototype
audi.prototype //undefined
audi.__proto__ //{constructor: ƒ}
Car.prototype  //Car {wheel: 200, speed: 459}

//3.binding this
//this inside the function of another function: this
Car.prototype.build = function(){
    //solution 1
    // const self = this;
    // function building(){
    //     return self.name + ' builds house';    
    // }
    // return building();

    //solution 2
    function building(){
        return this.name + ' builds house';    
    }
    return building.bind(this);
}



