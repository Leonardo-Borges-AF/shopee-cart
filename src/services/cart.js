async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  return parseFloat(
    userCart.reduce((total, item) => total + item.subTotal(), 0).toFixed(2)
  );
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function displayCart(userCart) {
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1} ${item.name} => ${item.price} | ${
        item.quantity
      } | subtotal ${item.subTotal()}`
    );
  });
}

async function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
  } else {
    if (userCart[index].quantity > 0) {
      userCart.splice(index, 1);
    } else {
      console.log("erro ao remover item: item menor ou igual a 0");
    }
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
