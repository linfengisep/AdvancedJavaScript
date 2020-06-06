## why fp
1.suits for distributed computing,multiple machine interacting with data.
paralellism, multiply machine works on the same data at the same time.

2.avoid shared state.
## fp character
1 task only,
return statement,
pure,
no shared state,
immutable state,
composable,
predictable,


## pure function?
//no side effect, the function which don't modify the data outside itself.
//same input -> same output: referenciel transparency

## advantage
1.no mutation
2.no changing share states
3.predictable function

## can everyhing be pure?
organise the code in a way we isolate side effect.
then when something went wrong,
we need only test those function who are not pure. because the pure function are reliable.



