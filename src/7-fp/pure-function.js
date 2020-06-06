const arr = [1,2,3];
//side effect, mutating the arr state;
function moveOut(arr){
    arr.pop();
}
moveOut(arr);

//no side effect;
function moveOutItem(arr){
    const newArr = [].concat(arr);
    newArr.pop();
    return newArr;
}
moveOutItem(arr);


// curry
const multiply= (a) => (b) => a*b;
const multiply4 = multiply(4);
multiply4(5)//20

// partical function
const multiply= (a,b,c) => a*b*c;
const partialMultiplyBy5 = multiply(null,5);
partialMultiplyBy5(4,10);

//compose
const abs = (a)=> Math.abs(a);
const compose = (f,g)=>(data)=>f(g(data));
const multiplyBy4AndAbs = compose(abs,multiply4);
multiplyBy4AndAbs(-3);

//arity
