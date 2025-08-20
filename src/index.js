import * as cartService from "./services/cart.js";
import createItem from "./services/intem.js";

const cart = [];
const whishList = [];

console.log("welcome to your cart 😊");

const item1 = await createItem("mouse", 10, 2);
const item2 = await createItem("hotwheels", 7.99, 3);
const item3 = await createItem("teclado", 63.72, 6);
const item4 = await createItem("cadeira", 200, 5);
const item5 = await createItem("mesa", 112.5, 2);
const item6 = await createItem("monitor", 199.99, 10);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, "mouse");
await cartService.removeItem(cart, "mouse");
await cartService.removeItem(cart, "hotwheels");

await cartService.addItem(whishList, item3);
await cartService.addItem(whishList, item4);
await cartService.addItem(whishList, item5);
await cartService.addItem(whishList, item6);

console.log("cart itens:");
cartService.displayCart(cart);

console.log("\n");

console.log("Total🤑:");
console.log(await cartService.calculateTotal(cart));

console.log("\n");

console.log("whishList itens:");
cartService.displayCart(whishList);

console.log("\n");

console.log("wishlist total:🛒");
console.log(await cartService.calculateTotal(whishList));
