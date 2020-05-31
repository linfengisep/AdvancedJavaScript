function a(){
    let root = 'root';
    return function b(){
        let trunk = 'trunk';
        return function c(){
            let leaf = 'leaf';
            return `${root} -> ${trunk} -> ${leaf}`;
        }
    }
}
//a()()()

//because of closure, the inner function could access the variable outside of it.

//it is also called lexical scope.

//in the same lexical scope, we could even use it first and then defined it

function callMe(){
  setTimeout(()=>{
    console.log(me);
  },3000);
    let me="Beyoncé";
}

callMe()


//***************** memory efficiency

function heavyOperation(index){
    let arr = Array(22222).fill('yeah');
    console.log('arr is recreated');
    return arr[index];
  }
  
  heavyOperation(333);
  heavyOperation(334);
  heavyOperation(335);
  
  function heavyOperationEfficiency(){
    let arr = Array(22222).fill('yeah');
    console.log('arr is recreated once');
    return function(index){
      return arr[index];
    }
  }
  
  const operations = heavyOperationEfficiency();
  //see, here save all the lexical resources in memory;
  operations(1);
  operations(2);
  operations(3);


//***************** encapsulation
