//definition: a function which can take a function as argument 
//or it return another function.

const giveAccessTo = name => 'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { 
  // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function talk(person) {
  return person.name + " happy to be here.";
}

function run(person) {
    return person.name + " run very fast";
  }

letPerson({level: 'user', name: 'Tim'}, talk);
letPerson({level: 'admin', name: 'Cook'}, run);

// String, Array of javascript provide a lot fo HOF

//************** Another example ************************************* */

const multiplyBy = firstParam => secondParam => firstParam * secondParam;

const multiplyByFive = multiplyBy(5);
const multiplyByTwo = multiplyBy(2);

multiplyByFive(3);
multiplyByTwo(2);

//multiplyBy(3)(2)