## Javascript
* 		Javascript Engine
* 		Javascript Runtime
* 		Interpreter, Compiler, JIT Compiler 
* 		Writing Optimized Code 
* 		Call Stack + Memory Heap 
* 		Stack Overflow + Memory Leaks 
* 		Garbage Collection 
* 		Node.js 
* 		ES6, ES7, ES8, ES9 features 
* 		Single Threaded Model 
* 		Execution Context 
* 		Lexical Environment 
* 		Scope Chain 
* 		Hoisting 
* 		Function Invocation 
* 		Function Scope vs Block Scope 
* 		Dynamic vs Lexical Scope 
* 		this - call(), apply(), bind() 
* 		IIFEs 
* 		Context vs Scope 
* 		Static vs Dynamically Typed 
* 		Primitive Types 
* 		Pass by Reference vs Pass by Value 
* 		Type Coercion 
* 		Arrays, Functions, Objects 
* 		Closures 
* 		Prototypal Inheritance 
* 		Class Inheritance 
* 		Memoization 
* 		Higher Order Functions 
* 		Functions vs Objects 
* 		Scheme + Java in JavaScript 
* 		OOP (Object Oriented Programming) 
* 		Private vs Public properties 
* 		Functional Programming 
* 		Immutability 
* 		Imperative vs Declarative code 
* 		Composition vs Inheritance 
* 		Currying 
* 		Partial Application 
* 		Pure Functions 
* 		Referential Transparency 
* 		Compose 
* 		Pipe 
* 		Error Handling 
* 		Asynchronous JavaScript 
* 		Callbacks, Promises, Async/Await 
* 		Event Loop + Callback Queue 
* 		Task Queue + Microtask Queue 
* 		Concurrency + Parallelism 
* 		Modules in Javascript 

https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13512858#overview



# Second time Summary Part
## Section 1-2-3 roadmap and JS foundation stop at 2-14

### ECMAScript engine
#### what is JS engine ? ok

>An ECMAScript engine is a program that executes source code written in a version of the ECMAScript language standard, for example, JavaScript.
[List_of_ECMAScript_engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)

in one word,a program run js code.

one of the famous JS engine: V8, created by Google, used in chrome, node.js.

#### Intepreter vs compiler
some info:
Babel is a Javascript compiler that takes your modern JS code and returns  browser compatible JS (older JS code).
Typescript is a superset of Javascript that compiles down to Javascript.

#### Behind the hood of JS engine 

#### why JIT 2-11
Interpreter: start fast, but no optimisation, become slow when volume increase
compiler: need time to start,faster event when the volume increase

How to combien the advantage of both world, interpreter and compiler?
JIT: just in time, begin by interpreter and using compiler to optimiser the code at the same time

like the picture: interpreter start fast, profiler and compiler optimizing the code.

#### Is Javascript an interpreted language?
it depends, on the implementation,
at the beginning, it was interpreted by SpiderMonkey engine to bytecode, that engine enable to run inside our browser.
now, we also have compiler.

#### how to write js optimization code? 2-13
avoid using:eval(),arguments,with, for in, delete.

V8 optimization hidden classes and inline caching
hidden classes:
problem before -> Most Javascript interpreters use dictionary-like objects (hash function based) to store the location of object property values in memory. This structure makes retrieving the value of a property in Javascript more computationally expensive than it would be in a non-dynamic programming language like Java.
V8 add hidden classes to optimize the retrievation.

inline caching:inline caching relies upon the observation that repeated calls to the same method tend to occur on the same type of object.

more detail
hidden classes:
https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html
arguments article: 
https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments

conclusion:

## Section 4 

## Section 5 Closures and prototypal inheritence

### Function
#### function is special object
three ways to invoke a function
() always the symbole to invoke a function

function have call(), apply(), bind() methods automatically.

fun.name
fun.someProperty = 'yo';

#### function is first class citizens in JS
assign function to a variable
pass function as argument to other function
return function in function.


### Array

### Object


Function, Array, Object
three way to invoke function
fourth one.with Function constructor

function are object

.call() , apply(), .bind()


## Section 6 

## Section 7 

## Section 8 

## Section 9 

## Section 10 

## Section 11


# Bonus €€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€

## Section 13 data structure
>https://en.wikipedia.org/wiki/List_of_data_structures
https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link


#### what is data structure
just container

which code is best?
Readable Memory Speed
Big O
Memory = space complixity
Speed = time complicity



# First time trace $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

4.call stack vs memory heap
Memory heap store the variable in allocated area
Call stack for the call in stack, first in last out


5.Stack overflow
inception(){
	inception();
}

6.garbage collector/ memory leak
When no reference, garbage collector clean them.

