//1 creating promise
const flag = false;
const promise = new Promise((resolve,reject)=>{
    if(flag){
        resolve('working well');
    }else{
        reject('rejected');
    }
})

promise.then(res=> console.log);

//2.error handling

const errorPromise = new Promise((resolve,reject)=>{
    if(flag){
        // throw new Error('sth is wrong');
        resolve('working well');
    }else{
        reject('rejected');
    }
})
errorPromise.then(res=> console.log)
.catch(error=> console.log(error));

//only catch the error throw upwards, the operation after catch() will be executed;
errorPromise.then(res=> res+',apply operation 1')
.then(res=> res+',apply operation 2')
.then(res=> res+',apply operation 3')
.catch(error=> console.log(error))
.then(res=> console.log(res));

//3 promise.all(arr:promise[]), emit value when all resolved
const pro1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'Kobe');
})
const pro2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'Lebrone James');
})
const pro3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Jordan');
})

Promise.all([pro1,pro2,pro3]).then(
    values=> console.log(values)
)

//4 testing jsonplaceholder resources
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'];

Promise.all(urls.map(url=> fetch(url).then(resp=> resp.json())))
    .then(res=>console.log(res[0],res[1],res[2]));




