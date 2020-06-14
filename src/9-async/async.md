Asynchronous Javascript

## Order of executions(javascript run-time environment)
1.Heap/Stack

2.Web API(DOM,fetch(),setTimeout())

3.Callback Queue

Event Loop

it works this way:
once javascript engine 'see' asynchrous code, i.e WEB APIs, il will execute it in the background, its callback functions will be added to the callback queue, and Event loop check the callback queue and stack regularly, once stack is empty, when the callback is invoked, it will be poped out into stack.

## why js is single-thread?
because of its one call stack

## Promise is part of js, not part of js runtime like WEB API
because of it is part of js, not like js runtime web api, so, async promise is treated differently.
job queue is there for it.

event loop check the Job queue first before taking care of callback queue.

call stack/memory heap -> web api -> job queue-> callback queue


## parallel,sequence,race
parallel: all at the same time
sequencial:one after the other
race:first done, first out

imagine: time1 = fun1(), time2 for fun2(), time3 for fun3(), and time1 < time2 < time3
execute all three functions in three mode,
for parallel timeTotalToFinish = time3
for sequencial timeTotalToFinish = time1+time2+time3
for race timeTotalToFinish = time1;

## threads,concurrency and parallelism
js is single thread
concurency,like a man sitting at table and eating, only have one mouth(one cpu), two hands handle the food to the one mouth.
more infos:
[Scaling Node.js Applications](https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/)

[Using Web Workers - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

[A gentle introduction to multithreading - Internal Pointers](https://www.internalpointers.com/post/gentle-introduction-multithreading)