Three type of common memory leak:
1.Global variable doesn’t stop increasing
2.EventListener, espacially SPA, go and return, didn’t free the eventlistener
3.setInterval()


7.single thread
alert(‘hi’), when invoked, web don’t respond other interaction anymore.

8.javascript runtime and web API
web API working in the background,inside the async code is executing,
web API comes from browser
Event loop:continue asking is the stack empty? as soon as the stack is free, hey, would you like to add something to the stack?
Callback queue:

9.execution context
even nothing created in js file, we are given two context: this and global object. in browser global === window,
and this = window at the beginning.

10.lexical environment
lexical scope (avaiable data + variables where the function was defined) determines our avaiable variables.Not where the function is called
(dynamic scope)

11.Hoisting
when creating phase, javascript engine scan the code,
when seeing var is hoisted with 'undefined',
while seeing function, it will be fully hoisted.

note: let or const won't be hoisted at all.
(function(){}) won't be hoisted at all.

hoisting happens in every execution context.

function declaration vs function expression.


12.Scope
12.1 use strict
case:
function yoyo(){
    name = 'lee';
    return name;
}
yoyo();
no error,when looking up for the name, javascript engine didn't find it in the golbal Scope
then it create one for it.
solution: add 'use strict' at top of page.or at the top of Function

12.2 function scope vs block Scope

if(5>4){
    var result = 'right';
}

console.log(result)
no problem

but if we add function in front of it, then error.
solution: let or const for block scope.
var for function scope.


13.IIFE
immediate ivoked function expression
var tester = (function(){
    console.log('IIFE');
})()


14.this

this is the object where the function is in property of

1.give method of access of the object it belongs to
2.execute the same code for multiple objects.

const testThis = {
    name:'lee',
    run(){
        console.log('a',this);
        //var self = this;     //three
        //var tester = ()=>{   //one
        var tester = function(){
            console.log('b',this);
            //console.log(self); //three
        }
        return tester.bind(this);//two

        //return tester;      //three
    },

}
//testThis.run()(); //call solution two
//testThis.run();//call solution one



15.call(),apply(),bind()
const vallain ={
    name:'vallain',
    power:123,
    heal:function(anotherPower){
        return this.power += anotherPower;
    }
}

const hero={
   name:'hero',
   power:88,
}

console.log('hero before:',hero);
vallain.heal.call(hero,42);
console.log('hero after :',hero);

call():borrow the method of other object.
bind, save it for later use.

15.pass by reference vs pass by value
primitive data is passed by value.
other type data(object, arrays) are passed by reference.

how to pass by value for object, array?

const newArr = [].concat(arr);
const clone = Object.assign({},obj); or
const newObj = {...obj};
but those are shallow cloning, clone only the first level.
if obj={
    name:'lee',
    sports:{
        basket:'excellent',
        swimming:'good',
    }
}

only name will be cloned, other like sports will be modified if one object modifies it.
so here commes deep clone.
const superClone = JSON.parse(JSON.stringfy(obj));


16.functiton is also an object.
var search = (keyword)=>{
    return /keyword/i.test(content);
}
search();

function closePopin(){
    if(popin){popin.close};
}

closePopin.name='login popin';


17.HOF(higher order function)
function which will return other function.

18.Closure
advantage:memory efficient and encapsulation


19.inhereitance
var dragon = {
    power:10,
    fight(){
        return 'dragon fight for it';
    },
    sing(){
        return 'dragon fire';
    }
}

var lizard = {
    name:'kiki',
    run(){
        return 'lizard runs fast';
    }
}

lizard.__proto__ = dragon;
lizard.fight();
for(prop in lizard){console.log(prop)}

why __proto__ is useful?
saving memory

humain={age:75,speak(){return 'blablabla';}}
lee = Object.create(humain);
humain.isPrototypeOf(lee)-> true;

let solder = new Solder();


20.FP:functional programming-> good at being executing at distributed system
imperative programming vs declarative programming
imperative programming:show precise intructions to let machine know what to do.
declarative programming:give a rough intructions.

for example iterating array.

function multiplyArrByTwoImp(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){//show precise instruction;
        newArr.push(i*2);
    }
    return newArr;
}
vs
function multiplyArrByTwoDecl(arr){
    let newArr = [];
    arr.forEach(item => newArr.push(item*2));//give raw instruction
    return newArr;
}

humain prefer give declarative instructions: Peter, give me some water.
machine prefer execute imperative instructions: like, Peter,
go to the kitchen, grab a cup,fill some water, bring the cup back to me.

pure Function-> no side effect
input-> output, we can expect the same result from the function given the same input.
function plusOne(number){ return number+1;}
nothing to do with the environment,

idempatence
have some interaction, but we cound expect the same result as well.

funtion abs(number){
    Math.abs(number);
}
abs(-25) = 25, no mather how many times we execute this function.


