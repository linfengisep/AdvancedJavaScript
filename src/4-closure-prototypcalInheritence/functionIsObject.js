//function is object

//three way to invoke a function
//two way to define function in object.
//cound add property to function, function has property name of its name.
//have method call(), apply(), bind() automatically.
//(): symbole to invoke the function

function fun(){
    console.log('fun is invoked');
  }
  
  //1st
  fun();
  //2nd
  fun.call();
  
  const animal = {
    weight:12,
    run:function(){
      console.log('run for life');
    },
    makeSound(){
      console.log('roaring');
    }
    //two way to define function in object.
  }
  //3rd
  animal.run();
  animal.makeSound();
  
  //4th, bonus
  const four = new Function('param','return param');
  four(3);
  console.log(fun.name);
  
  