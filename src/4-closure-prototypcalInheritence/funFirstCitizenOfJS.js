//why function is first citizen in JS
//1.assign function to variable, 2.pass it as argument to other function, 3.return fun in other function.

const targetVar = function fun(param){
    console.log('fun is invoked' + param);
  }
  
  //assign function to variable to invoking method.
  targetVar('yes');
  
  function Outer(){
    return function inner(){
        return 'inner fun';
    };
  }
  //return function in another function and invoking method;
  Outer()()
  
  //passing function as argument to other fun
  function build(fun){
    fun();
  }
  build(()=>{console.log('building house')});