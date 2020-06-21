## what is module in js?
high self contained, used by other places
sharing code it the initial need
scope,
access variable,
tight coupling: modifying one property, maybe affecting other, polluting global variable,

original way,
<script src="./script1.js"></script>
<script src="./script2.js"></script>
js will combine all script together.
so any variable declared in one file will be visible to another,any function could grab the global function, and modify it,


## what is the benefit of module in js?
module pattern

## scope
global scope
    module scope
        function scope
            block scope //let and const


## Module pattern
IIFE
(function(){})()
allow to access the global variable,
avoid outside world access inner variable, 
and expose variable/method to the outside world.

example

## problem of loading order
Javascript can't find element by id?
The problem is that you are trying to access the element before it exists. You need to wait for the page to be fully loaded. 
1.A possible approach is to use the onload handler
2.Another approach is to place the script tag right before your closing </body>-tag, since everything in front of it is loaded at the time of execution

## Module pattern disadvantage
cons:
1.still add small piece of global variable
2.dependency problem.

## commonJS,AMD,requireJS, browserfy

using commonJS to share code with other.

commonJS:synchronously, commonly used in server.
example:
var module1 = require('module1');
function fight(){ console.log('fighting')}
module.exports = {
    fight:fight
}

AMD:loading asynchronously as needed, using for browser
example:
define(['module1','module2'],function(module1Import,module2Import){
    var fight = module1Import.fight;
    var power = module2Import.power;
    function destroy(){}
    function build(){}

    return {destroy,build};
});

requireJS, 
module bundler -> browserfy: bundle all code to one file

