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
## Section 1-2-3 next 2-15
## Section 5 closure and prototype inheritance finished
## Section 6 OOP ok
## Section 7 FP ok
## Section 9 Async next 134

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

#### WebAssembly
why?


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

### HOF:high order function
definition: function which can take another function as argument or return another function is called HOF.
advantage:subcontract sub reponsiblity to it, instead of we define the data, we define what to do with the data all by ourselves.

take example in hof.js,

### Closures
benefit:
1.lexical scope.
created lexical scope, make the inner function could access the outside resources;
2.memory efficiency
3.encapsulation
 use the return object to expose only what we want to be accessed for outside world;

### prototype inheritance
only function has the prototype property
1.Object is function, same as Array, Boolean,String etc, class wrapper.
2.only function instance could access prototype directly, other instance like Object's, Array's, don't
3.go up prototype chain by __proto__, and the end of prototype chain is null;


## Section 6 OOP
### ways to create object?
1.using symbole directly let person = {name:'li'};
2.Object.create(car), using car like prototype, and create an object.
3.using constructor function
4.using Function
const Solder = new Function('name','weapon','this.name=name;this.weapon = weapon');
5.class
class Car{}



## Section 7 FP
HOF(higher order function)
function which will return other function.

Closure
advantage:memory efficient and encapsulation

Curry
one argument at a time

Partial application
first one argument, then rest of argument

Caching, in javascript, could take advantage of closure in order not to pollute the global environement


## Section 8 

## Section 9  Async
Promise serve as callback, but powerful,
Creating a promise,
Error catch handling,
Combine all promise,

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


27 Promise-> async
promise.all()
promise.race()



28 async function(),await

30 deconstruction
const arr = ['tiger','lion','bird','fish'];
[tiger,...rest] = arr;
console.log('tiger: ',tiger);
console.log('rest: ',rest);



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

