
Execise:
//Amazon shopping-> implement a cart feature;
//1. add items to cart
//2. add 3% tax to items in cart
//3. buy items:cart - purchase
//4. empty cart

//functional programmaing,

const user ={
  name:'lee',
  active:true,
  cart:[],
  purchase:[],
}

const pipeReducer = (g,f) => (...arg)=> f(g(...arg));//from left to right, or from right to left?

purchaseItem(
  addItemToCart,
  applyTax,
  buyItem,
  emptyCart)(user,{product:'laptop',price:300});

function purchaseItem(...fns){
  return fns.reduce(pipeReducer);
}
function addItemToCart(user,item){ const itemArr = [].concat(item);
  return Object.assign({},user,{cart:itemArr});
}
function applyTax(user){
  const {cart}=user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item =>{
    return {
      product: item.product,
      price: item.price * taxRate};
    });
  return Object.assign({},user,{cart:updatedCart});
}
function buyItem(user){ return Object.assign({},user,{purchase:user.cart});}
function emptyCart(user){ return Object.assign({},user,{cart:[]});}
