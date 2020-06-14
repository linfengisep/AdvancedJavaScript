//sequence,parallel,race
const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay))

const a =()=> promisify('a',500);
const b =()=> promisify('b',1000);
const c =()=> promisify('c',2000);

async function sequence(){
	const first = await a();
	const second = await b();
	const third = await c();
	return `sequence done with ${first},${second},${third}`;
}
//a:funcion, a():promise;
async function parallel(){
	const promises = [a(),b(),c()];
	const [output1,output2,output3] = await Promise.all(promises);
	return `parallel done with ${output1},${output2},${output3}`;
}

async function race(){
	const promises = [a(),b(),c()];
	const res = await Promise.race(promises);
	return `race done with ${res}`;
}

race().then(console.log)
parallel().then(console.log)
sequence().then(console.log)