22.Curry
const multiple(a,b)=> a*b;
const curryMultiply(a)=>(b)=> a*b;
one way to use it:curryMultiply(3)(4);
const multiplyByFive = curryMultiply(5);
multiplyByFive(4) -> output :20

23.partial Application
const curryMultiply(a)=>(b)=>(c)=> a*b*c;
const partialMultiplyFive = curryMultiply.bind(null,5);
partialMultiplyFive(4,3) === curryMultiply(5)(4)(3);

24.data structure:cache
function addFive(){
    let caches={};//closure;
    return function(number){if(number in caches){
            return caches[number];
        }else {
            console.log('time comsumming operations.');
            caches[number] = number + 5;
            return caches[number];
        }
    };
}

addFive(4);
addFive(4);

25.compose/Pipe
compose(f,g);
pipe(g,f);

const multiplyFive = (number)=> number*5;
const absIt = (number)=> Math.abs(number);
const compose = (f,g)=> data => g(f(data));
const multiplyFiveAndAbs = compose(multiplyFive,absIt)(-4)

26.FP:arity
the number of function it takes;
one or two, reuse purpose

Execise:
//Amazon shopping-> implement a cart feature;
//1. add items to cart
//2. add 3% tax to items in cart
//3. buy items:cart - purchase
//4. empty cart

//functional programmaing,



const user ={
  name:'lee',
  active:true,
  cart:[],
  purchase:[],
}
const pipeReducer = (g,f) => (...arg)=> f(g(...arg));//from left to right, or from right to left?
purchaseItem(
  addItemToCart,
  applyTax,
  buyItem,
  emptyCart)(user,{product:'laptop',price:300});

function purchaseItem(...fns){
  return fns.reduce(pipeReducer);
}
function addItemToCart(user,item){ const itemArr = [].concat(item);
  return Object.assign({},user,{cart:itemArr});
}
function applyTax(user){
  const {cart}=user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item =>{
    return {
      product: item.product,
      price: item.price * taxRate};
    });
  return Object.assign({},user,{cart:updatedCart});
}
function buyItem(user){ return Object.assign({},user,{purchase:user.cart});}
function emptyCart(user){ return Object.assign({},user,{cart:[]});}


27 Promise-> async
promise.all()
promise.race()



28 async function(),await

30 deconstruction
const arr = ['tiger','lion','bird','fish'];
[tiger,...rest] = arr;
console.log('tiger: ',tiger);
console.log('rest: ',rest);

31 Job queue
//task queue,web api, last category;
setTimeout(()=>{
  console.log('1. fist task queue')
},0);

setTimeout(()=>{
  console.log('2. fist task queue')
},1000);

//job queue, second category;
Promise.resolve('3.hi').then(console.log);
//sync task, first category
console.log('4.sync task')

32.sequence,parallel,race
const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay))

const a =()=> promisify('a',500);
const b =()=> promisify('b',1000);
const c =()=> promisify('c',2000);

async function sequence(){
	const first = await a();
	const second = await b();
	const third = await c();
	return `sequence done with ${first},${second},${third}`;
}
//a:funcion, a():promise;
async function parallel(){
	const promises = [a(),b(),c()];
	const [output1,output2,output3] = await Promise.all(promises);
	return `parallel done with ${output1},${output2},${output3}`;
}

async function race(){
	const promises = [a(),b(),c()];
	const res = await Promise.race(promises);
	return `race done with ${res}`;
}

race().then(console.log)
parallel().then(console.log)
sequence().then(console.log)

33 thread, concurency, parallelism


$$$$$$$$$$$$/Module/$$$$$$$$$$$$$$$
problem:
1.too many global variable,
2.some js will incidentlly overwrite the other or the global variables.

global scope > function scope > block scope
with module
global scope > module scope > function scope > block scope

how to pass glocal variable to mobule?
how to expose some api from a module?
var module = (function(paramClue){
	var wealth = 100;
	function findWealth(){
		const treasure = paramClue * 10;
		wealth += treasure;
		return treasure;
	}
	return {
		findWealth:findWealth()
	};
})(treasureRoadmapPassIntoModule)

module.findWealth();

$$$$$$$$$$$$/Error handling/$$$$$$$$$$$$$$$

1.Error(),new Error()
const parseError = new Error('parse error');
parseError.name, parseError.message, parseError.stack;

2.class AuthError extends Error(){}
try{
	riskOperaions()
}catch(error){
	doSth()
}finally{
	operationsAlwaysExecuted()
}

3.async error catching

(async function(){
	try{
		await Promise('failing');
	}catch(error){ console.log(error)}
})()

Promise.reject('not success').then(resp=> console.log(resp))
.catch(error=> console.log('got it'));

