Asynchronous Javascript

## Types
Web APIs
Async/Await
Callbacks
Mocrotask Queue(job queue)
Task Queue
Promise
Event loop


## Order of executions(javascript run-time environment)
1.Heap/Stack

2.Web API(DOM,fetch(),setTimeout())

3.Callback Queue

Event Loop

it works this way:
once javascript engine 'see' asynchrous code, i.e WEB APIs, il will execute it in the background, its callback functions will be added to the callback queue, and Event loop check the callback queue and stack regularly, once stack is empty, when the callback is invoked, it will be poped out into stack.

## why js is single-thread?
because of its one call stack


## what is program
parse and execute