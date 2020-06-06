## Polyfill
un bout de code utilisé pour founir des fonctionnalités récentes sur d'anciens navigateurs qui ne les supportent pas nativement.
example:Bible

## paradigm -> pf vs fp vs oop vs imperative vs declarative
pf:procedural programming
fp:functional programming
oop:oject oriented programming
imperative programming vs declarative programming:
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

## pure function
no side effect, same input-> same output

## Idempotence
ne doit pas avoir l'effet secondaire.
genre GET,PUT,DELETE, pas la méthode POST qui ne permet pas de laisser le serveur dans le même état.

## Immutability
not changing state, copy and return the copyed one instead.

## HOF
take function as parameter or return function;

## Closure
const closure = function(){
    let count = 0;
    return function counter(){
        count++;
        return count;
    }
}
const getCounter = closure();
getCounter();//1
getCounter();//2
getCounter();//3

advantage: have access to it, but other can dot touch it.

## Currying
one argument at a time
Curry
take multiple arguments into a sequence function

## Partial application
one argument first, then the rest of argument

## Compose
combine other function

## arity
number of arguments it takes
sugestion: one or two arguments, no more.





