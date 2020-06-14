//for js promise,event loop check job queue first, then callback queue

//imagine this is the timeline;
setTimeout(()=>{
    console.log('async1: web api callback,timer=0')
},0);

setTimeout(()=>{
    console.log('async2: web api callback,timer=100 ms')
},100);

Promise.resolve('async3: promise resolved callback fun').then(data=> console.log(data));

console.log('sync4: sync operations');

//js engine, when see async1, call the web api timer with time=0,
//continue to check the next, async2, call the web api timer with time=100,
//continue to check the next, async3, add to the job queue,
//continue to check the next, sync4, so print it out directely, the stack empty,
//check job queue, yes, async3 is ready, print async3 result.
//check stack queue, print async1 and then async2.

//program finished;

