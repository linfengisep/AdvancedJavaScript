//async, await
async function getUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    console.log('step 1 url:',url);
    const response = await fetch(url);
    console.log('step 2 response');
    const res = await response.json();
    console.log('step 3 json res');
    console.log(res);
}
getUsers();


//error handling with async,await, instead of treating error in the .catch(), using try catch block;
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'];
const getData = async function(){
    try{
        const [users,albums,posts] = await Promise.all(urls.map(url=> fetch(url).then(res=> res.json())));
        console.log('users:',users);
        console.log('albums:',albums);
        console.log('posts:',posts);
    }catch(error){
        console.log('jsonplaceholder service',error);
    }
}
getData();

//looping through promise array
const getDataLoop = async function(){
    const arrayPromises = urls.map(url=> fetch(url));
    for await(let request of arrayPromises){
        const data = await request.json();
    }
}
getDataLoop();

