// 1.using symbole directly let person = {name:'li'}; implicit binding, binding property to object. 
const car = {
    wheel:4,
    speed:"fase",
    run(){return 'fun fast at highway'}
}
// 2.Object.create(car), using car like prototype, and create an object.
let newCar = Object.create(car);
// here, car is the prototype of newCar, we have newCar.__proto__ === car, this is true;

// 3.using constructor function
function Car(wheel,speed){
    this.wheel = wheel;
    this.speed = speed;
    function run(){
        return 'run fast when step harder';
    }
}
// note: to instanciate, using new keyword new Car(4,120);
let farrari = Car(200,12); 
// farrari.speed->can't read property speed of undefined.

// 4.using Function
const Solder = new Function('name','weapon','this.name=name;this.weapon = weapon');
const captionAmerican = new Solder('caption','sheld');

// 5.class
class Car{

}

//besides, we can use prototype to add new function to object.
Solder.prototype.attack = function(){
    return 'attach with AK47, full power.';
}
const captionAmerican = new Solder('caption','sheld');
